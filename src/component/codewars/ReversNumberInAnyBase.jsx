



import React, { useEffect, useState } from "react"

export function reverseNumber(n, b) {
    if (b===1) return n
    let stringInNewBase = n.toString(b)
    let reverse = stringInNewBase.split("").reverse().join("")
    
    // return reverse; // To decimal
    return parseInt(reverse,b); // To decimal
}


export const ReversNumberInAnyBase = () => {
    const [answer, setAnswer] = useState([[]])
    const n = 3
    const b = 4


    const onClick = () => {

        setAnswer(reverseNumber(n, b))

    }

    useEffect(() => {
        console.log(answer)


    }, [answer])


    return (
        <div>

            <div style={{ marginTop: '200px' }}> число: {n}</div>
            <div style={{ marginTop: '10px' }}> в {b}-чной системе</div>
            <button onClick={onClick} style={{ marginTop: '20px', background: '#4b81df', color: 'white'}}>Result</button>

            {/* <div> Answer: {answer}</div> */}
            <div> Answer: {answer}</div>


        </div>
    )

}