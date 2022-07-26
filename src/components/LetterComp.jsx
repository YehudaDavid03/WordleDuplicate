import React from "react"

const LetterComp = ({ letter,  letterColor, backgroundColor }) => {
  return (
    <nav className="main-letter-comp" style={{color: letterColor, backgroundColor: backgroundColor}} >
      {letter}
    </nav>
  )
}

export default LetterComp