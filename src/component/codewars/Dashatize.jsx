// https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript
// Given a variable n,

//     If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

//     Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'


import React, { useEffect, useState } from "react"


// const dashatize = num => Math.abs(num).toString().split(/([13579])/g).filter(Boolean).join('-');

const dashatize = (num) => {
    if (isNaN(num)) return 'NaN'
    const result = Math.abs(num)
        .toString()
        .split("")
        .map((n, i, a) => {
            if (Number(n) % 2) {            //при делении есть остаток
                if (a.length ===1) return n
                if (i === 0) return `${n}-`
                if (i === a.length - 1) return `-${n}`
                
                return `-${n}-`
            }
            return n
        })
        .join('')
        .replace(/--/g, '-')

    return result

}




export const Dashatieze = () => {
    const [answer, setAnswer] = useState([])

    const num = 6815


    const onClick = () => {

        setAnswer(dashatize(num))
    }

    useEffect(() => {
        console.log('answer:', answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> number : {num}</div>
            {/* <div style={{ marginTop: '10px' }}> e: {e}</div>
            <div style={{ marginTop: '10px' }}> s: {s}</div> */}

            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}

        </div>
    )

}