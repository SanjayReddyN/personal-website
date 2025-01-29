import { Text, Stack, Group } from "@mantine/core";
import useScrollAnimation from "../hooks/useScrollAnimation.js";
import "../App.css";

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
    <div className="skills-container">
      <Group
        align="flex-start"
        spacing="xl"
        className={`slide-left delay-1
        }`}
      >
        <Text className="skills-header" weight={700}>
          Skills
        </Text>
        <Stack spacing="lg" className="skills-list">
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
      </Group>
    </div>
  );
};

export default Skills;
