// https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript
// Write simple.camelCase method(camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings.All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

import React, { useEffect, useState } from "react"


// String.prototype.camelCase = function () {
//     if (this.toString) {
//         const array = this.split(' ')
//         let result = ''
//         array.forEach(s => result += s[0].toUpperCase() + s.slice(1))
//         return result
//     }
//     return ''

// }

String.prototype.camelCase = function () {
    return (this.toString() ? this.split(' ').map(s => s[0].toUpperCase() + s.slice(1)).join('') : '')
}

// split(' ').map(i => i[0].toUpperCase()).join('.')

// String.prototype.camelCase = function () {
//     if (this.toString()) {
//         const arr = this.split(" ");
//         let str = "";
//         for (let i = 0; i < arr.length; i++) {
//             str += arr[i][0]?.toUpperCase() + arr[i].slice(1);
//         }
//         return str;
//     }
//     return "";
// };


export const CamelCase = () => {
    const [answer, setAnswer] = useState([])

    const text = "camel case word"


    const onClick = () => {

        setAnswer(text.camelCase())
    }

    useEffect(() => {
        console.log('answer:', answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> string : {text}</div>
            {/* <div style={{ marginTop: '10px' }}> e: {e}</div>
            <div style={{ marginTop: '10px' }}> s: {s}</div> */}

            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}

        </div>
    )

}