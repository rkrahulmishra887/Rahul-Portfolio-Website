// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import drone1 from "../img/drone1.jpeg";
import drone2 from "../img/drone2.jpg";
import drone3 from "../img/drone3.jpg";
import imageOverlay from "../img/earth.jpg";


import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

Modal.setAppElement("#root");

const testimonials = [
  {
    name: "Alice Johnson",
    text: "Extremely professional and delivered outstanding work! Highly recommended.",
    image: drone1,
    rating: 5,
    video: "",
    category: "Web Development",
  },
  {
    name: "Bob Smith",
    text: "Exceptional in every way. Went above and beyond my expectations.",
    image: drone2,
    rating: 4,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "App Design",
  },
  {
    name: "Carol Lee",
    text: "Great communication and excellent skills!",
    image: drone3,
    rating: 5,
    video: "",
    category: "Web Development",
  },
  {
    name: "David Kim",
    text: "Delivered a fantastic mobile app on a tight deadline.",
    image: drone1,
    rating: 4,
    video: "https://www.w3schools.com/html/movie.mp4",
    category: "App Design",
  },
];

// Star Component for rating stars
const StarRating = ({ stars }) => (
  <div style={{ color: "#f39c12", marginBottom: 10 }}>
    {[...Array(5)].map((_, i) => (
      <span key={i}>{i < stars ? "★" : "☆"}</span>
    ))}
  </div>
);

const Testimonials = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState("");
  const [filter, setFilter] = useState("All");

  const openModal = (videoUrl) => {
    setModalVideo(videoUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalVideo("");
  };

  const filteredTestimonials =
    filter === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === filter);

  const categories = ["All", ...new Set(testimonials.map((t) => t.category))];

  const settings = {
    dots: true,
    infinite: filteredTestimonials.length > 2,
    speed: 600,
    slidesToShow: Math.min(2, filteredTestimonials.length),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="work" className="overlay-mf footer-paralax bg-image sect-mt4 route"
    style={{ backgroundImage: "url(" + imageOverlay + ")" }}>
        <div className="overlay-mf">
            <div style={{ maxWidth: 900, margin: "50px auto", padding: "0 20px" }}>
            <h2 style={{ textAlign: "center", marginBottom: 20 }}>What People Say?</h2>

            {/* Filter Buttons */}
            <div style={{ textAlign: "center", marginBottom: 30 }}>
                {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    style={{
                    cursor: "pointer",
                    margin: "0 6px",
                    padding: "8px 18px",
                    borderRadius: 25,
                    border: filter === cat ? "2px solid #2980b9" : "2px solid #ccc",
                    backgroundColor: filter === cat ? "#2980b9" : "white",
                    color: filter === cat ? "white" : "black",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                    }}
                >
                    {cat}
                </button>
                ))}
            </div>

            {/* Carousel */}
            <Slider {...settings}>
                {filteredTestimonials.map(
                ({ name, text, image, rating, video, category }, idx) => (
                    <div
                    key={idx}
                    style={{
                        padding: 15,
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        borderRadius: 10,
                        margin: "0 10px",
                        backgroundColor: "white",
                        cursor: video ? "pointer" : "default",
                        transition: "transform 0.3s ease",
                    }}
                    onClick={video ? () => openModal(video) : undefined}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                    <div style={{ display: "flex", alignItems: "center", marginBottom: 15 }}>
                        {image ? (
                        <img
                            src={image}
                            alt={name}
                            style={{
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginRight: 15,
                            }}
                        />
                        ) : (
                        <div
                            style={{
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            backgroundColor: "#3498db",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 24,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: 15,
                            }}
                        >
                            {name[0]}
                        </div>
                        )}
                        <div>
                        <h4 style={{ margin: 0 }}>{name}</h4>
                        <small style={{ color: "#555" }}>{category}</small>
                        </div>
                    </div>

                    <StarRating stars={rating} />

                    <p style={{ fontStyle: "italic", color: "#444" }}>"{text}"</p>

                    {video && (
                        <p style={{ color: "#2980b9", fontWeight: "bold", marginTop: 15 }}>
                        Click to watch video testimonial
                        </p>
                    )}
                    </div>
                )
                )}
            </Slider>

            {/* Video Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Testimonial Video"
                style={{
                content: {
                    maxWidth: 700,
                    margin: "auto",
                    borderRadius: 12,
                    padding: 10,
                },
                overlay: { backgroundColor: "rgba(0,0,0,0.75)" },
                }}
            >
                <button
                onClick={closeModal}
                style={{ float: "right", fontSize: 22, padding: 5, cursor: "pointer" }}
                aria-label="Close Video"
                >
                &times;
                </button>
                <video
                width="100%"
                controls
                autoPlay
                loop
                muted
                style={{ borderRadius: 12 }}
                >
                <source src={modalVideo} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </Modal>
            </div>
        </div>
    </section>
  );
};

export default Testimonials;








// const Testimonials = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3500,
//   };
// }

//   class Testimonials extends React.Component {
//     render() {

//         // Example testimonials data
//         const testimonials = [
//             {
//             name: "Alice",
//             text: "Rahul is amazing to work with! Highly recommended.",
//             image: "/img/testimonial1.jpg",
//             video: "",
//             },
//             {
//             name: "Bob",
//             text: "Delivered above and beyond my expectations.",
//             image: "/img/testimonial2.jpg",
//             video: "https://www.w3schools.com/html/mov_bbb.mp4",
//             },
//             // Add more testimonials here
//         ];
//         const settings = {
//                 dots: true,
//                 infinite: true,
//                 speed: 500,
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 autoplay: true,
//                 autoplaySpeed: 3500,
//               };
        
//         return (
//             <div className="testimonial-section" style={{ maxWidth: 600, margin: "auto", padding: "40px 0" }}>
//             <h2>Testimonials</h2>
//             <Slider {...settings}>
//                 {testimonials.map((t, idx) => (
//                 <div key={idx}>
//                     {t.video ? (
//                     <video width="100%" controls autoPlay loop muted>
//                         <source src={t.video} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                     ) : (
//                     <img
//                         src={t.image}
//                         alt={t.name}
//                         style={{
//                         borderRadius: "8px",
//                         width: "100%",
//                         maxHeight: "250px",
//                         objectFit: "cover",
//                         marginBottom: "16px",
//                         }}
//                     />
//                     )}
//                     <blockquote>"{t.text}"</blockquote>
//                     <p>
//                     <strong>{t.name}</strong>
//                     </p>
//                 </div>
//                 ))}
//             </Slider>
//             </div>
//         );
//     };
// }

// export default Testimonials;
