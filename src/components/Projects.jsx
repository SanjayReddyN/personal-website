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
      ongoing: false, // set true if this experience is ongoing
      details: [
        "Worked on the Assessments Team contributing to platform for 100,000+ applicants",
        "Implemented new assessment features using Flask SQLAlchemy",
        "Utilized AWS EC2 and S3 for database hosting",
        "Fixed frontend bugs using React in Lua",
      ],
    },
    {
      company: "Walmart",
      role: "Software Engineer II, Information Security",
      date: "Starting July 2025",
      ongoing: true, // set true if this experience is ongoing
      details: [
        "Engineered certificate lifecycle management systems and service account rotation scripts, reducing manual operations",
        "Built real-time health dashboards and analytics tools to identify root causes of certificate issues",
        "Improved our certificate deployment platform to achieve 99.99% certificate download success rate (up from 90%) and reduced retries by 77%",
        "Excelled at using the campus bikes to go on campus tours and to the gym",
      ],
    },
    {
      company: "University of Wisconsin - Madison",
      role: "Peer Mentor",
      date: "Sep 2023 - Current",
      ongoing: false,
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
      ongoing: false,
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
      title: "Self-Hosted Cloud Photo Storage",
      technologies: "React, Node.js, MongoDB",
      ongoing: false,
      details: [
        "Developing a privacy-focused, self-hosted alternative to Google Photos to empower users with full control over their image data.",
        "Implementing secure authentication, image upload/download, and a web-based user interface using React for seamless interaction.",
        "Integrating backend services with Node.js and Express and used MongoDB for secure metadata storage and efficient search functionality.",
        "Exploring advanced features like facial recognition integration and offline access to further enhance the user experience.",
      ],
    },
    {
      title: "The Floor is Confusing",
      technologies: "Unity, C#, Quest Platform",
      ongoing: true,
      details: [
        "Designing a VR parkour game where players traverse levels using an innovative slingshot mechanism; inspired by Angry Birds for trajectory visualization and The Floor is Lava for dynamic platform puzzles.",
        "Utilizing Unity and C# to implement intuitive hand-tracking controls on Meta Quest devices with a focus on safety and comfort.",
        "Developing levels featuring diverse platforms that challenge players to strategize their routes while minimizing motion discomfort.",
        "Prototyping additional features such as timer-based leaderboards, alternative movement abilities (air dash, wall jump), and environmental effects like rising lava to extend gameplay depth.",
      ],
    },
    {
      title: "Gesture Control",
      technologies: "Python, OpenCV, Mediapipe",
      ongoing: false,
      details: [
        "Created application for computer control via hand gestures",
        "Implemented multiple control modes including mouse and media control",
        "Used OpenCV and Mediapipe with Tensorflow for gesture recognition",
      ],
    },
    {
      title: "Greenworld",
      technologies: "Python, MySQL",
      ongoing: false, // set true if project is ongoing
      details: [
        "Created a program for waste management database connections",
        "Implemented plotting utility for top donors and login system",
        "Integrated MySQL databases with Python for UI and functionality",
      ],
    },
  ];

  return (
    <Container id="projects" size="lg" py="xl" pl="3rem">
      <Title order={2} mb="xl" align="left">
        Experience
      </Title>
      <Stack spacing="xl">
        {experiences.map((exp, index) => (
          <CardWithAnimation key={index} index={index}>
            <Card shadow="sm" padding="lg" className="card-hover">
              <Group position="apart" mb="xs">
                <Text weight={700}>{exp.company}</Text>
                <Group spacing="xs">
                  <Badge>{exp.date}</Badge>
                  {exp.ongoing && (
                    <Badge color="green" variant="filled">
                      Ongoing
                    </Badge>
                  )}
                </Group>
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

      <div style={{ marginTop: "4rem" }} />
      {/* Add gap between Experience and Projects */}
      <Title order={2} mb="xl" align="left">
        Projects
      </Title>
      <Stack spacing="xl">
        {projects.map((project, index) => (
          <CardWithAnimation key={index} index={index}>
            <Card shadow="sm" padding="lg" className="card-hover">
              <Group position="apart" mb="xs">
                <Text weight={700}>{project.title}</Text>
                <Group spacing="xs">
                  <Badge>{project.technologies}</Badge>
                  {project.ongoing && (
                    <Badge color="green" variant="filled">
                      Ongoing
                    </Badge>
                  )}
                </Group>
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
    </Container>
  );
};

export default Projects;
