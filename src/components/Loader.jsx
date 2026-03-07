import "../styles/Home.css";

const Loader = () => {
  return (
    <div className="loading-container">
      <div className="loader-content">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
        <p className="loading-text">Building Experiences...</p>
      </div>
    </div>
  );
};

export default Loader;
