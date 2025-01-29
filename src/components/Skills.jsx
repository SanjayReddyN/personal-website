import { Container, Title, SimpleGrid, Card, Text, Stack } from "@mantine/core";
import useScrollAnimation from "../hooks/useScrollAnimation.js";

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();
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

  return (
    <Container id="skills" size="lg" py="xl">
      <div ref={ref}>
        <Title order={2} mb="xl">
          Skills
        </Title>
        <SimpleGrid cols={2} spacing="xl">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <Card
              key={category}
              shadow="sm"
              padding="lg"
              className={`animate-on-scroll slide-up delay-${index + 1} ${
                isVisible ? "is-visible" : ""
              }`}
            >
              <Stack>
                <Text weight={700}>{category}</Text>
                <Text>{skills.join(", ")}</Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </div>
    </Container>
  );
};

export default Skills;
