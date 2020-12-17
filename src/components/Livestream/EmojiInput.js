import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
 
const EmojiInput = () => {
  const [text, setText] = useState("");
 
  const handleOnEnter = (text) => {
    console.log("enter", text);
  }
 
  return (
    <InputEmoji
      value={text}
      onChange={setText}
      cleanOnEnter
      onEnter={handleOnEnter}
      placeholder="Type a message"
    />
  );
}

export default EmojiInput;