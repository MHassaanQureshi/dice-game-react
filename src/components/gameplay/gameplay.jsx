
import Totalscore from "../totalscore/totalscore";
import style from "./gameplay.module.css"
import Diceimage from "../diceimage/diceimage";
import Button from "../buttons/button";
import {useState} from "react";

export default function Gameplay(){
    const [currentDice, setCurrentDice ] = useState(1);
    const [selectedNumber,setSelectedNumber] = useState();
    const[Score , setscore] = useState(0);
    
    const [error,seterror]=useState("");
    const getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    const reset=()=>{
        setscore(0)
    }




     const rollDice = () => {
        if(!selectedNumber){
            seterror("please select a number")
            return
        }
        seterror("")
        const randomNumber = getRandom(1, 6);
        setCurrentDice(randomNumber);
        if(!selectedNumber)return
        if(selectedNumber === randomNumber){
            setscore(prev => prev + 1)
            
    
        }
        else{
            setscore(prev => prev-1)
        }
        setSelectedNumber(undefined)
    };
   
    return (
        <>
        <div className={`${style.head}`}>
        <Totalscore selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} Score={Score} error={error}/>
        
         
        </div>
        
        <Diceimage currentDice={currentDice} rollDice={rollDice}/>
        <div className={`${style.button}`}>
        <Button text=" Reset Score" reset={reset}/>
        <Button text=" Show Rules" className={style.secondbutton} />
       
        </div>

       
    
        </>
    )
}