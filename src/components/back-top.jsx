// import React from 'react';
// import $ from 'jquery';
// // import '../libs/easing.js'

// class BackToTop extends React.Component {
//     componentDidMount(){
//         $('.back-to-top').click(function(){
//             $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
//             return false;
//           });
//         window.addEventListener('scroll', ()=>{
//             if(window.pageYOffset > 100){
//                 document.querySelector('.back-to-top').classList.remove("fadeOut");
//                 document.querySelector('.back-to-top').style.display = "block";
//                 document.querySelector('.back-to-top').classList.add("fadeIn");
//             }else {
//                 document.querySelector('.back-to-top').classList.remove("fadeIn");
//                 document.querySelector('.back-to-top').classList.add("fadeOut");
//             }
//         });
//     }

//     render(){
//         return <a href="#" className="back-to-top animated"><i className="fa fa-chevron-up"></i></a>;
//     }
// }

// export default BackToTop;

import React from "react";

class BackToTop extends React.Component {
  backToTopRef = React.createRef();

  scrollToTop = () => {
    const start = window.pageYOffset;
    const duration = 1500;
    let startTime = null;

    function easeInOutExpo(t, b, c, d) {
      if (t === 0) return b;
      if (t === d) return b + c;
      if ((t /= d / 2) < 1)
        return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
      return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
    }

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutExpo(timeElapsed, start, -start, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  handleClick = (e) => {
    e.preventDefault();
    this.scrollToTop();
  };

  handleScroll = () => {
    const backToTop = this.backToTopRef.current;
    if (window.pageYOffset > 100) {
      backToTop.classList.remove("fadeOut");
      backToTop.style.display = "block";
      backToTop.classList.add("fadeIn");
    } else {
      backToTop.classList.remove("fadeIn");
      backToTop.classList.add("fadeOut");
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <button
        aria-label="Back to top"
        ref={this.backToTopRef}
        onClick={this.handleClick}
        className="back-to-top animated"
        style={{ display: "none" }}
      >
        <i className="fa fa-chevron-up" />
      </button>
    );
  }
}

export default BackToTop;

