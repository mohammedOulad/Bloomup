import { wrap } from "module";
import React from "react";

function Homepage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Choice of Headless CMS </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
          <img
            style={{ margin: 10 }}
            src="../../strapiImg.jpg"
            alt=""
            height={180}
            width={400}
          />
          <img
            style={{ margin: 20 }}
            src="../../prismicImg.jfif"
            alt=""
            height={180}
            width={450}
          />

          <img
            style={{ margin: 20 }}
            src="../../ghost.png"
            alt=""
            height={150}
            width={400}
          />
          <img
            style={{ margin: 20 }}
            src="../../contentfulImg.png"
            alt=""
            height={200}
            width={400}
          />
          <img
            style={{ margin: 20 }}
            src="../../keystoneimg.png"
            alt=""
            height={200}
            width={400}
          />
      </div>
    </div>
  );
}

export default Homepage;
