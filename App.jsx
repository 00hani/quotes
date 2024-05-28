import logo from "./logo.svg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

// const quotes = [
//   {
//     id: 1,
//     text: "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
//   },
//   {
//     id: 2,
//     text: "The way to get started is to quit talking and begin doing. - Walt Disney",
//   },
//   {
//     id: 3,
//     text: "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
//   },
//   {
//     id: 4,
//     text: "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
//   },
//   {
//     id: 5,
//     text: "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
//   },
//   {
//     id: 6,
//     text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
//   },
// ];
function App() {
  const [index, setindex] = useState(0);
  const sliderRef = useRef(null);
  const previous = () => sliderRef.current.slickPrev();
  const next = () => sliderRef.current.slickNext();
  const [quotes, setquotes] = useState([]);
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => setquotes(data));
  }, []);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      style={{
        backgroundColor: "rgb(240, 250, 249)",
        marginBottom: "50px",
        marginTop: "50px",
        height: "680px",
      }}
    >
      <div
        style={{
          paddingLeft: "360px",
          paddingRight: "360px",
          paddingTop: "80px",
        }}
      >
        <div>
          <svg
            width="62"
            height="61"
            viewBox="0 0 62 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "70px", width: "70px" }}
          >
            <path
              d="M61.8008 16.4971C61.8008 32.8545 53.5407 47.4622 37.0205 60.3203C37.0205 53.5658 36.9798 49.7816 36.8984 48.9678C36.5729 45.7126 35.4336 43.4339 33.4805 42.1318C34.5384 41.6436 36.2067 40.5856 38.4854 38.958C42.7171 34.8076 44.833 30.9421 44.833 27.3613C38.1598 25.571 34.8232 21.0137 34.8232 13.6895C34.8232 9.94596 36.0846 6.77214 38.6074 4.16797C41.1302 1.48242 44.2633 0.139648 48.0068 0.139648C52.4014 0.139648 55.86 1.80794 58.3828 5.14453C60.6615 8.1556 61.8008 11.9398 61.8008 16.4971ZM28.8418 16.4971C28.8418 32.8545 20.5817 47.4622 4.06152 60.3203C4.06152 53.5658 4.02083 49.7816 3.93945 48.9678C3.61393 45.7126 2.47461 43.4339 0.521484 42.1318C1.57943 41.6436 3.24772 40.5856 5.52637 38.958C9.75814 34.8076 11.874 30.9421 11.874 27.3613C5.20085 25.571 1.86426 21.0137 1.86426 13.6895C1.86426 9.94596 3.12565 6.77214 5.64844 4.16797C8.17122 1.48242 11.3044 0.139648 15.0479 0.139648C19.4424 0.139648 22.901 1.80794 25.4238 5.14453C27.7025 8.1556 28.8418 11.9398 28.8418 16.4971Z"
              fill="black"
            ></path>
          </svg>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {quotes.map((quote) => (
            <div>
              <p style={{ color: "black", fontSize: "40px" }}>
                <span>{quote.text}</span>
                <br />
                <br /> {quote.author}
              </p>
            </div>
          ))}
        </Slider>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              gap: "35px",
            }}
          >
            <button
              style={{
                border: "1px solid black",
                borderRadius: "50px",
                height: "80px",
                width: "80px",
                fontSize: "30px",
                backgroundColor: "rgb(240, 250, 249)",
              }}
              onClick={previous}
            >
              {"<"}
            </button>
            <button
              style={{
                border: "1px solid black",
                borderRadius: "50px",
                height: "80px",
                width: "80px",
                fontSize: "30px",
                backgroundColor: "rgb(240, 250, 249)",
              }}
              onClick={next}
            >
              {">"}
            </button>
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <p style={{ fontSize: "25px" }}>Share At:</p>
            <svg
              width="44"
              height="45"
              viewBox="0 0 44 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cp"
              style={{
                height: "60px",
                width: "60px",
                position: "relative",
                top: "5px",
              }}
            >
              <title>Post this quote on twitter!</title>
              <path
                d="M0 22.5532C0 34.7289 9.84974 44.5992 22 44.5992C34.1503 44.5992 44 34.7289 44 22.5532C44 10.3776 34.1503 0.507309 22 0.507309C9.84974 0.507309 0 10.3776 0 22.5532Z"
                fill="#1DA1F2"
              ></path>
              <path
                d="M33 15.6639C32.175 16.0772 31.35 16.215 30.3875 16.3528C31.35 15.8017 32.0375 14.9749 32.3125 13.8727C31.4875 14.4238 30.525 14.6994 29.425 14.9749C28.6 14.1482 27.3625 13.5971 26.125 13.5971C23.2375 13.5971 21.0375 16.3528 21.725 19.1086C18.0125 18.9708 14.7125 17.1795 12.375 14.4238C11.1375 16.4906 11.825 19.1086 13.75 20.4864C13.0625 20.4864 12.375 20.2109 11.6875 19.9353C11.6875 22.0021 13.2 23.9311 15.2625 24.4823C14.575 24.62 13.8875 24.7578 13.2 24.62C13.75 26.4113 15.4 27.7891 17.4625 27.7891C15.8125 29.0292 13.3375 29.7182 11 29.4426C13.0625 30.6827 15.4 31.5094 17.875 31.5094C26.2625 31.5094 30.9375 24.4823 30.6625 18.0063C31.625 17.4551 32.45 16.6284 33 15.6639Z"
                fill="white"
              ></path>
            </svg>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cp"
              style={{
                height: "60px",
                width: "60px",
                position: "relative",
                top: "5px",
              }}
            >
              <title>Post this quote on WhatsApp!</title>
              <path
                d="M0 22C0 34.1503 9.84974 44 22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22Z"
                fill="#25D366"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.7 14.1625C27.6375 12.1 24.8875 11 22 11C15.95 11 11 15.95 11 22C11 23.925 11.55 25.85 12.5125 27.5L11 33L16.775 31.4875C18.425 32.3125 20.2125 32.8625 22 32.8625C28.05 32.8625 33 27.9125 33 21.8625C33 18.975 31.7625 16.225 29.7 14.1625ZM22 31.075C20.35 31.075 18.7 30.6625 17.325 29.8375L17.05 29.7L13.6125 30.6625L14.575 27.3625L14.3 26.95C13.3375 25.4375 12.925 23.7875 12.925 22.1375C12.925 17.1875 17.05 13.0625 22 13.0625C24.475 13.0625 26.675 14.025 28.4625 15.675C30.25 17.4625 31.075 19.6625 31.075 22.1375C31.075 26.95 27.0875 31.075 22 31.075ZM26.95 24.2C26.675 24.0625 25.3 23.375 25.025 23.375C24.75 23.2375 24.6125 23.2375 24.475 23.5125C24.3375 23.7875 23.7875 24.3375 23.65 24.6125C23.5125 24.75 23.375 24.75 23.1 24.75C22.825 24.6125 22 24.3375 20.9 23.375C20.075 22.6875 19.525 21.725 19.3875 21.45C19.25 21.175 19.3875 21.0375 19.525 20.9C19.6625 20.7625 19.8 20.625 19.9375 20.4875C20.075 20.35 20.075 20.2125 20.2125 20.075C20.35 19.9375 20.2125 19.8 20.2125 19.6625C20.2125 19.525 19.6625 18.15 19.3875 17.6C19.25 17.1875 18.975 17.1875 18.8375 17.1875C18.7 17.1875 18.5625 17.1875 18.2875 17.1875C18.15 17.1875 17.875 17.1875 17.6 17.4625C17.325 17.7375 16.6375 18.425 16.6375 19.8C16.6375 21.175 17.6 22.4125 17.7375 22.6875C17.875 22.825 19.6625 25.7125 22.4125 26.8125C24.75 27.775 25.1625 27.5 25.7125 27.5C26.2625 27.5 27.3625 26.8125 27.5 26.2625C27.775 25.575 27.775 25.025 27.6375 25.025C27.5 24.3375 27.225 24.3375 26.95 24.2Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
