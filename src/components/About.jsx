import { Text, Stack, Group } from "@mantine/core";
import "./about/About.css";
import { useEffect, useRef } from "react";
import profileImage from "../images/Me.jpg";

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const nameRef = useRef(null);
  const skillCategories = {
    Languages: ["Python", "Java", "JavaScript", "C/C++", "HTML/CSS", "Lua"],
    Frameworks: ["React.js", "Django", "Flask"],
    "Tools & Technologies": [
      "AWS",
      "Docker",
      "MongoDB",
      "MySQL",
      "Git",
      "JIRA",
    ],
    Other: ["Machine Learning", "Digital Ocean", "JUnit", "Pandas"],
  };

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const name = nameRef.current;
    const threshold = 100; // Scroll threshold before animation starts

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > threshold) {
        const fadeOutProgress = Math.min((scrollPosition - threshold) / 400, 1);

        // Slide content up
        content.style.transform = `translateY(-${fadeOutProgress * 50}px)`;
        content.style.opacity = 1 - fadeOutProgress;

        // Slide name down
        name.style.transform = `translateY(${fadeOutProgress * 50}px)`;
        name.style.opacity = 1 - fadeOutProgress;
      } else {
        // Reset styles when scrolling back up
        content.style.transform = "translateY(0)";
        content.style.opacity = 1;
        name.style.transform = "translateY(0)";
        name.style.opacity = 1;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="hero-section">
      <Stack h="100vh" justify="space-between" spacing={0}>
        {/* Top Section */}
        <div ref={contentRef} className="content-wrapper">
          <Group
            position="apart"
            w="100%"
            align="flex-start"
            justify="space-between"
            pt="1rem"
          >
            {/* About Text */}
            <Text size="sm" weight={500} maw={400}>
              Computer Science at University of Wisconsin - Madison. Fullstack
              Developer with a love for visual design and cybersecurity
            </Text>

            {/* Skills */}
            <Stack spacing="lg" maw={400}>
              {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category}>
                  <Text size="sm" weight={500} mb="xs">
                    {category}
                  </Text>
                  <Text size="sm" color="dimmed">
                    {skills.join(", ")}
                  </Text>
                </div>
              ))}
            </Stack>
            <img src={profileImage} alt="Profile" className="profile-image" />
          </Group>
        </div>

        {/* Bottom Section */}
        <div ref={nameRef} className="name-wrapper">
          <Group position="apart" w="100%" pb={64}>
            <Text className="name-text">Sanjay Nagarimadugu</Text>
          </Group>
        </div>
      </Stack>
    </section>
  );
};

export default About;
