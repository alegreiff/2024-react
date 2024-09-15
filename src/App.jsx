import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import { Biko } from "./components/Biko";
import { CoreConcept } from "./components/CoreConcept/CoreConcept";
import { TabButton } from "./components/TabButton";
import { useState } from "react";

function App() {
  const [tabContent, settabContent] = useState(null)
  
  function handleClick(selectedButton) {
    
    
    
    settabContent(selectedButton)
  }

  return (
    <div className="bg-purple-900">
      <Header />
      <main className="">
        <section id="core-concepts">
          <div className="container mx-auto bg-pink-600">
            <h2>Empezamos porque se hace tarde</h2>
            <ul>
              { CORE_CONCEPTS.map((elemento, i) => 
              
              <CoreConcept key={i} {...elemento} />
              ) }
              {/* <CoreConcept {...CORE_CONCEPTS[0]} />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            </ul>
          </div>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onMyClick={() => handleClick('components')} isSelected={tabContent==='components'}>Components</TabButton>
            <TabButton onMyClick={() => handleClick('jsx')} isSelected={tabContent==='jsx'}>Jsx</TabButton>
            <TabButton onMyClick={() => handleClick('props')} isSelected={tabContent==='props'}>Props</TabButton>
            <TabButton onMyClick={() => handleClick('state')} isSelected={tabContent==='state'}>State</TabButton>
          </menu>
          { tabContent ? <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre><code>{EXAMPLES[tabContent].code}</code></pre>
          
          </div> : <p>Selecciona un tema de tu interés</p> }

        </section>
        <Biko />
      </main>
    </div>
  );
}

export default App;
