import React from "react";
import Link from "next/link";
import {AiOutlineGithub, AiOutlineMail, AiOutlineTwitter} from "react-icons/ai";
import {ImLinkedin} from "react-icons/im";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#e81574]">Veronica</span>
          </h1>
          <h2 className="py-2 text-gray-700 ">Fullstack developer</h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            "Fork my work because I'm ready to commit."
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/ngocdiep219/">
                <ImLinkedin />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link href="https://github.com/veronicarhody219">
                <AiOutlineGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link href="https://twitter.com/VeronicaRhody">
                <AiOutlineTwitter />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link href="mailto: ngocdiep219@gmail.com">
                <AiOutlineMail />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
