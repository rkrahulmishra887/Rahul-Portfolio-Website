// import React from "react";
// import $ from "jquery";

// import logo1 from "../img/logo-white.jpg";
// import logo2 from "../img/logo-blue.jpg";

// class Navbar extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       logo: logo1,
//     };
//   }

//   componentDidMount() {
//     const nav = $("nav");
//     let navHeight = nav.outerHeight();

//     $(".navbar-toggler").on("click", function () {
//       if (!$("#mainNav").hasClass("navbar-reduce")) {
//         $("#mainNav").addClass("navbar-reduce");
//       }
//     });

//     $("body").scrollspy({
//       target: "#mainNav",
//       offset: navHeight,
//     });

//     $(".js-scroll").on("click", function () {
//       $(".navbar-collapse").collapse("hide");
//     });

//     window.addEventListener("scroll", () => {
//       if (window.pageYOffset > 50) {
//         document
//           .querySelector(".navbar-expand-md")
//           .classList.add("navbar-reduce");
//         document
//           .querySelector(".navbar-expand-md")
//           .classList.remove("navbar-trans");
//         this.setState({ logo: logo2 });
//       } else {
//         document
//           .querySelector(".navbar-expand-md")
//           .classList.add("navbar-trans");
//         document
//           .querySelector(".navbar-expand-md")
//           .classList.remove("navbar-reduce");
//         this.setState({ logo: logo1 });
//       }
//     });

//     $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
//       if (
//         window.location.pathname.replace(/^\//, "") ===
//           this.pathname.replace(/^\//, "") &&
//         window.location.hostname === this.hostname
//       ) {
//         var target = $(this.hash);
//         target = target.length
//           ? target
//           : $("[name=" + this.hash.slice(1) + "]");
//         if (target.length) {
//           $("html, body").animate(
//             {
//               scrollTop: target.offset().top - navHeight + 5,
//             },
//             1000,
//             "easeInExpo"
//           );
//           return false;
//         }
//       }
//     });

//     $(".js-scroll").on("click", function () {
//       $(".navbar-collapse").collapse("hide");
//     });
//   }

//   render() {
//     return (
//       <nav
//         className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
//         id="mainNav"
//       >
//         <div className="container">
//           <a className="navbar-brand js-scroll" href="#page-top">
//             <img
//               src={this.state.logo}
//               alt="logo"
//               style={{ maxWidth: "100px" }}
//             />
//           </a>
//           <button
//             className="navbar-toggler collapsed"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarDefault"
//             aria-controls="navbarDefault"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//           <div
//             className="navbar-collapse collapse justify-content-end"
//             id="navbarDefault"
//           >
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <a className="nav-link js-scroll active" href="/">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link js-scroll" href="#about">
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link js-scroll" href="#work">
//                   Work
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link js-scroll"
//                   href="/"
//                   // href="https://drive.google.com/file/d/1BucNV5WEZxaHh9CTS1aTx38X42u1LmXb/view?usp=sharing"
//                 >
//                   Resume
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link js-scroll" href="/">
//                   Testimonials
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/">
//                   Blog
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link js-scroll" href="#contact">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Navbar;


import React, { useEffect, useState } from "react";
import { ScrollSpy, Collapse } from "bootstrap";

import logo1 from "../img/logo-white.jpg";
import logo2 from "../img/logo-blue.jpg";

const Navbar = () => {
  const [logo, setLogo] = useState(logo1);
  const [navReduced, setNavReduced] = useState(false);
  const [collapseInstance, setCollapseInstance] = useState(null);

  useEffect(() => {
    const navElement = document.querySelector("nav");
    const navHeight = navElement?.offsetHeight || 0;

    // Initialize Bootstrap 5 ScrollSpy
    const scrollSpyInstance = new ScrollSpy(document.body, {
      target: "#mainNav",
      offset: navHeight,
    });

    // Setup Collapse instance for toggling menu
    const collapseEl = document.getElementById("navbarDefault");
    const bsCollapse = new Collapse(collapseEl, { toggle: false });
    setCollapseInstance(bsCollapse);

    // Scroll event to toggle navbar classes and logo
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setNavReduced(true);
        setLogo(logo2);
      } else {
        setNavReduced(false);
        setLogo(logo1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      scrollSpyInstance.dispose();
      bsCollapse.dispose();
    };
  }, []);

  // Smooth scroll handler for anchor links
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1); // remove '#'
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top:
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          (document.querySelector("nav")?.offsetHeight || 0),
        behavior: "smooth",
      });
    }
    // Close navbar collapse after click
    if (collapseInstance) {
      collapseInstance.hide();
    }
  };

  return (
    <nav
      className={`navbar navbar-b fixed-top navbar-expand-md ${
        navReduced ? "navbar-reduce" : "navbar-trans"
      }`}
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="#page-top" onClick={handleSmoothScroll}>
          <img src={logo} alt="logo" style={{ maxWidth: "100px" }} />
        </a>

        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className="navbar-collapse collapse justify-content-end"
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            {[
              { label: "Home", href: "#page-top", scroll: true },
              { label: "About", href: "#about", scroll: true },
              { label: "Work", href: "#work", scroll: true },
              { label: "Resume", href: "/", scroll: false },
              { label: "Testimonials", href: "/", scroll: false },
              { label: "Blog", href: "/", scroll: false },
              { label: "Contact", href: "#contact", scroll: true },
            ].map(({ label, href, scroll }) => (
              <li className="nav-item" key={label}>
                <a
                  className="nav-link"
                  href={href}
                  onClick={scroll ? handleSmoothScroll : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

