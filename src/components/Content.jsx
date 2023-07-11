import React, { useState } from 'react';
function Content() {
    const [text, setText] = useState("");
    const [enteredText, setEnteredText] = useState("");
  
    const handleChange = (event) => {
      setText(event.target.value);
    };
  
    const handleSubmit = () => {
      setEnteredText(text);
      setText("");
    };

  return (
    <div>
      <textarea
        placeholder="Enter your text here..."
        value={text}
        onChange={handleChange} 
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <p>Entered Text: {enteredText}</p>
    </div>
  );
}

export default Content;
