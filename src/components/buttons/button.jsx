import style from "./button.module.css";
// eslint-disable-next-line react/prop-types
export default function Button({text ,className,reset}){
    return (
        <>
        <div className={`${style.buttondiv}`} >
            <button className={className} onClick={reset}>
            {text} </button>
        </div>
         </>
        
        
    )
}