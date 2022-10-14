import React from "react";
import { animated, useSpring } from "react-spring";

import "./Loader.css";
const Loader = () => {
  const props = useSpring({
    from: { transform: "scale(0.3)", opacity: 0 },
    to: { transform: "scale(0.7)", opacity: 1 },
    config: { duration: 700 },
    loop: { reverse: true },
    reset: true,
  });
  return <animated.div style={props} className="Loader"></animated.div>;
};

export default Loader;
