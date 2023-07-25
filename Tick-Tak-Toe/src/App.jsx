import Page from "./assets/Page";
import { useState } from "react";

const App = () => {

  const [winner, setWinner]=useState(" ");

   /*Empty board*/
   const [input,setInput]= useState([
    [" "," "," "],
    [" "," "," "],
    [" "," "," "]
  ]);

  /*player states*/
  const [p1,setP1] = useState(true);
  const [p2,setP2] = useState(false);

  const [p1Count, setp1Count]=useState(0);
  const [p2Count, setp2Count]=useState(0);


 



  /*calculate winner*/
  const checkWin = ()=>{
      // Check rows
    for (let i = 0; i < 3; i++) {
      if (input[i][0] === "X" && input[i][1] === "X" && input[i][2] === "X") {
        setWinner("Winner is Player 1");
        aleartWinner();
        setp1Count(p1Count+1);
        return;
      }
    }
    // Check columns
    for (let j = 0; j < 3; j++) {
      if (input[0][j] === "X" && input[1][j] === "X" && input[2][j] === "X") {
        setWinner("Winner is Player 1");
        aleartWinner();
        setp1Count(p1Count+1);
        return;
      }
    }
    // Check diagonals
    if (input[0][0] === "X" && input[1][1] === "X" && input[2][2] === "X") {
      setWinner("Winner is Player 1");
      aleartWinner();
      setp1Count(p1Count+1);
      return;
    }
    if (input[0][2] === "X" && input[1][1] === "X" && input[2][0] === "X") {
      setWinner("Winner is Player 1");
      aleartWinner();
      setp1Count(p1Count+1);
      return;
    }

     // Check rows
     for (let i = 0; i < 3; i++) {
      if (input[i][0] === "O" && input[i][1] === "O" && input[i][2] === "O") {
        setWinner("Winner is Player 2");
        aleartWinner();
        setp2Count(p2Count+1);
        return;
      }
    }
    // Check columns
    for (let j = 0; j < 3; j++) {
      if (input[0][j] === "O" && input[1][j] === "O" && input[2][j] === "O") {
        setWinner("Winner is Player 2");
        aleartWinner();
        setp2Count(p2Count+1);
        return;
      }
    }
    // Check diagonals
    if (input[0][0] === "O" && input[1][1] === "O" && input[2][2] === "O") {
      setWinner("Winner is Player 2");
      aleartWinner();
      setp2Count(p2Count+1);
      return;
    }
    if (input[0][2] === "O" && input[1][1] === "O" && input[2][0] === "O") {
      setWinner("Winner is Player 2");
      aleartWinner();
      setp2Count(p2Count+1);
      return;
    }
  }

  const aleartWinner = ()=>{
    reset();
  }

  /*Reset board*/
  const reset = ()=>{
    setInput([
      [" "," "," "],
      [" "," "," "],
      [" "," "," "]
    ]);
    setP2(false);
    setP1(true);
  }

  return (
    <>
    <Page input={input} setInput={setInput} p1={p1} setP1={setP1} p2={p2} setP2={setP2} winner={winner} checkWin={checkWin} reset={reset} p1Count={p1Count} p2Count={p2Count}/>
     </> 
  )
}

export default App
