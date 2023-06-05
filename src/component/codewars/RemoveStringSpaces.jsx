// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
// Write a function that removes the spaces from the string, then return the resultant string.

//     Examples:

// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"



import React, { useEffect, useState } from "react"


export const noSpace = x => x.split(' ').join('')


export const RemoveStringSpaces = () => {
    const [answer, setAnswer] = useState([])
    const a = '8 j 8   mBliB8g  imjB8B8  jl  B'

    const onClick = () => {
        setAnswer(noSpace(a))
    }

    useEffect(() => {
        console.log(answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> строка: {a}</div>
            {/* <div style={{ marginTop: '10px' }}> B: {b}</div> */}
            {/* <div style={{ marginTop: '10px' }}> ширина: [{w}]</div> */}
            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}


        </div>
    )

}