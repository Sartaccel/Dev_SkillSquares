import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return show ? (
    <div className="scroll-wrapper" onClick={scrollTop}>
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron dark"></div>
    </div>
  ) : null;
}

export default ScrollToTop;