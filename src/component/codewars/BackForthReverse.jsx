// https://www.codewars.com/kata/60cc93db4ab0ae0026761232/train/javascript
// A list S will be given.You need to generate a list T from it by following the given process:

// Remove the first and last element from the list S and add them to the list T.
// Reverse the list S
// Repeat the process until list S gets emptied.
// The above process results in the depletion of the list S.Your task is to generate list T without mutating the input List S.

//     Example
// S = [1, 2, 3, 4, 5, 6]
// T = []

// S = [2, 3, 4, 5] => [5, 4, 3, 2]
// T = [1, 6]

// S = [4, 3] => [3, 4]
// T = [1, 6, 5, 2]

// S = []
// T = [1, 6, 5, 2, 3, 4]
// return T
// Note
// size of S goes up to 10 ^ 6

import React, { useEffect, useState } from "react"

const arrange= (s)=> {
    const t = [];
    const n = s.length / 2;
    let turn = false;
    for (let i = 1; i < n + 0.5; i++) {
        if (!turn) {
            t.push(s[i - 1]);
            t.push(s[s.length - i]);
        } else {
            t.push(s[s.length - i]);
            t.push(s[i - 1]);
        }
        turn = !turn;
    }
    if (n > Math.floor(n)) {
        t.push(s[n - 0.5]);
    }
    return t;
}


export const BackForthReverse = () => {
    const [answer, setAnswer] = useState([])
    const data = [1, 2, 3, 4, 5, 6]

    const onClick = () => {

        setAnswer(arrange(data))
    }

    useEffect(() => {
        console.log('answer:', answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> data : {data}</div>
            {/* <div style={{ marginTop: '10px' }}> e: {e}</div>
            <div style={{ marginTop: '10px' }}> s: {s}</div> */}

            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}

        </div>
    )

}