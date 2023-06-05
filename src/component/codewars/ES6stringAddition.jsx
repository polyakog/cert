// https://www.codewars.com/kata/582e4c3406e37fcc770001ad/train/javascript
// It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings.Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise.I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.



import React, { useEffect, useState } from "react"


export const joinStrings = (string1, string2) => `${string1} ${string2}`

export const ES6stringAddition = () => {
    const [answer, setAnswer] = useState([])

    const string2 = 'testing2'
    const string1 = 'testing'

    const onClick = () => {
        setAnswer(joinStrings(string1, string2))
    }

    useEffect(() => {
        console.log(answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> строка 1 : {string1}</div>
            <div style={{ marginTop: '10px' }}> строка 2: {string2}</div>
            {/* <div style={{ marginTop: '10px' }}> ширина: [{w}]</div> */}
            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}


        </div>
    )

}