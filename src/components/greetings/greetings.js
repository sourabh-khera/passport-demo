import React, { useState } from "react";
import Output from "../output";

const Greetings = () => {
  const [changeText, setChangeText] = useState(null);
  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <Output>It's good to see u</Output>}
      {changeText && <Output>Change text</Output>}
      <button onClick={() => setChangeText(true)}>Submit</button>
    </div>
  );
};

export default Greetings;
