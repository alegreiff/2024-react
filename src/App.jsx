import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import { Biko } from "./components/Biko";
import { CoreConcept } from "./components/CoreConcept/CoreConcept";
import { TabButton } from "./components/TabButton";
import { useState } from "react";

function App() {
  const [tabContent, settabContent] = useState("Please select a button")
  
  function handleClick(selectedButton) {
    console.log(selectedButton)
    settabContent(selectedButton)
  }

  return (
    <div className="bg-slate-700">
      <Header />
      <main className="">
        <section id="core-concepts">
          <div className="container mx-auto bg-pink-600">
            <h2>Empezamos porque se hace tarde</h2>
            <ul>
              <CoreConcept {...CORE_CONCEPTS[0]} />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} />
            </ul>
          </div>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onMyClick={() => handleClick('components')}>Components</TabButton>
            <TabButton onMyClick={() => handleClick('jsx')}>Jsx</TabButton>
            <TabButton onMyClick={() => handleClick('props')}>Props</TabButton>
            <TabButton onMyClick={() => handleClick('state')}>State</TabButton>
          </menu>
          {tabContent}

        </section>
        <Biko />
      </main>
    </div>
  );
}

export default App;
