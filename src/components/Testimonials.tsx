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
      name: "John Doe",
      message:
        "The services provided by the Biyagama Pradeshiya Sabha have been exceptional. Highly recommended!",
    },
    {
      id: 2,
      name: "Jane Smith",
      message:
        "I had a wonderful experience with the local government. They were very responsive and helpful.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      message:
        "The community initiatives led by the council have greatly improved our neighborhood.",
    },
    {
      id: 4,
      name: "Emily Davis",
      message:
        "Efficient and friendly service! The staff at the Pradeshiya Sabha are always willing to assist.",
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
