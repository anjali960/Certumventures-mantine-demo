import React from "react";
import {
  Container,
  Title,
  Button,
  Card,
  Image,
  Text,
  Space,
} from "@mantine/core";

import { IconTarget, IconEye, IconArrowUpRight } from "@tabler/icons-react";
import {
  IconDeviceDesktopAnalytics,
  IconSettings,
  IconChartPie,
  IconRocket,
  IconFileText,
  IconDatabase,
} from "@tabler/icons-react";

// The information section component
const InfoSection = ({ icon: Icon, title, description }) => (
  <Card
    shadow="sm"
    padding="lg"
    radius="md"
    style={{
      backgroundColor: "#2f4a62",
      textAlign: "center",
      maxWidth: "290px",
      margin: "0 10px",
    }}
  >
    <Icon size={48} color="white" />
    <Title order={3} style={{ color: "white", marginTop: 20 }}>
      {title}
    </Title>
    <Text style={{ color: "white", marginTop: 10 }}>{description}</Text>
  </Card>
);

// The service card component
const ServiceCard = ({ icon: Icon, title, description }) => (
  <Card
    shadow="sm"
    padding="lg"
    radius="md"
    style={{
      backgroundColor: "#274059",
      textAlign: "center",
      flex: "1 1 calc(30% - 20px)",
      margin: "10px",
      color: "white",
    }}
  >
    <Icon size={48} color="white" />
    <Title order={4} style={{ color: "white", marginTop: 20 }}>
      {title}
    </Title>
    <Text style={{ color: "white", marginTop: 10 }}>{description}</Text>
    <Text style={{ color: "white", marginTop: 20, fontWeight: 500 }}>
      Read More →
    </Text>
  </Card>
);

export default function App() {
  return (
    <>
      <Container
        style={{
          backgroundColor: "#2f4a62",
          padding: "40px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InfoSection
          icon={IconTarget}
          title="WHAT WE DO"
          description="We provide Consultancy and Tech enabled solution for Healthcare Industry."
        />
        <InfoSection
          icon={IconEye}
          title="ABOUT OUR VISION"
          description="A leading global healthcare provider which is synonym to affordable and accessible health."
        />
        <InfoSection
          icon={IconArrowUpRight}
          title="ABOUT OUR MISSION"
          description="Our mission is to transform the healthcare ecosystem through the implementation of technology enabled solutions."
        />
      </Container>
      <Space h="xl" />
      {/* Our Services Section using Flexbox */}
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 0",
          gap: "30px",
        }}
      >
        {/* Image Section */}
        <Image
          src="https://certumventures.in/wp-content/uploads/2023/01/african-american-afro-american-analyzing-black-people-brainstorming-1434697-pxhere.com_-1-1024x683.jpg"
          alt="Our Services"
          style={{ borderRadius: 0, maxWidth: "30%" }}
        />

        {/* Text Section */}
        <div style={{ maxWidth: "35%" }}>
          <Title order={2} style={{ color: "#822a54", fontWeight: 600 }}>
            Our Services
          </Title>
          <Text size="md" mt="md">
            Certum Ventures provide consultancy to different healthcare
            platforms, developing IT solutions, Digital Transformation &
            Business Process Reengineering. Certum Ventures are subsidiaries
            supporting the main cause of healthcare solutions to make it
            affordable and accessible. Many pharmaceutical, diagnostic, and
            medical device companies are part of this integral system with the
            common objective to make healthcare more affordable, reliable, and
            accessible.
          </Text>
        </div>
      </Container>
      <Space h="xl" />
      {/* What Service We Offer Section */}
      <Container style={{ backgroundColor: "#2f4a62", padding: "40px 0" }}>
        <Text
          align="center"
          style={{ color: "white", fontSize: 24, fontWeight: 700 }}
        >
          What Service We Offer
        </Text>
        <Text
          align="center"
          style={{ color: "white", fontSize: 16, marginTop: 10 }}
        >
          As a whole, Certum Ventures helps healthcare companies come together
          and grow.
        </Text>
      </Container>
      <Space h="xl" />
      {/* Services Section */}
      <Container
        style={{
          backgroundColor: "#2f4a62",
          padding: "40px 0",
        }}
      >
        {/* Grid layout for service cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", // Wrap items to multiple rows on small screens
            justifyContent: "center", // Center the items
            gap: "20px", // Gap between the cards
          }}
        >
          <ServiceCard
            icon={IconDeviceDesktopAnalytics}
            title="Digital Transformation"
            description="Digital transformation is the process of using digital technologies to create new or modify existing business processes culture, and customer."
          />
          <ServiceCard
            icon={IconSettings}
            title="IT Solutions"
            description="IT solutions are sets of services, software, or hardware that are bundled together and designed."
          />
          <ServiceCard
            icon={IconChartPie}
            title="Digital Marketing"
            description="Digital is here to stay and grow exponentially. Increased visibility, marketing opportunity at efficient budgets."
          />
          <ServiceCard
            icon={IconFileText}
            title="Process Re-engineering"
            description="Process reengineering is a management practice where tasks are radically redesigned to achieve specific business outcomes."
          />
          <ServiceCard
            icon={IconRocket}
            title="Startup Incubation Hub"
            description="Website development, digital marketing, monthly filing, company formation."
          />
          <ServiceCard
            icon={IconDatabase}
            title="Data Analytics"
            description="Data analytics is the process of examining data sets to find trends and draw conclusions about the information they contain."
          />
        </div>
      </Container>
      <Space h="xl" />
      {/* Our Services Section using Flexbox */}
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 0",
          gap: "30px",
          flexDirection: "row",
        }}
      >
        {/* Text Section */}
        <div style={{ maxWidth: "35%" }}>
          <Title order={2} style={{ color: "#822a54", fontWeight: 600 }}>
            Who We Are
          </Title>
          <Text size="md" mt="md">
            Certum Ventures even further support start-ups who contribute for
            the same cause for healthcare by providing incubation services tech
            support, logistic, providing workspace, legal, statutory process and
            filings. As a whole Certum Ventures helping healthcare company
            players to come together and grow along.
          </Text>
        </div>

        {/* Image Section */}
        <Image
          src="https://certumventures.in/wp-content/uploads/2023/01/business-meeting_gettyimages-603992138-1024x683.png"
          alt="Our Services"
          style={{ borderRadius: 0, maxWidth: "30%" }} // Adjust the width of the image
        />
      </Container>
      <>
        <div
          style={{
            backgroundColor: "#21466c",
            padding: "40px 0",
            textAlign: "center",
          }}
        >
          <Title style={{ color: "white", fontSize: 24 }}>
            Certum Ventures have started taking projects to create positive
            impact on the healthcare ecosystem across the nations.
          </Title>
          <Space h="md" />
          <Button
            style={{
              backgroundColor: "white",
              width: "10%",
              height: "12%",
              padding: "10px",
              fontSize: "25px",
            }}
          >
            Contact Us
          </Button>
        </div>

        <Space h="xl" />

        {/* Services Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            {
              img: "https://certumventures.in/wp-content/uploads/2023/01/Digital-Marketing.jpg",
            },
            {
              img: "https://certumventures.in/wp-content/uploads/2023/01/diy-mobile-app-development-projects.jpg",
            },
            {
              img: "https://certumventures.in/wp-content/uploads/2023/01/Top-Software-Engineering-Projects-Ideas.png",
            },
            {
              img: "https://certumventures.in/wp-content/uploads/2023/01/UI-UX-Design-2-1024x768-1.png",
            },
            {
              img: "https://certumventures.in/wp-content/uploads/2023/01/web-design-development-blog-2.jpg",
            },
            {
              img: "https://certumventures.in/wp-content/uploads/2023/01/smm-social-media-marketing-500x500-1.webp",
            },
            {
              img: "https://certumventures.in/wp-content/uploads/2023/01/ORM-Online-Reputation-Management-Courses-Training-Institute.png",
            },
            {
              img: "https://certumventures.in/wp-content/uploads/2023/01/what-does-seo-stand-for.png",
            },
          ].map((service, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 25%",
                maxWidth: "25%",
                boxSizing: "border-box",
              }}
            >
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                style={{ textAlign: "center" }}
              >
                <Image src={service.img} alt={service.title} height={160} />
              </Card>
            </div>
          ))}

          <Title
            align="center"
            style={{
              marginBottom: "20px",
              fontWeight: "bold",
              backgroundColor: "#21466c",
              color: "white",
              width: "95%",
            }}
          >
            Connect with Us
          </Title>
        </div>
        <div style={{ width: "70%", margin: "0 auto", height: "400px" }}>
          <iframe
            title="Bangalore Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.744494906765!2d77.5945638911753!3d12.97159866209569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670a05f5bf7%3A0xdbb5f754b96b1b51!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1697849418126!5m2!1sen!2sin"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <Space h="xl" />
      </>
      <footer
        style={{
          backgroundColor: "#1a1c1e",
          color: "white",
          padding: "40px 20px",
          textAlign: "center",
          fontSize: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          {/* About Us Section */}
          <div
            style={{
              flex: "1 1 30%",
              marginBottom: "20px",
              padding: "0 15px",
            }}
          >
            <h3>About Us</h3>
            <p>
              Certum Ventures Pvt Ltd was incorporated in the year 2015 with the
              vision to bring disruption in the healthcare sector with the
              intervention of technology. Since then, Certum Ventures has been
              providing software & service solutions to various stakeholders.
            </p>
          </div>

          {/* Contact Us Section */}
          <div
            style={{
              flex: "1 1 30%",
              marginBottom: "20px",
              padding: "0 15px",
            }}
          >
            <span
              style={{
                padding: "20px 15px",
              }}
            >
              Contact Us
            </span>
            <p>
              9, 2nd floor, Dr Puneeth Rajkumar Rd, 5th Block, Banashankari 3rd
              Stage, Hosakerahalli, Bengaluru, Karnataka 560085
            </p>
            <p>
              <strong>Phone:</strong> +91 8217083718
              <br />
              <strong>Email:</strong> info@certumventures.in
            </p>
          </div>

          {/* Work Hours Section */}
          <div
            style={{
              flex: "1 1 30%",
              marginBottom: "20px",
              padding: "0 15px",
            }}
          >
            <h3>Work Hours</h3>
            <p>
              <strong>9 AM – 7 PM, Monday – Friday</strong>
            </p>
            <p>
              Our mission is to transform the healthcare ecosystem through the
              implementation of technology-enabled solutions to make healthcare
              affordable and accessible.
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          style={{
            borderTop: "1px solid #333",
            paddingTop: "20px",
            marginTop: "20px",
            fontSize: "12px",
          }}
        >
          <p>Copyright © 2015 certumventures. All rights reserved.</p>
          <a
            href="/privacy-policy"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </>
  );
}
