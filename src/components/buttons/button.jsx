import style from "./button.module.css";
// eslint-disable-next-line react/prop-types
export default function Button({text ,className}){
    return (
        <>
        <div className={`${style.buttondiv}`}>
            <button className={className}>
            {text} </button>
        </div>
         </>
        
        
    )
}