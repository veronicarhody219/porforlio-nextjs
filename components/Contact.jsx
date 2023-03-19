import Image from "next/image";
import React from "react";
import Link from "next/link";
import workplaceImg from "../public/assets/workplace.jpeg";
import {AiOutlineGithub, AiOutlineMail, AiOutlineTwitter} from "react-icons/ai";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";
import {ImLinkedin} from "react-icons/im";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#e81574] ">
          Contact
        </p>
        <h2 className="py-4 ">Get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8 ">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 ">
            <div className="lg:p-4 h-full ">
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300 "
                src={workplaceImg}
                alt="working place"
              />
              <div>
                <h2 className="py-2 ">Veronica Rhody</h2>
                <h3>Full stack developer</h3>
                <p className="py-4">
                  I am available for freelance and full-time works. Let's
                  connect.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <Link href="https://www.linkedin.com/in/ngocdiep219">
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
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 ">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone number
                    </label>
                    <input
                      type="number"
                      className="border-2 rounded-lg p-3 flex border-gray-300 "
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300 "
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300 "
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    rows="10"></textarea>
                </div>
                <button className="w-full p-4 text-gray-300 mt-4">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
