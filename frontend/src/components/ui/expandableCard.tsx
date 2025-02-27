
"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideCall";
import { IconX } from "@tabler/icons-react";
import { blog1 } from "@/assets";
import { reallogo } from "@/assets";


const CloseIcon = () => {
  return <IconX className="h-6 w-6 text-gray-500" />;
};

export function ExpandableCard({ title, description, content, icon }) {
    const [isActive, setIsActive] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      function onKeyDown(event) {
        if (event.key === "Escape") {
          setIsActive(false);
        }
      }
  
      if (isActive) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
  
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }, [isActive]);
  
    useOutsideClick(ref, () => setIsActive(false));
  
    return (
      <div ref={ref}>
        <motion.div
          className="p-4 flex flex-col hover:bg-primary dark:hover:bg-primary2 rounded-xl cursor-pointer"
          onClick={() => setIsActive(true)}
        >
          <div className="flex items-center space-x-4">
            {icon}
            <div>
                <img src={reallogo} height={110} width={610}/>
              {/* <h2 className="text-white font-thin">{title}</h2> */}
              {/* <p className="text-white font-thin">{description}</p> */}
            </div>
          </div>
        </motion.div>
  
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-n-9 bg-opacity-50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-background p-8 rounded-lg max-w-3xl w-full relative"
              >
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  onClick={() => setIsActive(false)}
                >
                  <CloseIcon />
                </button>
                <div className="flex items-center space-x-4 mb-4">
                  {icon}
                  <h2 className="text-xl text-white font-thin">{title}</h2>
                </div>
                {/* <p className="text-white mb-4">{description}</p> */}
                
                {/* Render Sections */}
                <div className="mt-4 space-y-6">
                  {content.sections.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-white">{section.heading}</h3>
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-white text-sm mt-2">{paragraph}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }