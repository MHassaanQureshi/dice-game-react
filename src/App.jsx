import { useState } from "react"
import Startgame from "./components/landingpage/startgame";
import Gameplay from "./components/gameplay/gameplay";
function App() {
   const [isgamestarted , setisgamestarted] = useState(false)
  const ToogleGameplay = () => {
    setisgamestarted((prev) => !prev)
  }
 
  return (
    <>
    {
      (isgamestarted ? <Gameplay /> : <Startgame
        toggle = {ToogleGameplay} />)

       
    }
   
    
    </>
  )
}

export default App
