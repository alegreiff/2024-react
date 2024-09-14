import image1 from "/assets/jsx-ui.png";
import "./Header.css";
const reactDescriptions = ["CLAVES", "BÁSICOS", "IMPRESCINDIBLES"];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export default function Header() {
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
