// https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript
// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// Arguments (Haskell)
// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// Example
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'


import React, { useEffect, useState } from "react"

export const titleCase = (title, minorWords) => {
    if (!title) return ""
    const result = title
        .split(" ")
        .map((item, index) =>
            minorWords
                ?.split(" ")
                ?.map((g) => g.toLowerCase())
                .includes(item.toLowerCase()) && index !== 0
                ? item.toLowerCase()
                : item[0].toUpperCase() + item.slice(1).toLowerCase()
        )
        .join(" ");
    return result;
}



export const TitleCase = () => {
    const [answer, setAnswer] = useState([])
    const a = 'a clash of KINGS'
    const b = 'a an the of'




    const onClick = () => {
        setAnswer(titleCase(a, b))
    }

    useEffect(() => {
        console.log(answer)
    }, [answer])


    return (
        <div>
            <div style={{ marginTop: '200px' }}> title: {a}</div>
            <div style={{ marginTop: '10px' }}> minor words: {b}</div>
            {/* <div style={{ marginTop: '10px' }}> ширина: [{w}]</div> */}
            <button onClick={onClick} style={{ marginTop: '10px', background: '#4b81df', color: 'white' }}>Result</button>

            <div style={{ marginTop: '10px' }}> Answer: {answer}</div>
            {/* <div style={{marginTop:'10px'}}> Answer: {answer.join(', ')}</div> */}


        </div>
    )

}