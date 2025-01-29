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
    <nav className="navbar">
      <div className="nav-links">
        <Button variant="subtle" onClick={() => scrollToSection("about")}>
          About
        </Button>
        <Button variant="subtle" onClick={() => scrollToSection("projects")}>
          Experience
        </Button>
        <Button variant="subtle" onClick={() => scrollToSection("goals")}>
          Goals
        </Button>
      </div>
      <div className="social-links">
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
      </div>
    </nav>
  );
};

export default Navbar;
