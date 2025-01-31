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
import "./Goals.css";

const Goals = () => {
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
    <Container id="goals" size="lg" py="xl">
      <Title order={2} mb="xl" align="left">
        Personal Goals
      </Title>

      {/* Drums Section */}
      <Grid className="goal-section" mb="xl">
        <Grid.Col span={6}>
          <Stack className="goal-content">
            <Title order={3}>Learning Drums</Title>
            <Text>
              Recently assembled the Alesis Nitro Max drum kit and excited to
              begin my journey into percussion. Looking forward to mastering
              rhythm and coordination through regular practice sessions.
            </Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={6}>
          <div className="image-placeholder">[Drum Kit Image Placeholder]</div>
        </Grid.Col>
      </Grid>

      {/* 3D Modeling Section */}
      <Grid className="goal-section reverse" mb="xl">
        <Grid.Col span={6}>
          <div className="image-placeholder">[3D Model Image Placeholder]</div>
        </Grid.Col>
        <Grid.Col span={6}>
          <Stack className="goal-content">
            <Title order={3}>3D Modeling Journey</Title>
            <Text>
              Exploring Adobe Creative Suite and Blender to create 3D models.
              Focusing on learning fundamental modeling techniques and creative
              design principles.
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>

      {/* Reading Section */}
      <Title order={2} mb="xl" align="left">
        Current Reading List
      </Title>
      <Grid className="goal-section">
        <Grid.Col span={6}>
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
        <Grid.Col span={6}>
          <div className="image-placeholder">[Books Image Placeholder]</div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Goals;
