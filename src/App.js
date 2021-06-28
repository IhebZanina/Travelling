import logo from "./logo.svg";
import "./App.css";
import Title from "./Components/Title";
import PoposList from "./Components/PoposList";
function App() {
  return (
    <div className="App">
      <Title
        title="NPOPOS"
        subtitle="Norway Privately Owned Public Open Spaces"
      />
      <PoposList />
    </div>
  );
}

export default App;
