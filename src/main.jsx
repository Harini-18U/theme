import React from "react";
import { useTheme } from "./theme";

function MainContent() {
  const { theme } = useTheme();

  const containerStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#333333" : "#dddddd",
  };  

  return (
    <div className="container-xxl" style={containerStyle}>
      <br />
      <h4>
        Superior Collaboration <span style={{ fontSize: "small" }}>Visualize Quality</span>
      </h4>
      <hr />
      <p>
        Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.
      </p>
      <div className="row">
        <div className="col-sm-4">
          <img src="./pictures/kfp.jpg" alt="panda" style={{ width: "100%", height: "200px" }} />
          <h6 style={{ color: "blue" }}>Efficiently Unleash</h6>
        </div>
        <div className="col-sm-4">
          <img src="./pictures/kfp.jpg" alt="panda" style={{ width: "100%", height: "200px" }} />
          <h6 style={{ color: "blue" }}>Completely Synergize</h6>
        </div>
        <div className="col-sm-4">
          <img src="./pictures/kfp.jpg" alt="panda" style={{ width: "100%", height: "200px" }} />
          <h6 style={{ color: "blue" }}>Dynamically Procrastinate</h6>
        </div>
      </div>
    </div>
  );
}

export default MainContent;