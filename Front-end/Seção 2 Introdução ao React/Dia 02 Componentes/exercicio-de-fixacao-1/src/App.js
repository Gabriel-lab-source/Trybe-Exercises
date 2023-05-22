import React from "react";
import Image from "../../exemplo-4-renderizando-listas/src/Image";
import staringCat from "./staringCat.jpg"

function App() {
  return (
    <main>
      <Image source={ staringCat } alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;
