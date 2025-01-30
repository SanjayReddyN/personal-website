import { Text, Stack, Group, Box } from "@mantine/core";
import "./about/About.css";
import { useState, useEffect, useRef } from "react";
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
      <Stack h="100%" justify="space-between" spacing={0}>
        <div ref={contentRef} className="content-wrapper">
          <Group w="100%" align="flex-start" justify="space-between" pt="sm">
            <Text size="sm" weight={500} maw="25rem">
              Computer Science at University of Wisconsin - Madison. Fullstack
              Developer with a love for visual design and cybersecurity
            </Text>

            <Stack spacing="lg" maw="25rem">
              {Object.entries(skillCategories).map(([category, skills]) => (
                <Box key={category}>
                  <Text size="sm" weight={500} mb="xs">
                    {category}
                  </Text>
                  <Text size="sm" c="dimmed">
                    {skills.join(", ")}
                  </Text>
                </Box>
              ))}
            </Stack>
            <Box
              component="img"
              src={profileImage}
              alt="Profile"
              className="profile-image"
            />
          </Group>
        </div>

        <div ref={nameRef} className="name-wrapper">
          <Group w="100%" pb="4rem">
            <Stack spacing={0}>
              <Text className="name-text" fz="6rem" lh={1} fw={700}>
                Sanjay
              </Text>
              <Text className="name-text" fz="6rem" lh={1} fw={700}>
                Nagarimadugu
              </Text>
            </Stack>
          </Group>
        </div>
      </Stack>
    </section>
  );
};

export default About;
