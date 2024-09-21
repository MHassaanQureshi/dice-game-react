
import style from "./diceimage.module.css";

export default function Diceimage({currentDice, rollDice }) {

    return (
        <>
            <div className={style.diceimg} onClick={rollDice}>
                
                {currentDice && (
                    <img src={`/images/dice_${currentDice}.png`} alt={`Dice showing ${currentDice}`} />
                )}
                <p>Click on the dice to roll</p>
            </div>
        </>
    );
}
