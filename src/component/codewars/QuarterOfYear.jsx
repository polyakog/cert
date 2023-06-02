// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2(February), is part of the first quarter; month 6(June), is part of the second quarter; and month 11(November), is part of the fourth quarter.

//     Constraint:

// 1 <= month <= 12

import React, { useEffect, useState } from "react"


export const quarterOf = (month) => {
      return Math.ceil(month / 3)
}




export const QuarteOfYear = () => {
    const [answer, setAnswer] = useState()
    const month = 4



    const onClick = () => {
        setAnswer(quarterOf(month))

    }

    useEffect(() => {
        console.log(answer)

    }, [answer])


    return (
        <div>

            <button onClick={onClick}>Result</button>

            <div> Answer: {answer}</div>


        </div>
    )

}