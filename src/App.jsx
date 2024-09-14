function Header() {
  return (
    <>
      <header>
        <img src="public/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>Jaime de Greiff @alegreiff</h1>
        <p>
          Conceptos básicos de react que son necesario s para desarrollar un app
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
