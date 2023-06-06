// https://www.codewars.com/kata/558445a88826e1376b000011/train/javascript
// Julie is x years older than her brother, and she is also y times as old as him.

// Given x and y calculate Julie's age using the function age(x, y).

// For example:

// Age(6, 3) // returns 9
// Note also that x can be negative, and y can be a decimal.

//     Age(-15, 0.25) // returns 5
// That is, Julie is 15 years younger and 0.25 times the age of her brother.

// Do not concern yourself with the imperfections inherent in dividing by floating point numbers, as your answer will be rounded.Also, for the sake of simplicity, Julie is never the same age as her brother.




import React, { useEffect, useState } from "react"


export const age =(x, y)=> x*y/--y

export const JulieAge = () => {
    const [answer, setAnswer] = useState([])
    const x = 6
    const y = 3

    const onClick = () => {
        setAnswer(age(x, y))
    }

    useEffect(() => {
        console.log(answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> x : {x}</div>
            <div style={{ marginTop: '10px' }}> y: {y}</div>
            {/* <div style={{ marginTop: '10px' }}> ширина: [{w}]</div> */}
            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}


        </div>
    )

}