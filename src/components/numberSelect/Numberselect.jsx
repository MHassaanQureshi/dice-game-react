import style from "./Numberselect.module.css";

import styled from "styled-components"
export default function Numberselect({selectedNumber,setSelectedNumber,error}) {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    
    console.log(selectedNumber)
    return (
        <>
        <p>{error}</p>
         <div className={style.container} >
            
            {arrNumber.map((value, i) => (
                <Box  key={i} className={style.numberbox} onClick={() => setSelectedNumber(value)} isSelected={value === selectedNumber}>
                    {value}
                </Box>
            ))}
        </div></>
       
    );
}
const Box = styled.div`
    width: 50px; 
    height: 50px;
    display: flex;
    justify-content: center; 
    align-items: center; 
    border: 1px solid #333; 
   
    background-color: #f8f8f8; 
    font-size: 18px; 
    font-weight: bold;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};
    cursor: pointer;
    @media screen and (width<= 500px){
        width: 10%;
        height: 10%;
    }
  
    
   
    

`