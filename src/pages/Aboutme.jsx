import "../styles/Aboutme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutme = () => {
  AOS.init();
  return (
    <div className="aboutme">
      <div className="container">
        <div data-aos="fade-right">
          <h1 className="font_size beforeTag">About me</h1>
          <p>A quick intro about me.</p>
        </div>
        <div
          data-aos="fade-up"
          className="mt-4 d-flex flex-column flex-md-row flex-wrap justify-content-between align-items-center"
        >
          <div className="div02 col-md-8 d-flex justify-content-center align-items-center pb-5">
            <img
              src="/1706953445419.JPG"
              className="myPic"
              alt="/1706953445419.JPG"
              loading="lazy"
            />
          </div>
          <div className="div01 col-md-4">
            <p>
              I am a passionate and results-driven Web Developer with hands-on
              experience in building dynamic, responsive, and scalable web
              applications. With a strong command over both front-end and
              back-end technologies, I deliver complete, production-ready
              solutions that balance performance, usability, and clean
              architecture.
              <br />
              <br />
              On the front end, I specialize in JavaScript and TypeScript,
              leveraging React.js and Next.js to create modern, high-performance
              user interfaces. I focus on crafting intuitive, visually engaging,
              and accessible experiences that enhance user interaction and
              satisfaction. My core foundations in HTML, CSS, and modern styling
              practices allow me to build pixel-perfect, responsive designs.
              <br />
              <br />
              On the back end, I work with Node.js, Express.js, and MongoDB to
              develop robust APIs and scalable systems. I also have experience
              implementing real-time features using Socket.io, enabling
              seamless, interactive application experiences.
              <br />
              <br />
              I am proficient in state management using Redux and Zustand, and I
              utilize TanStack Query for efficient data fetching, caching, and
              synchronization. For styling and UI consistency, I work with
              Tailwind CSS and Bootstrap, ensuring clean, maintainable, and
              performant designs. I also use Vercel for streamlined deployment
              and hosting workflows.
              <br />
              <br />I am a strong problem solver who enjoys tackling complex
              challenges with practical and efficient solutions. I continuously
              explore and adopt new technologies to stay up to date with the
              evolving web ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
