import style from "./Startgame.module.css";
// eslint-disable-next-line react/prop-types
export default function Startgame({toggle}){
    return(
        <>
        <div className={`${style.main}`}>
            <img src="./public/images/dices 1.png" alt="" />
            <div className={`${style.pagetext}`}>
            <p>DICE GAME</p>
            <button onClick={toggle}>Play Now</button>
            </div>
       
        </div>
        </>
    )
}