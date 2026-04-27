import React, { useEffect, useState } from "react";

const AnimatedText = ({ text, className = "", speed = 50, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    // Typing forwards
    if (!isDeleting && displayedText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
    } 

    // else if (!isDeleting && displayedText.length === text.length) {
    //   // Pause at full text
    //   timeout = setTimeout(() => {
    //     setIsDeleting(true);
    //   }, pause);
    // } 

    // // Deleting backwards
    // else if (isDeleting && displayedText.length > 0) {
    //   timeout = setTimeout(() => {
    //     setDisplayedText(text.slice(0, displayedText.length - 1));
    //   }, speed / 2);
    // } 

    // // Loop
    // else if (isDeleting && displayedText.length === 0) {
    //   timeout = setTimeout(() => {
    //     setIsDeleting(false);
    //   }, 300);
    // }

    return () => clearTimeout(timeout);
  }, [displayedText, text, speed]);

  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center text-center
      overflow-hidden max-sm:py-0"
    >
      <h1
        className={`inline-block w-full font-bold capitalize text-8xl
        text-textPrimaryLight dark:text-textPrimary
        ${className}`}
      >
        {displayedText}
        <span
          className="inline-block ml-1 h-[1em] border-r-4 border-accent 
          animate-blink align-[-0.1em]"
        />
      </h1>
    </div>
  );
};

export default AnimatedText;