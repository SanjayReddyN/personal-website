import {
  Container,
  Text,
  Stack,
  Group,
  Button,
  Grid,
  Tabs,
} from "@mantine/core";
import { SpotifySection } from "./about/SpotifySection";
import { GamesSection } from "./about/GamesSection";
import { BucketListSection } from "./about/BucketListSection";
import profileImage from "../images/Me.jpg";
import React, { useState } from "react";
import "./about/About.css";

const About = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  return (
    <Container id="about" size="lg" py="xl">
      <Grid mb="xl">
        <Grid.Col span={4}>
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </Grid.Col>
        <Grid.Col span={8}>
          <Stack spacing="xl" align="flex-start">
            <Text size="lg">
              Computer Science at University of Wisconsin - Madison
            </Text>
            <Group>
              <Button
                variant="outline"
                onClick={() => setShowEmail(!showEmail)}
                className="contact-button"
              >
                {showEmail ? "snagarimadug@wisc.edu" : "Contact Me"}
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowPhone(!showPhone)}
                className="contact-button"
              >
                {showPhone ? "+1 (608) 977-4238" : "Call Me"}
              </Button>
            </Group>
            <Text size="md">
              Fullstack Developer with a love for visual design and
              cybersecurity
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>

      <Tabs defaultValue="music">
        <Tabs.List grow mb="xl">
          <Tabs.Tab value="music">Music</Tabs.Tab>
          <Tabs.Tab value="games">Games</Tabs.Tab>
          <Tabs.Tab value="bucket-list">Bucket List</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="music">
          <SpotifySection />
        </Tabs.Panel>
        <Tabs.Panel value="games">
          <GamesSection />
        </Tabs.Panel>
        <Tabs.Panel value="bucket-list">
          <BucketListSection />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default About;
