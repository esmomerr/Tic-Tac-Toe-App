import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
const board ={
  display:"grid", 
  gridTemplateColumns:"auto auto auto", 
  fontWeight: "700", 
  fontSize: "50px", 
  rowGap: "24px", 
  columnGap:"48px"
}
const box = {
  backgroundColor:"green", 
  width:"100px",
  height:"100px",
  display: "flex",
  justifyContent: "center", 
  alignItems: "center",
  borderRadius: "8px"
}

export const Board = ({nextPlayer, setNextPlayer, hasWinner, setHasWinner}) => {

  const tileBoardObject = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
  }

  const WINNING_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  
  const [tileBoard, setTileBoard] = useState(tileBoardObject);

  const resetTile = () => {
    setTileBoard(tileBoardObject)
    setHasWinner(false)
    setNextPlayer('X')
  }
   
  useEffect(() => checkWinner(), [nextPlayer]);

  const checkWinner = () => {
    WINNING_CONDITIONS.map(probability => {
      const [a, b, c] = probability;
      if(tileBoard[a] && tileBoard[a] === tileBoard[b] && tileBoard[a] === tileBoard[c] && tileBoard[a]){
        setHasWinner(true);
        setTimeout(() => {
          if(confirm('Oyun Bitti! Yeniden Başlatmak istermisiniz?')){
            resetTile();
          }
          // Swal.fire(`Tebrikler Oyunu kazandınız`);
        }, 300);
      }
    })
  }

  const handleClickFile = (param) => {
    if (hasWinner) return;
    if (tileBoard[param] === null && !hasWinner){
      setTileBoard(prevState => { 
        return {
          ...prevState,
          [param]: nextPlayer
        }
        })
        setNextPlayer(nextPlayer => nextPlayer === 'X' ? 'O' : 'X');
    }
  }


  return (
      <div>
        <button onClick={() =>resetTile()}>Reset</button> <br />
        <div style={board}>
          {[...Array(9).keys()].map(element => {
            return (
              <div key={element} style={box} onClick={() => handleClickFile(element)}>
                  {tileBoard[element]}
              </div>
            )
          })}
        </div>
      </div>
  )
}