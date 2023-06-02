// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
// You're writing code to control your town's traffic lights.You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

import React, { useEffect, useState } from "react"


export const updateLight = current => (current === "green" ? "yellow" : current === "yellow" ? "red" : "green")


export const PillarDistance = () => {
    const [answer, setAnswer] = useState([])

    const current = 'green'
  
    const onClick = () => {

        setAnswer(updateLight(current))

    }

    useEffect(() => {
        console.log(answer)


    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> Цвет: {current}</div>
            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}


        </div>
    )

}