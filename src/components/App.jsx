import React from "react";
import Card from "./card";
import emojipedia from "../emojipedia";

function emojipediaEntry(props){
  return(
    <Card
  key={props.id}
  emoji={props.emoji}
  name={props.name}
  meaning={props.meaning}
  />
  )
}

function App() {
  return (
    <div>
      <h1>
      <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
       {emojipedia.map(emojipediaEntry)}
      </dl>
    </div>
  );
}

export default App;
