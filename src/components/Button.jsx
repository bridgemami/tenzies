import Confetti from 'react-confetti'

export default function Button ({ handleClick, tenzies, reset}) {
   return (<>
            {tenzies ? ( <div onClick={handleClick}>
                    <Confetti /> 
                <button className="roll-dice">New Game</button>
                </div>) : 
                (<div onClick={handleClick}>
                <button className="roll-dice">Roll</button>
                </div>)}
                <button className="roll-dice" onClick={reset}>Reset</button>
                </>
    )
}