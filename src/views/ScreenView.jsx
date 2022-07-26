import React from "react"
import LetterComp from "../components/LetterComp"

const ScreenView = ({ historyGuesses }) => {  
  return (
    <div className="main-screen-view">
      {
        historyGuesses.map((i) => {
          return (
            <div>
              <LetterComp letter={i[0]?.key} letterColor={i[0]?.keyColor} backgroundColor={i[0]?.keyBackgroundColor} />
              <LetterComp letter={i[1]?.key} letterColor={i[1]?.keyColor} backgroundColor={i[1]?.keyBackgroundColor} />
              <LetterComp letter={i[2]?.key} letterColor={i[2]?.keyColor} backgroundColor={i[2]?.keyBackgroundColor} />
              <LetterComp letter={i[3]?.key} letterColor={i[3]?.keyColor} backgroundColor={i[3]?.keyBackgroundColor} />
              <LetterComp letter={i[4]?.key} letterColor={i[4]?.keyColor} backgroundColor={i[4]?.keyBackgroundColor} />
            </div>
          )
        })
      }
    </div>
  )
}

export default ScreenView