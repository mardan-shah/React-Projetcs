import { useState } from "react";
import GridItem from "./GridItem";

const Page = ({ input, setInput, p1, setP1, p2, setP2, checkWin, reset, p1Count, p2Count }) => {
   
    const [draw, setDraw] = useState(0);

    const checkDraw = () => {
        let count = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (input[i][j] === " ") {
                    count++;
                }
            }
        }
        if (count === 0) {
            setDraw(draw + 1);
            reset();
        }
        return;
    }

    /*update board*/
    const change = (row, col) => {
        if (input[row][col] === " ") {
            const newInput = [...input];
            if (p1) {
                newInput[row][col] = "X";
                setInput(newInput);
                setP1(false);
                setP2(true);
            } else {
                newInput[row][col] = "O"; // Use else for player 2
                setInput(newInput);
                setP2(false);
                setP1(true);
            }
        }
        checkWin();
        checkDraw();
    }

    return ( 
        <div className="w-screen h-screen bg-gray-900">
            <h1 className="text-green-500 text-center pt-10 text-5xl">
                {p1 ? "Player 1's turn" : "Player 2's turn"}
            </h1>

            <div className="container mx-auto mt-8">
                <div className="flex justify-center items-center">
                    <div className="w-3/12 grid grid-cols-3 gap-2">
                        {input.map((row, rowIndex) => (
                            row.map((col, colIndex) => (
                                <GridItem
                                    key={`${rowIndex}-${colIndex}`}
                                    content={col}
                                    rowIndex={rowIndex}
                                    colIndex={colIndex}
                                    change={change}
                                />
                            ))
                        ))} 
                    </div>
                </div>
            </div>
            
            <div className="text-center py-5 text-xl">
                <button
                    onClick={reset}
                    className="bg-green-400 w-1/12 rounded-lg hover:bg-cyan-500"
                >
                    Reset
                </button>
            </div>
            <h1 className="text-cyan-400 text-center py-1 text-md">
                {`Player 1 wins = ${p1Count} | Player 2 wins = ${p2Count} | Draws = ${draw}`}
            </h1>
            <h1 className="text-green-500 text-center pt-5 text-3xl">Tick Tack Toe</h1>
            <h1 className="text-cyan-400 text-center pt-1 text-sm">
                <a target="blank" href="https://github.com/mardan-shah">Created by Ali Mardan</a>
            </h1>
        </div>
    );
}
 
export default Page;
