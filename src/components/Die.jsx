export default function Die ({value, isHeld, holdDice}) {
    const style =  () => isHeld ? "#59E391" : "#fff"
    
    
    return (
        <div className="die-face" style={{backgroundColor: `${style()}`}} onClick={holdDice} >
            <p className="dice-num">{value}</p>
        </div>
    )
}