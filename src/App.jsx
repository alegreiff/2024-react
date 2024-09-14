import componetsImage from "/assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import { Biko } from "./components/Biko";
import { CoreConcept } from "./components/CoreConcept/CoreConcept";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Empezamos porque se hace tarde</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <Biko />
      </main>
    </div>
  );
}

export default App;
