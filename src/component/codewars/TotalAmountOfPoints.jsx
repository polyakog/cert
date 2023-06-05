// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

//     if x > y: 3 points(win)
// if x < y: 0 points(loss)
// if x = y: 1 point(tie)
// We need to write a function that takes this collection and returns the number of points our team(x) got in the championship by the rules given above.

//     Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


import React, { useEffect, useState } from "react"


export const points = (games) => {
    let points = 0;
    games.forEach((game) => {
        const [x, y] = game.split(":");
        if (x > y) { points += 3 } else if (x === y) { points++ }  
    });
    return points;
}




export const TotalAmountOfPoints = () => {
    const [answer, setAnswer] = useState([])
    const a = ["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]


    const onClick = () => {
        setAnswer(points(a))
    }

    useEffect(() => {
        console.log(answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> Результаты игр: {a.join(', ')}</div>
            {/* <div style={{ marginTop: '10px' }}> B: {b}</div> */}
            {/* <div style={{ marginTop: '10px' }}> ширина: [{w}]</div> */}
            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}


        </div>
    )

}