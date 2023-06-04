// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


import React, { useEffect, useState } from "react"


export const number= array=> array!==[] ? array.map((a, i, ar) => (i+1)+": "+ a) : []




export const LineNumbering = () => {
    const [answer, setAnswer] = useState([])
    const a = ["a", "b", "c"]
    
  
    const onClick = () => {
        setAnswer(number(a))
    }

    useEffect(() => {
        console.log(answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> массив: [{a.join(', ')}]</div>
            {/* <div style={{ marginTop: '10px' }}> ширина: [{w}]</div> */}
            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            {/* <div style={{ marginTop: '10px' }}> Answer: {answer}</div> */}
            <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div>


        </div>
    )

}