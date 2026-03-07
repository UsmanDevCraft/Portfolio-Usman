import "../styles/Blog.css";
import { FaEye } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  AOS.init();

  const BLOGS_DATA = [
    {
      title: "React Concurrent Mode",
      desc: "An advanced feature of React designed to make applications more interactive and responsive by improving the way React handles rendering. Instead of rendering updates synchronously (all at once), Concurrent Mode allows React to work on multiple tasks at different priorities and interrupt rendering when necessary.",
      link: "https://dev.to/usman_awan/react-concurrent-mode-optimizing-react-performance-2mln",
      image: "/dev-comm-img-002.png",
    },
    {
      title: "React Virtualization",
      desc: "A technique used to efficiently render large lists or grids of data in React applications by only rendering the visible items on the screen and a small buffer, rather than rendering the entire list.",
      link: "https://dev.to/usman_awan/optimizing-performance-with-react-virtualization-an-industry-level-approach-264f",
      image: "/dev-comm-img-001.png",
    },
    {
      title: "Blog MERN vercel host",
      desc: "This is blog written by me to help the developers struggling to host a mern website to vercel. This blog contains each and every step required to host a mern full stack website for free on vercel.",
      link: "https://blog-mern-app-vercel-host.vercel.app/",
      image: "/blog_ss_01.png",
    },
  ];

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
