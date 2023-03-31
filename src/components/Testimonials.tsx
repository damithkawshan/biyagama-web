import { useState, useEffect, useRef } from "react";
import "./Testimonials.css";

interface Testimonial {
  id: number;
  name: string;
  message: string;
}

function Testimonials(): JSX.Element {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Kaushan",
      message:
        "Ceygiri Labs provided us with top-notch software solutions that transformed the way we do business. Their expertise and attention to detail made all the difference.",
    },
    {
      id: 2,
      name: "Danutha",
      message:
        "Thanks to Ceygiri Labs, our web presence has never been stronger. Their team of developers is knowledgeable, reliable, and always goes above and beyond to ensure our satisfaction.",
    },
    {
      id: 3,
      name: "Sachin",
      message:
        "Working with Ceygiri Labs was a game-changer for our business. Their software solutions helped us streamline our processes and save valuable time and resources.",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [autoScrollInterval, setAutoScrollInterval] = useState<number>(5000);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleTestimonialClick = (index: number) => {
    setActiveIndex(index);
    resetAutoScrollInterval();
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoScrollInterval();
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    resetAutoScrollInterval();
  };

  const resetAutoScrollInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, autoScrollInterval);
  };

  useEffect(() => {
    resetAutoScrollInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="testimonials-container">
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleTestimonialClick(index)}
          >
            <p className="message">{testimonial.message}</p>
            <p className="name">{testimonial.name}</p>
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="prev-btn" onClick={handlePrevClick}>
          &lt;
        </button>
        <button className="next-btn" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
