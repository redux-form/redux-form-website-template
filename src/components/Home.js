import React from "react";
import GithubButton from "./GithubButton";
import Sponsor from "./Sponsor";

const Home = ({ version }) => {
  const styles = require("./Home.scss");
  return (
    <div className={styles.home}>
      <div className={styles.masthead}>
        <div className={styles.logo} />
        <h1>Redux Form</h1>
        <div className={styles.version}>v{version}</div>

        <h2>The best way to manage your form state in Redux.</h2>
        <h3
          style={{
            padding: 15,
            backgroundColor: "rgba(255,255,255,0.5)",
            color: "black",
            fontSize: 18,
            borderRadius: 10,
            maxWidth: 700,
            margin: "5px auto 15px auto",
          }}
        >
          Attention: Do not begin a project with Redux Form. The author of Redux
          Form has written a superior library,{" "}
          <a href="https://final-form.org/react/">React Final Form</a>. If you
          have already started using Redux Form, there is a{" "}
          <a href="https://final-form.org/docs/react-final-form/migration/redux-form">
            migration guide
          </a>
          .
        </h3>
        <GithubButton
          user="erikras"
          repo="redux-form"
          type="star"
          width={160}
          height={30}
          count
          large
        />
        <GithubButton
          user="erikras"
          repo="redux-form"
          type="fork"
          width={160}
          height={30}
          count
          large
        />
        <div style={{ textAlign: "center" }}>
          <hr />
          <Sponsor dark />
        </div>
      </div>
      <div className={styles.options}>
        <a href="docs/GettingStarted.md">
          <i className={styles.start} />
          Start Here
        </a>
        <a href="docs/api">
          <i className={styles.api} />
          API
        </a>
        <a href="examples">
          <i className={styles.examples} />
          Examples
        </a>
        <a href="docs/faq">
          <i className={styles.faq} />
          FAQ
        </a>
      </div>
    </div>
  );
};

export default Home;
