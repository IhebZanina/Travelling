import "./App.css";
import Title from "./Components/Title";
import PoposList from "./Components/PoposList";
import Footer from "./Components/Footer";
import About from "./Components/About";
import PoposDetails from "./Components/PoposDetails";
import { HashRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Title title="NORWAY" subtitle="Privately Owned Public Open Spaces" />
        <Route exact path="/" component={PoposList} />
        <Route path="/about" component={About} />
        <Route path="/details/:id" component={PoposDetails} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
