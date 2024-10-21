import { Carousel } from "@mantine/carousel";
import React from "react";
import "@mantine/carousel/styles.css";
import { Container, Image, Text } from "@mantine/core";
import InfoSection from "./InfoSection";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Careers", href: "#careers" },
  { name: "About Us", href: "#about" },
  { name: "Contact Us", href: "#contact" },
];

export default function App() {
  return (
    <>
      {/* Navbar */}
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
          borderBottom: "1px solid #eaeaea",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Image
            src="https://certumventures.in/wp-content/uploads/2023/01/cropped-Logo-1.png"
            alt="Certum Ventures Logo"
            width={48}
          />
          <Text
            style={{
              fontSize: "23px",
              fontWeight: 700,
            }}
          >
            Certumventures - (Clone)
          </Text>
        </div>

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: 16,
                transition: "color 0.3s",
                margin: "0 15px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "blue")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
            >
              {item.name}
            </a>
          ))}
        </div>
      </Container>

      {/* Carousel */}
      <Carousel withIndicators height={200}>
        <Carousel.Slide>
          <Image
            src="https://certumventures.in/wp-content/uploads/2023/01/3.png"
            alt="Healthcare Slide 1"
            height={800}
            width="100%"
            fit="cover"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src="https://certumventures.in/wp-content/uploads/2023/01/5.png"
            alt="Healthcare Slide 2"
            height={800}
            width="100%"
            fit="cover"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src="https://certumventures.in/wp-content/uploads/2023/01/4.png"
            alt="Healthcare Slide 3"
            height={800}
            width="100%"
            fit="cover"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src="https://certumventures.in/wp-content/uploads/2023/01/2.png"
            alt="Healthcare Slide 4"
            height={800}
            width="100%"
            fit="cover"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src="https://certumventures.in/wp-content/uploads/2023/01/4.png"
            alt="Healthcare Slide 5"
            height={800}
            width="100%"
            fit="cover"
          />
        </Carousel.Slide>
      </Carousel>
      <InfoSection />
    </>
  );
}
