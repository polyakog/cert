// https://www.codewars.com/kata/63cbe409959401003e09978b/train/javascript
// These arrays are too long! Let's reduce them!

// Description
// Write a function that takes in an array of integers from 0 - 9, and returns a new array:

// Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
// Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
// Example

// [0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

// Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer:

// [0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

// When your function has reduced the array to a single integer following these rules, it should return that integer.

// [2] => 2

// Rules and assertions
// All test arrays will be 2 + in length
// All integers in the test arrays will be positive numbers from 0 - 9
// You should return an integer, not an array with 1 element


import React, { useEffect, useState } from "react"


export const setReducer = (input) => {
    let sum = 1
    while (input.length > 1) {
        for (let i = 0; i < input.length; i++) {
            for (let j = i + 1; j < input.length; j++) {
                if (input[i] === input[j]) { sum++ } else break
            }
            input.splice(i, sum, sum)
            sum = 1
        }
    }
    return input[0]
};

export const SetReducer = () => {
    const [answer, setAnswer] = useState([])
    const input = [2, 4, 9]


    const onClick = () => {
        setAnswer(setReducer(input))
    }

    useEffect(() => {
        console.log(answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> input : {input.join(', ')}</div>
            {/* <div style={{ marginTop: '10px' }}> e: {e}</div>
            <div style={{ marginTop: '10px' }}> s: {s}</div> */}

            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}

        </div>
    )

}