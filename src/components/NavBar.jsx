import {
  Container,
  Group,
  Button,
  ActionIcon,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconSun,
  IconMoonStars,
} from "@tabler/icons-react";

const Navbar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container size="lg" py="md" className="navbar">
      <Group position="apart">
        <Group>
          <Text size="xl" weight={700}>
            Sanjay Nagarimadugu
          </Text>
          <Text color="dimmed">Software Developer</Text>
        </Group>
        <Group>
          <Button variant="subtle" onClick={() => scrollToSection("about")}>
            About
          </Button>
          <Button variant="subtle" onClick={() => scrollToSection("skills")}>
            Skills
          </Button>
          <Button variant="subtle" onClick={() => scrollToSection("projects")}>
            Experience
          </Button>
          <Button variant="subtle" onClick={() => scrollToSection("goals")}>
            Goals
          </Button>
          <Group spacing="xs">
            <ActionIcon
              component="a"
              href="https://github.com/SanjayReddyN"
              target="_blank"
              variant="subtle"
              size="lg"
            >
              <IconBrandGithub size={24} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://www.linkedin.com/in/sanjayreddyn"
              target="_blank"
              variant="subtle"
              size="lg"
            >
              <IconBrandLinkedin size={24} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="mailto:snagarimadug@wisc.edu"
              variant="subtle"
              size="lg"
            >
              <IconMail size={24} />
            </ActionIcon>
            <ActionIcon
              variant="outline"
              color={colorScheme === "dark" ? "yellow" : "blue"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {colorScheme === "dark" ? (
                <IconSun size={18} />
              ) : (
                <IconMoonStars size={18} />
              )}
            </ActionIcon>
          </Group>
        </Group>
      </Group>
    </Container>
  );
};

export default Navbar;
