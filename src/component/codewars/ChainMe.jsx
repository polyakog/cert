// https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/javascript
// Write a generic function chainer
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it(array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.
// function add(num) {
//     return num + 1;
// }

// function mult(num) {
//     return num * 30;
// }

// chain(2, [add, mult]);
// // returns 90;

import React, { useEffect, useState } from "react"


export const chain = (input, fs) => {
    let output = input
    return fs.map((f, i, a) => {
        output = f(output)
        return output
    })
    
};

export const ChainMe = () => {
    const [answer, setAnswer] = useState([])
    // const input = 'alpha beta beta beta delta alpha gamma gamma gamma delta'
    const input = 2

    const fs = [
        function add(num) {
            return num + 1;
        },

        function mult(num) {
            return num * 30;
        }

    ]


    const onClick = () => {

        setAnswer(chain(input, fs))
    }

    useEffect(() => {
        console.log('answer:', answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> input : {input}</div>
            {/* <div style={{ marginTop: '10px' }}> e: {e}</div>
            <div style={{ marginTop: '10px' }}> s: {s}</div> */}

            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}

        </div>
    )

}