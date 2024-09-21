import style from "./totalscore.module.css";
import Numberselect from "../numberSelect/Numberselect";
export default function Totalscore({selectedNumber,setSelectedNumber ,Score}){
    return(
        <>
        <div className={`${style.container}`}>
        <div className={`${style.count}`}>
        <h1>{`${Score}`}</h1>
        <p>TOTAL SCORE</p>
        </div>
       
        </div>
        <div className={`${style.numsel}`}>
        <p>Select Number</p>
        </div>
        <Numberselect setSelectedNumber={setSelectedNumber} selectedNumber={selectedNumber}/>
        

        
        </>
    )
}