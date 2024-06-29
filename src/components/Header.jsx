export const Header = ({nextPlayer, hasWinner}) => {
    return (
        <>
            <h3>Tic Tac Toe</h3>
            <p>{`Next Player: ${nextPlayer}`}</p>
            <p>{`Winner: ${hasWinner && nextPlayer === 'X' ? 'O' : hasWinner ? 'X' : ''}`}</p>
        </>
    )
}