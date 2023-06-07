// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript
// our task is to remove all consecutive duplicate words from a string, leaving only first words entries.For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space.There will be no leading or trailing spaces in the string.An empty string(0 words) is a valid input.




import React, { useEffect, useState } from "react"


export function removeConsecutiveDuplicates(str) {
    return str
        .split(" ")
        .filter((word, index, arr) => word !== arr[index + 1])
        .join(" ");
}

// export const removeConsecutiveDuplicates = (string) => {
//     const array = string.split(' ')
//     let sum =0

//     for (let i = 0; i < array.length-1; i++) {
//         for (let j = i+1; j < array.length; j++) {
//             if (array[i] === array[j]) {sum ++} else break                        
//         }
// array.splice(i, sum)
//             sum =0
//     }
//     return array.join(' ')
//   };

export const RemoveDuplicates3 = () => {
    const [answer, setAnswer] = useState([])
    // const input = 'alpha beta beta beta delta alpha gamma gamma gamma delta'
    const input = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"


    const onClick = () => {
        setAnswer(removeConsecutiveDuplicates(input))
    }

    useEffect(() => {
        console.log(answer)
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