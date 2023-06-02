// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


import React, { useEffect, useState } from "react"

export const digitize= n => n.toString().split("").reverse().map(Number)


export const Quadrants = () => {
    const [answer, setAnswer] = useState([[]])
    const n = 35231
 


    const onClick = () => {

        setAnswer(digitize(n))

    }

    useEffect(() => {
        console.log(answer)


    }, [answer])


    return (
        <div>

            <div style={{ marginTop: '200px' }}> n: {n}</div>
           
            <button onClick={onClick} style={{ marginTop: '20px', background: '#4b81df', color: 'white'}}>Result</button>

            {/* <div> Answer: {answer}</div> */}
            <div> Answer: {answer.join(', ')}</div>


        </div>
    )

}