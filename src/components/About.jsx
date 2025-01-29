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
import Skills from "./Skills";
import profileImage from "../images/Me.jpg";
import React, { useState } from "react";
import "./about/About.css";

const About = () => {
  return (
    <section className="hero-section">
      <div className="about-container">
        <Text className="about-text">
          Computer Science at University of Wisconsin - Madison. Fullstack
          Developer with a love for visual design and cybersecurity
        </Text>
        <Skills />
      </div>

      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>

      <Text className="name-text">Sanjay Nagarimadugu</Text>
    </section>
  );
};

export default About;
