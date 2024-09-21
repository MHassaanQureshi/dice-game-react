
import Totalscore from "../totalscore/totalscore";
import style from "./gameplay.module.css"
import Diceimage from "../diceimage/diceimage";
import Button from "../buttons/button";
import {useState} from "react";

export default function Gameplay(){
    const [currentDice, setCurrentDice ] = useState(1);
    const [selectedNumber,setSelectedNumber] = useState();
    const[Score , setscore] = useState(0);
    const getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

     const rollDice = () => {
        const randomNumber = getRandom(1, 6);
        setCurrentDice(randomNumber);
        if(selectedNumber === randomNumber){
            setscore(prev => prev + 1)
    
        }
        else{
            setscore(prev => prev-1)
        }
    };
   
    return (
        <>
        <div className={`${style.head}`}>
        <Totalscore selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} Score={Score}/>
        
        
        </div>
        
        <Diceimage currentDice={currentDice} rollDice={rollDice}/>
        <div className={`${style.button}`}>
        <Button text=" Reset Score"/>
        <Button text=" Show Rules" className={style.secondbutton}/>
       
        </div>

       
    
        </>
    )
}