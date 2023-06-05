// https://www.codewars.com/kata/56a4addbfd4a55694100001f
// You received a whatsup message from an unknown number.Could it be from that girlboy with a foreign accent you met yesterday evening

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests



import React, { useEffect, useState } from "react"


export const validateHello = (greetings) => {
    const regex = new RegExp('hello|ciao|salut|hallo|hola|ahoj|czesc', 'gi')  
    return regex.test(greetings)
}


export const SayHello = () => {
    const [answer, setAnswer] = useState([])
    const a = 'meh'

    const onClick = () => {
        setAnswer(validateHello(a))
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

            <div style={{ marginTop: '10px' }}> Answer: {(answer? 'true': 'false')}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}


        </div>
    )

}