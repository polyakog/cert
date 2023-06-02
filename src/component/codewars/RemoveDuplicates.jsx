// https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript
// Remove the duplicates from a list of integers, keeping the last(rightmost) occurrence of each element.

//     Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]


import React, { useEffect, useState } from "react"

// function solve(arr) {
//     let remove = []

//     for (let i = 0; i < arr.length - 1; i++) {
//         // const element = arr[i];
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 remove.push(i)
//             }
//         }
//     }
//     remove = [...new Set(remove)]

//     for (let i = remove.length - 1; i >= 0; i--) {
//         arr.splice(remove[i], 1)
//     }

//     return arr;
// }

export function solve(arr) {
    return Array.from(new Set(arr.reverse())).reverse();
}




export const RemoveDuplicates = () => {
    const [answer, setAnswer] = useState([])
    const arr = [1, 2, 1, 2, 1, 1, 3]


    const onClick = () => {

        setAnswer(solve(arr))

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