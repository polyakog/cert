// https://www.codewars.com/kata/58ae6ae22c3aaafc58000079/train/javascript
// Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

// Example
// madam -> True
// adamm -> True
// junk -> False

// Hint
// The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.


import React, { useEffect, useState } from "react"


export function permuteAPalindrome(input) {
    return [...input].sort().join('').replace(/(.)\1/g, '').length < 2
}


export const PermuteAPalindrome = () => {
    const [answer, setAnswer] = useState([])

    const current = 'madam'
  
    const onClick = () => {

        setAnswer(permuteAPalindrome(current))

    }

    useEffect(() => {
        console.log(answer)


    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> Цвет: {current}</div>
            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer? 'true' : 'false'}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}


        </div>
    )

}