import React from "react";
import Image from "next/image";
import Link from "next/link";
import pixabayImg from "../public/assets/projects/pixabayapi.png";
import chuckImg from "../public/assets/projects/chucknorrisapi.png";
import randomAdviceImg from "../public/assets/projects/randomadviceapi.png";
import weatherImg from "../public/assets/projects/weatherapp.png";
import pmaImg from "../public/assets/projects/pmatrelloclone.png";

const ProjectItem = ({title, backgroundImg, projectUrl, framework}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#e81574] to-[#709dff]">
      <Image
        src={backgroundImg}
        className="rounded-xl  group-hover:opacity-10 "
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center uppercase">
          {framework}
        </p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-bg cursor-pointer">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
