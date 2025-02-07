import { Text, Stack, Group, Box, Button, Flex } from "@mantine/core";
import "./about/About.css";
import { useState, useEffect, useRef } from "react";
import profileImage from "../images/Me.jpg";

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const nameRef = useRef(null);
  const [showContact, setShowContact] = useState(false);
  const skillCategories = {
    Backend: ["Python", "Java", "C/C++", "Flask", "Django", "Bash", "C#"],
    Frontend: ["React.js", "Javascript", "Typescript", "CSS", "Node.js"],
    Data: ["PostgreSQL", "MongoDB", "MySQL", "Pandas", "PyTorch", "R"],
    Cloud: ["AWS", "Kubernetes", "Docker", "Terraform", "Lambda"],
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

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard`);
  };

  return (
    <section id="about" className="hero-section" ref={sectionRef}>
      <Stack h="100%" justify="space-between" spacing={0}>
        <div ref={contentRef} className="content-wrapper">
          <Group w="100%" align="flex-start" justify="space-between" pt="sm">
            <Stack spacing="xs" justify="flex-start">
              <Text size="s" weight={500} maw="20rem">
                Senior studying Computer Science and Data Science at University
                of Wisconsin - Madison. Fullstack Developer with a love for
                cybersecurity and game development.
              </Text>
              <Text
                size="sm"
                weight={500}
                mt="md"
                style={{ cursor: "pointer", color: "#4C76E0" }}
                onClick={() => setShowContact(!showContact)}
              >
                Contact Me
              </Text>
              {showContact && (
                <Group spacing="xs" mt="xs">
                  <Button
                    weight={500}
                    variant="subtle"
                    size="xs"
                    onClick={() => handleCopy("6089774238")}
                  >
                    6089774238
                  </Button>
                  <Button
                    variant="subtle"
                    size="xs"
                    onClick={() => handleCopy("snagarimadug@wisc.edu")}
                  >
                    snagarimadug@wisc.edu
                  </Button>
                </Group>
              )}
            </Stack>

            <Box
              component="img"
              src={profileImage}
              alt="Profile"
              className="profile-image"
              maw="20rem"
              h="auto"
            />

            <Stack spacing="sm" maw="20rem">
              {Object.entries(skillCategories).map(([category, skills]) => (
                <Box key={category}>
                  <Text size="xs" weight={500} mb="xs">
                    {category}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {skills.join(", ")}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Group>
        </div>

        <div ref={nameRef} className="name-wrapper">
          <Group w="100%" pb="4rem" pt={0} mt={0}>
            <Stack spacing="xs">
              <Text
                visibleFrom="md"
                className="name-text"
                fz="8rem"
                lh={1}
                fw={325}
                mt="auto"
              >
                Sanjay
              </Text>
              <Text
                visibleFrom="md"
                className="name-text"
                fz="8rem"
                lh={1}
                fw={325}
                mt="auto"
              >
                Nagarimadugu
              </Text>
              <Text
                visibleFrom="sm"
                hiddenFrom="md"
                className="name-text"
                fz="5rem"
                lh={1}
                fw={325}
                mt="auto"
              >
                Sanjay
              </Text>
              <Text
                visibleFrom="sm"
                hiddenFrom="md"
                className="name-text"
                fz="5rem"
                lh={1}
                fw={325}
                mt="auto"
              >
                Nagarimadugu
              </Text>
              <Text
                hiddenFrom="sm"
                className="name-text"
                fz="2.5rem"
                lh={1}
                fw={325}
                mt="auto"
              >
                Sanjay
              </Text>
              <Text
                hiddenFrom="sm"
                className="name-text"
                fz="2.5rem"
                lh={1}
                fw={325}
                mt="auto"
              >
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
