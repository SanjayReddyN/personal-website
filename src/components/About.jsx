import { Text, Stack, Group } from "@mantine/core";
import "./about/About.css";
import profileImage from "../images/Me.jpg";

const About = () => {
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
    <section className="hero-section">
      <Stack h="100vh" justify="space-between" spacing={0}>
        {/* Top Section */}
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

        {/* Bottom Section */}
        <Group position="apart" w="100%" pb={64}>
          <Text className="name-text">Sanjay Nagarimadugu</Text>
        </Group>
      </Stack>
    </section>
  );
};

export default About;
