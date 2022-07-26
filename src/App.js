import React, { useState, useEffect } from "react"

import NavbarView from "./views/NavbarView"
import ScreenView from "./views/ScreenView"
import KeyboardView from "./views/KeyboardView"
import { wordList } from "./worldList"
import MessageModule from "./components/MessageModule"

function App() {
  const [gameOver, setGameOver] = useState(false)
  const [turn, setTurn] = useState([true, true, true, true, true])

  const [historyGuesses, setHistoryGuesses] = useState([])
  const [wordOfGame, setWordOfGame] = useState("")

  const [messageModuleSwitch, setMessageModuleSwitch] = useState({
    power: false,
    alertText: "",
    frameColor: ""
  })

  useEffect(() => {
    setWordOfGame(wordList[Math.floor(Math.random() * wordList.length)])
  }, [])

  const addLetter = (letterToAdd) => {
    if (gameOver == false) {
      if (letterToAdd == "enter") {
        enterWord()
      } else if (letterToAdd == "back") {
        removeLetter()
      } else if (historyGuesses.length == 0) {
        setHistoryGuesses([...historyGuesses, [{ key: letterToAdd, keyColor: "var(--white)", keyBackgroundColor: "var(--lightGrey)" }] ])
      } else if (historyGuesses[historyGuesses.length - 1].length < 5) {
        let lastRow = historyGuesses[historyGuesses.length - 1]
        lastRow.push({ key: letterToAdd, keyColor: "var(--white)", keyBackgroundColor: "var(--lightGrey)" })
  
        let lastRemoved = historyGuesses
        lastRemoved.pop()
        setHistoryGuesses([...lastRemoved, lastRow])
      } else {  }
    } else {  }
  }

  const removeLetter = () => {
    if (turn[historyGuesses.length - 1] == true) {
      let lastRow = historyGuesses[historyGuesses.length - 1]
      lastRow.pop()

      let lastRemoved = historyGuesses
      lastRemoved.pop()

      setHistoryGuesses([...lastRemoved, lastRow])
    } else {  }
  }

  const enterWord = () => {
    let extractedFromArray = ""
    for (let f = 0; f < historyGuesses[historyGuesses.length - 1].length; f++) {
      extractedFromArray += historyGuesses[historyGuesses.length - 1][f].key
    }

    if (historyGuesses[historyGuesses.length - 1].length == 5) {
      let sampleNewData = []
      let wordOfGameToArray = wordOfGame.split('')

      let usedLetters = wordOfGame
      for (let j = 0; j < historyGuesses[historyGuesses.length - 1].length; j++) {
        if (wordOfGame.includes(historyGuesses[historyGuesses.length - 1][j].key) && usedLetters.includes(historyGuesses[historyGuesses.length - 1][j].key)) {
          if (historyGuesses[historyGuesses.length - 1][j].key == wordOfGameToArray[j]) {
            // Green
            sampleNewData.push({ key: historyGuesses[historyGuesses.length - 1][j].key, keyColor: "var(--white)", keyBackgroundColor: "var(--green)" })
            usedLetters = usedLetters.replace(historyGuesses[historyGuesses.length - 1][j].key, "")
          } else {
            // Yellow
            sampleNewData.push({ key: historyGuesses[historyGuesses.length - 1][j].key, keyColor: "var(--white)", keyBackgroundColor: "var(--yellow)" })
            usedLetters = usedLetters.replace(historyGuesses[historyGuesses.length - 1][j].key, "")
          }
        } else { 
          // Leave alone
          sampleNewData.push({ key: historyGuesses[historyGuesses.length - 1][j].key, keyColor: "var(--white)", keyBackgroundColor: "var(--darkGrey)" })
        }
      }

      // Check if game is over 
      if (historyGuesses.length >= 5) {
        setGameOver(true)
        setMessageModuleSwitch({
          power: true,
          alertText: "Game ended unsuccessfully, reload to restart",
          frameColor: "#DB4437"
        })
      }

      if (extractedFromArray == wordOfGame) {
        setGameOver(true)
        setMessageModuleSwitch({
          power: true,
          alertText: `Congrats you won in ${historyGuesses.length} ${historyGuesses.length == 1 ? "try" : "tries"}, reload to restart`,
          frameColor: "#0F9D58"
        })
      }

      let lastRemoved = historyGuesses
      lastRemoved.pop()
      setHistoryGuesses([...lastRemoved, sampleNewData, []])

      let arrayCopy = turn
      arrayCopy[historyGuesses.length - 1] = false
      setTurn(arrayCopy)
    } else { 
      setMessageModuleSwitch({
        power: true,
        alertText: "Please check the spelling & (or) length of your guess",
        frameColor: "#DB4437"
      })
    }
  }

  const setMessageModuleSwitchOutsideFunc = () => {
    setMessageModuleSwitch({
      power: false,
      alertText: "",
      frameColor: ""
    })
  }

  return (
    <div className="main-app">
      {
        messageModuleSwitch.power ? <MessageModule setMessageModuleSwitchOutsideFunc={setMessageModuleSwitchOutsideFunc} alertText={messageModuleSwitch.alertText} frameColor={messageModuleSwitch.frameColor} /> : <></>
      }
      <NavbarView />
      <ScreenView historyGuesses={historyGuesses} />
      <KeyboardView addLetter={addLetter} />
    </div>
  )
}

export default App
