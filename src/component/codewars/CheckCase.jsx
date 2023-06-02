// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns - 1

import React, { useEffect, useState } from "react"


export function sameCase(a, b) {
   if (a===a.toLowerCase() && a!==a.toUpperCase() && b===b.toLowerCase() && b!==b.toUpperCase()) return 1
   if (a===a.toUpperCase() && a!==a.toLowerCase() && b===b.toUpperCase() && b!==b.toLowerCase()) return 1
   if (a===a.toUpperCase() && a!==a.toLowerCase()&& b===b.toLowerCase() && b!==b.toUpperCase()) return 0
   if (a===a.toLowerCase() && a!==a.toUpperCase()&& b===b.toUpperCase() && b!==b.toLowerCase()) return 0
    return -1
}


export const CheckCase = () => {
    const [answer, setAnswer] = useState([])
    const a = 'R'
    const b='0'


    const onClick = () => {

        setAnswer(sameCase(a, b))

    }

    useEffect(() => {
        console.log(answer)


    }, [answer])


    return (
        <div>

            <button onClick={onClick} style={{ marginTop: '200px', background: '#4b81df', color: 'white'}}>Result</button>

            <div style={{marginTop:'10px'}}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}


        </div>
    )

}