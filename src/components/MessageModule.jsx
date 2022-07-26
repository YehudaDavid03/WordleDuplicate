import React, { useState, useEffect } from "react"

const MessageModule = ({ setMessageModuleSwitchOutsideFunc, alertText, frameColor }) => {
  return (
    <div className="main-message-module">
      <div style={{backgroundColor: frameColor}} className="main-message-module-one"></div>

      <div style={{borderTop: `solid 1.5px ${frameColor}`, borderBottom: `solid 1.5px ${frameColor}`}} className="main-message-module-two">
        {alertText}
      </div>
      
      <div onClick={setMessageModuleSwitchOutsideFunc} style={{  borderTop: `solid 1.5px ${frameColor}`, borderBottom: `solid 1.5px ${frameColor}`, borderRight: `solid 1.5px ${frameColor}`}} className="main-message-module-three">
        <span className="material-symbols-rounded">close</span>
      </div>
    </div>
  )
}

export default MessageModule