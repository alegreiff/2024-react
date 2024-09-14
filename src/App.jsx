import image1 from "/assets/jsx-ui.png";
const reactDescriptions = ["CLAVES", "BÁSICOS", "IMPRESCINDIBLES"];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function Header() {
  const description = reactDescriptions[getRandomInt(3)];
  return (
    <>
      <header>
        <img src={image1} alt="Stylized atom" />
        <h1>Jaime de Greiff @alegreiff</h1>
        <p>
          Conceptos {description} de react que son necesarios para desarrollar
          un app
        </p>
      </header>
    </>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Empezamos porque se hace tarde</h2>
      </main>
    </div>
  );
}

export default App;
