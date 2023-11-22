import React from "react";
import { BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <div className="gap-2 mt-5 md:m-8 md:mt-10 about-scroll" >
      <h1 className="text-lg md:text-2xl font-semibold mb-3">
        This is SmartBite! 
      </h1>
      <ul className="flex flex-col gap-3 md:gap-4 mb-3 text-sm md:text-xl font-medium">
        <li className="">
          <span className="text-green-700">◉</span> This is our final Software Engineering project that mimics a typical food delivery app. It offers an easy, user-friendly
          experience for users to order food online from restaurants nearby. 
        </li>
        <li>
          <span className="text-green-700">◉</span> We've used <span className="font-bold">Tailwind CSS</span> for a
          seamless and efficient way to design an aesthetic user interface.
        </li>
        <li>
          <span className="text-green-700">◉</span> We've utilized the <span className="font-bold">Swiggy API</span> to
          offer an extensive list of REAL LIFE restaurants for users to explore.
        </li>
        <li>
          <span className="text-green-700">◉</span> We've incorporated <span className="font-bold">geolocation</span> to
          provide instant access to nearby restaurants from the user's current
          location.
        </li>
        <li>
          <span className="text-green-700">◉</span> <span className="font-bold">Custom hooks </span>have been implementedto improve code
          readability, modularity, and maintainability.
        </li>
        <li>
          <span className="text-green-700">◉</span> We've made data management easy
          with <span className="font-bold">Redux Toolkit</span>, ensuring efficient state management.
        </li>
        <li>
          <span className="text-green-700">◉</span> We've also employed the <span className="font-bold">OpenWeather API </span>
          to discover restaurants based on other locations' latitude and
          longitude, ensuring diverse choices wherever possible.
        </li>
      </ul>
      <h1 className="text-lg md:text-2xl font-semibold mb-3"> Project by: (1) PES1UG21CS929 - Riya Bansal (2) PES1UG21CS492 - Riya Jayakumar (3) PES1UG21CS487 - Ria R Kulkarni (4) PES1UG21CS478 - Pranavi Rasamsetty </h1>
    </div>
  );
};

export default About;
