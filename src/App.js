import "./App.css";
import Title from "./Components/Title";
import PoposList from "./Components/PoposList";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Title title="NORWAY" subtitle="Privately Owned Public Open Spaces" />
      <PoposList />
      <Footer />
    </div>
  );
}

export default App;
