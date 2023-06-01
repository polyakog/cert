import React, { useEffect, useState } from "react"


const quarterOf = (month) => {
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