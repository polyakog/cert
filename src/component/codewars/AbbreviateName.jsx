// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
// Write a function to convert a name into initials.This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F




import React, { useEffect, useState } from "react"


export const abbrevName = (name) => {
    // name = name.toUpperCase()
    // const [name1, name2] = name.split(' ')
    // return `${name1.charAt(0)}.${name2.charAt(0)}`
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

export const AbbrevName = () => {
    const [answer, setAnswer] = useState([])
    const name = 'patrick feeney'

    const onClick = () => {
        setAnswer(abbrevName(name))
    }

    useEffect(() => {
        console.log(answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> Имя и Фамилия : {name}</div>
            {/* <div style={{ marginTop: '10px' }}> строка 2: {string2}</div> */}
            {/* <div style={{ marginTop: '10px' }}> ширина: [{w}]</div> */}
            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}


        </div>
    )

}