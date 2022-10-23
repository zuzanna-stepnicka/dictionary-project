import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2> Dictionary </h2>
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded by{" "}
          <a href="https://github.com/zuzanna-stepnicka/dictionary-project" target="_blank">
            Zuzanna Stepnicka
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
