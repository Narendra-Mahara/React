import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tailwindLogo from "./assets/tailwind.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex gap-20">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img src={tailwindLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Tailwind</h1>

      <p className="read-the-docs">
        Click on the Vite, React and Tailwind logos to learn more !
      </p>
    </>
  );
}

export default App;
