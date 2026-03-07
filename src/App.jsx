import { lazy, Suspense } from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Loader from "./components/Loader";

const Work = lazy(() => import("./pages/Work"));
const Skills = lazy(() => import("./pages/Skills"));
const Aboutme = lazy(() => import("./pages/Aboutme"));
const Blog = lazy(() => import("./pages/Blog"));
const Hireme = lazy(() => import("./pages/Hireme"));

const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </div>
  );
};

export default App;
