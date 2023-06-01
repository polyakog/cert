import React, { useEffect, useState } from "react"


function sameCase(a, b) {
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