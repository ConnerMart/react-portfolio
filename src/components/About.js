import React from "react";
import profilepic from "../assets/profilepic.jpg";

const styles = {
  card: {
    margin: "20px 75px",
    minHeight: 750,
    background: "#3D8361",
  },
  heading: {
    background: "#1C6758",
    minHeight: 50,
    lineHeight: 2.5,
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#222222",
    padding: "0 20px",
  },
  content: {
    padding: "20px 300px",
    textAlign: "center",
  },
  text: {
    marginBottom: "40px",
  },
  image: {
    height: "335px",
    width: "300px",
    border: "5px solid #3F4E4F",
  },
};

function About() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>About Me</div>
      <div style={styles.content}>
        <p style={styles.text}>
          I am a software developer with experience in <b>JavaScript</b>, the{" "}
          <b>MERN</b> stack, <b>GraphQL</b>, and more. As a recent graduate of
          the University of Denver's Full Stack Coding Boot Camp, I am excited
          to continue my programming journey and expand my knowledge by learning
          new languages and technologies.
        </p>
        <p style={styles.text}>
          I also have a master's degree in Professional Writing and have
          experience with content writing, editing, and SEO practices. I am
          especially passionate about storytelling and love any opportunity to
          bring creativity into my work.
        </p>

        <img src={profilepic} alt="conner profile pic" style={styles.image} />
      </div>
    </div>
  );
}

export default About;