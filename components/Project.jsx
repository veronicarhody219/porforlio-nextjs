import React from "react";
import Image from "next/image";
import Link from "next/link";
import pixabayImg from "../public/assets/projects/pixabayapi.png";
import chuckImg from "../public/assets/projects/chucknorrisapi.png";
import randomAdviceImg from "../public/assets/projects/randomadviceapi.png";
import weatherImg from "../public/assets/projects/weatherapp.png";
import pmaImg from "../public/assets/projects/pmatrelloclone.png";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#e81574]">
          Projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Pixabay API"
            backgroundImg={pixabayImg}
            framework="JavaScript"
            projectUrl="https://veronicarhody219.github.io/js-projects/1.pixabay/"
          />
          <ProjectItem
            title="Chuck Norris API"
            backgroundImg={chuckImg}
            framework="JavaScript"
            projectUrl="https://veronicarhody219.github.io/js-projects/2.chuck-norris-generator/"
          />
          <ProjectItem
            title="Random Advice API"
            backgroundImg={randomAdviceImg}
            framework="JavaScript"
            projectUrl="https://veronicarhody219.github.io/js-projects/3.advice/"
          />
          <ProjectItem
            title="Open Weather API"
            backgroundImg={weatherImg}
            framework="JavaScript"
            projectUrl="https://veronicarhody219.github.io/js-projects/5.1-weatherNoServer"
          />
          <ProjectItem
            title="Trello clone"
            backgroundImg={pmaImg}
            framework="Angular"
            projectUrl="https://pma-ezsm.onrender.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
