import "../styles/Blog.css";
import { FaEye } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { BLOGS_DATA } from "../constants/blogs";

const Blog = () => {
  AOS.init();

  return (
    <div className="blog">
      <div className="container">
        <div data-aos="fade-right">
          <h1 className="font_size beforeTag">My Blogs</h1>
          <p>Checkout a few of my blogs!</p>
        </div>
        {BLOGS_DATA.map((blogs, index) => (
          <div
            data-aos="fade-up"
            className="card my-5 bg_card_color"
            key={index}
          >
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
              <div className="card-body col-md-4">
                <h5 className="card-title ProjectsTag">{blogs.title}</h5>
                <p className="card-text">{blogs.desc}</p>
                <a
                  href={`${blogs.link}`}
                  className="anchor_live"
                  target="target_main"
                >
                  <button
                    type="button"
                    className="btn btn-dark d-flex justify-content-center align-items-center gap-2"
                  >
                    <FaEye />
                    Read
                  </button>
                </a>
              </div>
              <div className="card col-md-8">
                <img
                  src={`${blogs.image}`}
                  className="card-img-top"
                  alt={`${blogs.image}`}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
