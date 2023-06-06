// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript
// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non - negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2, 2, 2 -- > 2
// 2, 6, 2 -- > 12(2 + 4 + 6)
// 1, 5, 1 -- > 15(1 + 2 + 3 + 4 + 5)
// 1, 5, 3  -- > 5(1 + 4)


import React, { useEffect, useState } from "react"


export const sequenceSum = (begin, end, step) => {
    let sum = 0
    for (let i = begin; i <= end; i += step) {
        sum += i;
    }
    return sum
};

export const SumOfSequence = () => {
    const [answer, setAnswer] = useState([])
    const b = 6
    const e = 10
    const s = 2

    const onClick = () => {
        setAnswer(sequenceSum(b, e, s))
    }

    useEffect(() => {
        console.log(answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> b : {b}</div>
            <div style={{ marginTop: '10px' }}> e: {e}</div>
            <div style={{ marginTop: '10px' }}> s: {s}</div>

            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}

        </div>
    )

}