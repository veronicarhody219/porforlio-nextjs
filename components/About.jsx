import React from "react";
import Image from "next/image";
import Link from "next/link"

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#e81574]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-4 text-gray-600 ">
            Hello, my name is Veronica. Language is always my interest. I can
            speak Vietnamese, English, Chinese, and Russian. One day I realized
            that I wanted to create something useful with languages, then I started my journey to learn programming languages.
          </p>

          <p className="py-2 text-gray-600 ">
            I remember my first project was to create a website and after
            finishing it, I was very happy when I could create something
            beautiful with my bare hand, that feeling was amazing. During my
            learning process, I have been working on a lot of projects. Among
            them, the most interesting projects to me is fetching api, it’s like
            create something from nothing.
          </p>
          <p className="py-2 text-gray-600 ">
            From the very beginning, I always wanted to learn machine
            learning because I know it would have a very promising future but it
            was too difficult for an absolute beginner like me, that’s why I
            took the JavaScript course, and study more about its frameworks like
            React and Angular. JavaScript is a beautiful language, the more I
            study the more I fall in love with it and now I know I can study
            machine learning with tensorflowjs which is written in JavaScript
            and that’s wonderful. After finishing this course I definitely study
            machine learning with tensorflowjs and then I plan to study Python
            which is a common language for machine learning.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#project">Check out some of my projects</Link>
          </p>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex justify-center items-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/../public/assets/computer.jpg"
            width="640"
            height="426"
            alt="image1"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
