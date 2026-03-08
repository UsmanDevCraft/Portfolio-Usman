import { useState } from "react";
import "../styles/Work.css";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { TOP_PROJECTS_DATA, ACCORDION_PROJECTS_DATA } from "../constants/work";

const Work = () => {
  AOS.init();

  const [accordionHeading, setAccHead] = useState("Show More Projects");
  const [textColor, setTextColor] = useState("text-white");
  const onClick = () => {
    if (accordionHeading === "Show More Projects") {
      setAccHead("Show Less");
      setTextColor("text-dark");
    } else {
      setAccHead("Show More Projects");
      setTextColor("text-white");
    }
  };

  return (
    <div className="work">
      <div className="container work-child">
        <div data-aos="fade-right">
          <h1 className="font_size beforeTag">My work</h1>
          <p>Checkout a few of my works!</p>
        </div>

        {/* ------------------ TOP PROJECTS ------------------ */}
        {TOP_PROJECTS_DATA.map((item, index) => (
          <div
            data-aos="fade-right"
            className="card my-5 bg_card_color"
            key={index}
          >
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
              <div
                className={`card-body col-md-4 ${index % 2 === 0 ? "order-md-1" : "order-md-2"}`}
              >
                <h5 className="card-title ProjectsTag fs-3 fw-bold">
                  {item.title}
                </h5>
                <p className="fs-4 mainPageHeadBlue fw-bold lh-1">
                  {item.tags.join(", ")}
                </p>
                <p className="card-text">{item.desc}</p>
                <a
                  href={item.link}
                  className="anchor_live"
                  target="target_main"
                >
                  <button
                    type="button"
                    className="btn btn-dark d-flex justify-content-center align-items-center gap-2"
                  >
                    <FaEye />
                    Live
                  </button>
                </a>
                <a
                  href={item.github_link}
                  className="anchor_live"
                  target="target_main"
                >
                  <button
                    type="button"
                    className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"
                  >
                    <FaGithub />
                    Source
                  </button>
                </a>
              </div>
              <div
                className={`card col-md-8 imgCard ${index % 2 === 0 ? "order-md-2" : "order-md-1"}`}
              >
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.image}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}

        {/* -------------- Accordion Button for Showing More Projects (7-10) -------------- */}
        <div
          data-aos="fade-down"
          className="accordion accordionBg"
          id="accordionExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed accordionBg"
                onClick={onClick}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <p className={`${textColor} fs-5`}>{accordionHeading}</p>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse accordionBg"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {/* ------------------ PROJECT#E-Commerce ------------------ */}
                {ACCORDION_PROJECTS_DATA.map((blog, index) => (
                  <div className="card my-5 bg_card_color" key={index}>
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                      <div
                        className={`card-body col-md-4 ${index % 2 === 0 ? "" : "order-md-2"}`}
                      >
                        <h5 className="card-title ProjectsTag fs-3 fw-bold">
                          {blog.title}
                        </h5>
                        <p className="fs-4 mainPageHeadBlue fw-bold lh-1">
                          {blog.tags.join(", ")}
                        </p>
                        <p className="card-text">{blog.desc}</p>
                        <a
                          href={blog.link}
                          className="anchor_live"
                          target="target_main"
                        >
                          <button
                            type="button"
                            className="btn btn-dark d-flex justify-content-center align-items-center gap-2"
                          >
                            <FaEye />
                            Live
                          </button>
                        </a>
                        <a
                          href={blog.github_link}
                          className="anchor_live"
                          target="target_main"
                        >
                          <button
                            type="button"
                            className="btn btn-dark mt-1 d-flex justify-content-center align-items-center gap-2"
                          >
                            <FaGithub />
                            Source
                          </button>
                        </a>
                      </div>
                      <div
                        className={`card col-md-8 imgCard ${index % 2 === 0 ? "" : "order-md-1"}`}
                      >
                        <img
                          src={blog.image}
                          className="card-img-top"
                          alt={blog.image}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
