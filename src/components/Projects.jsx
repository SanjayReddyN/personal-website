import {
  Container,
  Title,
  Stack,
  Card,
  Text,
  Badge,
  Group,
  Tabs,
} from "@mantine/core";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "../App.css";

const CardWithAnimation = ({ index, children }) => {
  const [ref, style] = useScrollAnimation({
    threshold: 100,
    direction: index % 2 === 0 ? "left" : "right",
    distance: 200,
  });

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
};

const Projects = () => {
  const experiences = [
    {
      company: "Roblox",
      role: "Software Developer Intern",
      date: "May 2024 - Aug 2024",
      details: [
        "Worked on the Assessments Team contributing to platform for 100,000+ applicants",
        "Implemented new assessment features using Flask SQLAlchemy",
        "Utilized AWS EC2 and S3 for database hosting",
        "Fixed frontend bugs using React in Lua",
      ],
    },
    {
      company: "University of Wisconsin - Madison",
      role: "Peer Mentor",
      date: "Sep 2023 - Dec 2024",
      details: [
        "Working as a peer mentor for CS 542 and CS 435, supporting over 200 students",
        "Held regular office hours to clarify course concepts and assist with problem sets",
        "Collaborated with instructors to grade assignments and facilitate UW Madison Cyber Table Top Exercise",
      ],
    },
    {
      company: "NSpire.ai",
      role: "Software Developer Intern",
      date: "May 2023 - Sep 2023",
      details: [
        "Implemented Image Quality Analysis and Audio Sentiment Analysis",
        "Developed automation scripts for AI/ML model testing",
        "Built real-time video sentiment analysis feature",
        "Created frontend components using React.js",
      ],
    },
  ];

  const projects = [
    {
      title: "Greenworld",
      technologies: "Python, MySQL",
      details: [
        "Created a program for waste management database connections",
        "Implemented plotting utility for top donors and login system",
        "Integrated MySQL databases with Python for UI and functionality",
      ],
    },
    {
      title: "Gesture Control",
      technologies: "Python, OpenCV, Mediapipe",
      details: [
        "Created application for computer control via hand gestures",
        "Implemented multiple control modes including mouse and media control",
        "Used OpenCV and Mediapipe with Tensorflow for gesture recognition",
      ],
    },
  ];

  return (
    <Container id="projects" size="lg" py="xl">
      <Title order={2} mb="xl" align="left">
        Experience & Projects
      </Title>
      <Tabs defaultValue="experience">
        <Tabs.List grow mb="xl">
          <Tabs.Tab value="experience">Experience</Tabs.Tab>
          <Tabs.Tab value="projects">Projects</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="experience">
          <Stack spacing="xl">
            {experiences.map((exp, index) => (
              <CardWithAnimation key={index} index={index}>
                <Card shadow="sm" padding="lg" className="card-hover">
                  <Group position="apart" mb="xs">
                    <Text weight={700}>{exp.company}</Text>
                    <Badge>{exp.date}</Badge>
                  </Group>
                  <Text color="dimmed" mb="md">
                    {exp.role}
                  </Text>
                  <ul style={{ margin: 0, paddingLeft: "20px" }}>
                    {exp.details.map((detail, i) => (
                      <li key={i}>
                        <Text size="sm">{detail}</Text>
                      </li>
                    ))}
                  </ul>
                </Card>
              </CardWithAnimation>
            ))}
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="projects">
          <Stack spacing="xl">
            {projects.map((project, index) => (
              <CardWithAnimation key={index} index={index}>
                <Card shadow="sm" padding="lg" className="card-hover">
                  <Group position="apart" mb="xs">
                    <Text weight={700}>{project.title}</Text>
                    <Badge>{project.technologies}</Badge>
                  </Group>
                  <ul style={{ margin: 0, paddingLeft: "20px" }}>
                    {project.details.map((detail, i) => (
                      <li key={i}>
                        <Text size="sm">{detail}</Text>
                      </li>
                    ))}
                  </ul>
                </Card>
              </CardWithAnimation>
            ))}
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default Projects;
