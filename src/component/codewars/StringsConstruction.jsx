// https://www.codewars.com/kata/58870402c81516bbdb000088/train/javascript
// How many strings equal to A can be constructed using letters from the string B? Each letter can be used only once and in one string only.

// Example
// For A = "abc" and B = "abccba", the output should be 2.

// We can construct 2 strings A with letters from B.

// Input/Output
// [input] string A

// String to construct, A contains only lowercase English letters.

// Constraints: 3 ≤ A.length ≤ 9.

// [input] string B

// String containing needed letters, B contains only lowercase English letters.

// Constraints: 3 ≤ B.length ≤ 50.

// [output] an integer


import React, { useEffect, useState } from "react"


export const stringsConstruction = (a, b) => {
    var result = 0;
    var sum = true;
    var idx
    a = a.split("");
    b = b.split("");
    while (sum) {
        for (var i = 0; i < a.length; i++) {
            idx = b.indexOf(a[i]);
            if (idx != -1) {
                b.splice(idx, 1)
            } else {
                sum = false;
                break;
            }
        }

        if (sum) {
            result++
        }
    }
    return result;
}




export const StringsConstruction = () => {
    const [answer, setAnswer] = useState([])
    const a = 'zzz'
    const b = 'zzzzzzzzzzz'



    const onClick = () => {
        setAnswer(stringsConstruction(a, b))
    }

    useEffect(() => {
        console.log(answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> A: {a}</div>
            <div style={{ marginTop: '10px' }}> B: {b}</div>
            {/* <div style={{ marginTop: '10px' }}> ширина: [{w}]</div> */}
            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}


        </div>
    )

}