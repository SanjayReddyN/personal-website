import { useState } from "react";
import { Stack, Tooltip, UnstyledButton } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconHome,
  IconBriefcase,
  IconTargetArrow,
} from "@tabler/icons-react";
import "./NavBar.css";

function NavbarLink({ icon: Icon, label, active, onClick }) {
  return (
    <Tooltip label={label} position="left" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={`nav-link ${active ? "active" : ""}`}
        data-active={active || undefined}
      >
        <Icon size={24} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const navigationLinks = [
    { icon: IconHome, label: "About", section: "about" },
    { icon: IconBriefcase, label: "Experience", section: "projects" },
    { icon: IconTargetArrow, label: "Goals", section: "goals" },
  ];

  const socialLinks = [
    {
      icon: IconBrandGithub,
      label: "GitHub",
      href: "https://github.com/SanjayReddyN",
    },
    {
      icon: IconBrandLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sanjayreddyn",
    },
    { icon: IconMail, label: "Email", href: "mailto:snagarimadug@wisc.edu" },
  ];

  const scrollToSection = (sectionId, index) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(index);
    }
  };

  return (
    <>
      <div className="navbar-tab" onMouseEnter={() => setIsVisible(true)} />
      <nav
        className={`navbar ${isVisible ? "visible" : ""}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <div className="navbar-main">
          <Stack justify="center" gap={20}>
            {navigationLinks.map((link, index) => (
              <NavbarLink
                key={link.label}
                {...link}
                active={index === active}
                onClick={() => scrollToSection(link.section, index)}
              />
            ))}
          </Stack>
        </div>

        <Stack justify="center" gap={20} className="social-links">
          {socialLinks.map((link) => (
            <Tooltip
              key={link.label}
              label={link.label}
              position="left"
              transitionProps={{ duration: 0 }}
            >
              <UnstyledButton
                component="a"
                href={link.href}
                target="_blank"
                className="nav-link"
              >
                <link.icon size={24} stroke={1.5} />
              </UnstyledButton>
            </Tooltip>
          ))}
        </Stack>
      </nav>
    </>
  );
};

export default Navbar;
