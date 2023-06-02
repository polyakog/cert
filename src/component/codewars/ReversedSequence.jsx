// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
// Build a function that returns an array of integers from n to 1 where n>0.
// Example: n = 5 -- > [5, 4, 3, 2, 1]
 

import React, { useEffect, useState } from "react"


export const reverseSeq = n => {
    let array=[]
    for (let i = 0; i < n; i++) {
        array.push(i+1);        
    }
    return array.reverse();
};

// export const reverseSeq = n => {
//     return Array(n).fill(0).map((a, i) => n - i);
// };



export const ReversedSequence = () => {
    const [answer, setAnswer] = useState([])
    const n = 10


    const onClick = () => {

        setAnswer(reverseSeq(n))

    }

    useEffect(() => {
        console.log(answer)


    }, [answer])


    return (
        <div>

            <button onClick={onClick} style={{ marginTop: '200px', background: '#4b81df', color: 'white'}}>Result</button>

            {/* <div> Answer: {answer}</div> */}
            <div> Answer: {answer.join(', ')}</div>


        </div>
    )

}