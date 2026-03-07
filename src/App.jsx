import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Aboutme from "./pages/Aboutme";
import Hireme from "./pages/Hireme";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="aboutme">
        <Aboutme />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="hireme">
        <Hireme />
      </section>
    </div>
  );
};

export default App;
