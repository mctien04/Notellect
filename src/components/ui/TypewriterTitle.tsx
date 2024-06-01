"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(" Capture Ideas, Powered by AI.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Effortless Notes, Endless Ideas.")
          .start();
      }}
    />
  );
};

export default TypewriterTitle;
