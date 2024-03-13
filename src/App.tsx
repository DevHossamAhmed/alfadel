import { useState } from "react";
import { ImageSlider } from "./ImageSlider";
import car2 from "./imgs/car-2.jpg";
import car3 from "./imgs/car-3.jpg";
import car4 from "./imgs/car-4.jpg";
import car5 from "./imgs/car-5.jpg";
import { SiWhatsapp } from "react-icons/si";
import Logo from "./imgs/ALFADEL.png";

const IMAGES = [
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car4, alt: "Car Four" },
  { url: car5, alt: "Car Five" },
];

export default function App() {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    container: {
      maxWidth: "1200px",
      width: "100%",
      margin: "0 auto",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "40px",
      marginBottom: "40px",
      borderRadius: "50%",
    },
    image: {
      maxWidth: "200px",
      borderRadius: "50%",
    },
    link: {
      width: "100%",
      height: "40px",
      marginBottom: "30px",
      marginTop: "30px",
      padding: "0px 20px",
      fontSize: "18px",
      border: "1px solid black",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#000",
      textDecoration: "none",
      backgroundColor: isHovered ? "#34D399" : "transparent",
    },
    linkText: {
      marginLeft: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.center}>
        <img src={Logo} alt="Car Two" style={styles.image} />
      </div>

      <ImageSlider images={IMAGES} />
      <a href="/" style={styles.link} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <SiWhatsapp className="text-[18px]" />
        WhatsApp
      </a>
    </div>
  );
}
