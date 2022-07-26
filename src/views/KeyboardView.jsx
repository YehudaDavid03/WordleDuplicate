import React, { useState } from "react"

const KeyboardView = ({ addLetter }) => {
  const [keyboardKeys, setKeyboardKeys] = useState([
    [
      { letter: "q", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "w", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "e", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "r", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "t", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "y", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "u", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "i", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "o", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "p", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" }
    ],
    [
      { letter: "a", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "s", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "d", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "f", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "g", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "h", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "j", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "k", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "l", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" }
    ],
    [
      { letter: "enter", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "z", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "x", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "c", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "v", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "b", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "n", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "m", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" },
      { letter: "back", keyColor: "var(--black)", backgroundColor: "var(--lightGrey)" }
    ]
  ])

  return (
    <div className="main-keyboard-view">
      {
        keyboardKeys.map((i) => {
          return (
            <div>
              {
                i.map((j) => {
                  return (
                    <nav onClick={() => {addLetter(j.letter)}} className="main-key-comp" style={{color: j.keyColor, backgroundColor: j.backgroundColor}} >
                      {j.letter}
                    </nav>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default KeyboardView