// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
// Create a function that takes an integer as an argument and returns 
// "Even" for even numbers or "Odd" for odd numbers.

import React, { useEffect, useState } from "react"


export const evenOrOdd = number => (number/2 === Math.round(number / 2)? 'Even' : 'Odd')


export const EvenOdd = () => {
    const [answer, setAnswer] = useState([])
    const number = 3
    


    const onClick = () => {

        setAnswer(evenOrOdd(number))

    }

    useEffect(() => {
        console.log(answer)


    }, [answer])


    return (
        <div>
            <div style={{marginTop:'200px'}}> Data: {number}</div>
            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white'}}>Result</button>

            <div style={{marginTop:'10px'}}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}


        </div>
    )

}