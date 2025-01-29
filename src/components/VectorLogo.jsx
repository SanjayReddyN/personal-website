import { ActionIcon } from "@mantine/core";
import vectorImage from "../images/Vector.jpg";

const VectorLogo = () => {
  const openImage = () => {
    window.open(vectorImage, "_blank");
  };

  return (
    <ActionIcon
      onClick={openImage}
      variant="subtle"
      size="lg"
      style={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        zIndex: 1000,
      }}
    >
      V
    </ActionIcon>
  );
};

export default VectorLogo;
