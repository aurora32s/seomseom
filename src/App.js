import { Route, Routes } from "react-router-dom";
import "./App.css";

// component
import Nav from "./components/Navigation/Nav";
import About from "./components/About/About";
import History from "./components/History/History";
import Book from "./components/Book/Book";
import Project from "./components/Project/Project";
import Skill from "./components/Skill/Skill";
import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Nav />
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/book" element={<Book />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
        </Routes>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
