import {
  Container,
  Title,
  Grid,
  Text,
  Card,
  Stack,
  Badge,
  Group,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import "./Goals.css";
import NatureCollage from "../images/Nature_Collage.jpg";
import DrumSet from "../images/Drums.jpg";
import Reading from "../images/Reading.jpg";

const Goals = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const spanAmount = isSmallScreen ? 12 : 6;

  const goals = {
    drums: {
      title: "Learning Drums",
      description:
        "Recently assembled the Alesis Nitro Max drum kit and excited to begin my journey into percussion. Looking forward to mastering rhythm and coordination through regular practice sessions.",
      imagePlaceholder: DrumSet,
    },
    modeling: {
      title: "Digital Art",
      description:
        "Exploring Adobe Creative Suite and Blender to create images and models. Focusing on learning fundamental modeling techniques and creative design principles. (I'm very happy with the turtle)",
      imagePlaceholder: NatureCollage,
    },
  };

  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      notes: "Learning about building better habits through small changes",
    },
    {
      title: "Psychology of Money",
      author: "Morgan Housel",
      notes: "Understanding behavioral aspects of financial decisions",
    },
    {
      title: "The Giver",
      author: "Lois Lowry",
      notes: "Exploring themes of individuality and conformity",
    },
  ];

  return (
    <Container id="goals" size="lg" py="xl" pl="3rem">
      <Title order={2} mb="xl" align="left">
        Personal Goals
      </Title>

      {/* Drums Section */}
      <Grid className="goal-section" mb="xl">
        <Grid.Col span={spanAmount}>
          <Stack className="goal-content">
            <Title order={3}>{goals.drums.title}</Title>
            <Text>{goals.drums.description}</Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={spanAmount}>
          <div className="image-placeholder">
            <img
              src={goals.drums.imagePlaceholder}
              alt="Digital Art"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "1rem",
              }}
            />
          </div>
        </Grid.Col>
      </Grid>

      {/* 3D Modeling Section */}
      <Grid className="goal-section reverse" mb="xl">
        <Grid.Col span={spanAmount}>
          <div className="image-placeholder">
            <img
              src={goals.modeling.imagePlaceholder}
              alt="Digital Art"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "1rem",
              }}
            />
          </div>
        </Grid.Col>
        <Grid.Col span={spanAmount}>
          <Stack className="goal-content">
            <Title order={3}>{goals.modeling.title}</Title>
            <Text>{goals.modeling.description}</Text>
          </Stack>
        </Grid.Col>
      </Grid>

      {/* Reading Section */}
      <Title order={2} mb="xl" align="left">
        Current Reading List
      </Title>
      <Grid className="goal-section">
        <Grid.Col span={spanAmount}>
          <Stack className="goal-content">
            <Stack spacing="md">
              {books.map((book, index) => (
                <Card
                  key={index}
                  shadow="sm"
                  padding="md"
                  className="book-card"
                >
                  <Stack>
                    <Group position="apart">
                      <Text weight={700}>{book.title}</Text>
                      <Badge>{book.author}</Badge>
                    </Group>
                    <Text size="sm" color="dimmed">
                      Notes: {book.notes}
                    </Text>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col span={spanAmount}>
          <div className="image-placeholder">
            <img
              src={Reading}
              alt="Digital Art"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "1rem",
              }}
            />
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Goals;
