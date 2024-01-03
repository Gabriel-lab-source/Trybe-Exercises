import React from "react";

export default function App() {
  const textJSX = 'Hello, JSX!'
  const h1Element = <h1>{textJSX}</h1>
  return (
    <div>
      {h1Element}
    </div>
  );
}


