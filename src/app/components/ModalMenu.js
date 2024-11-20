import React from "react";
import SideBarMenu from "./SideBarMenu";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const ModalMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full h-full bg-white dark:bg-gray-900 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white font-bold bg-red-500 hover:bg-red-700 rounded-full px-2 py-1"
        >
          X
        </button>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <nav className="space-y-6">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <SideBarMenu />
              </div>
              <div className=" mt-4 flex space-x-6 justify-center items-center">
                <a
                  href="https://github.com/DaX-523"
                  target="_blank"
                  className="text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/daksh-dhama"
                  target="_blank"
                  className="text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://x.com/DakshJs"
                  target="_blank"
                  className="text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
