import { SimpleGrid, Card, Image, Text } from "@mantine/core";
// import { SimpleGrid } from "@mantine/core/SimpleGrid";
// import { Card } from "@mantine/core/Card";
// import { Image } from "@mantine/core/Image";
// import { Text } from "@mantine/core/Text";

import "./GamesSection.css";

export const GamesSection = () => {
  const games = [
    {
      name: "Marvel Rivals",
      image: "/images/games/marvel-rivals.jpg", // Add image to public folder
      description:
        "I've been playing this one since December. Super enjoyable, characters are very well designed and use the Marvel IP well. Most importantly, there is a LOT of movement characters in the game, and movement and skill expression is the most important thing for me in video games. Very fun!",
    },
    {
      name: "Elden Ring",
      image: "/images/games/elden-ring.jpg",
      description:
        "This one is an experience. What I love about it is that when you face a hard obstacle, you have two options. Repeatedly fight it until you win, or go somewhere else. It sounds simple but it really makes all the difference. The sheer variety of weapons, enemies, locations, dungeons, and playstles makes it such a personal experience. The first time I saw certain locations in the game like Siofra River, it was just pure awe. Wonderful game.",
    },
    {
      name: "Legend of Zelda: Breath of the Wild",
      image: "/images/games/botw.jpg",
      description:
        "A beautiful game. The music of every single location, the environments you see, and the stories uncover stick with you throughout the game because every single location is incredibly detailed and a joy to get lost in. The art style, and characters are also really well done, and the way you have full control in how you want to progress through the game, even go to final area within the first 2 hours, is incredible. I'd have play sessions where I'd start in area doing a mission and the next thing I knew I had gone on 7 tangents to reach the opposite of the map haha",
    },
  ];

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
      {games.map((game, index) => (
        <Card key={index} shadow="sm" padding="lg">
          <Card.Section>
            <Image src={game.image} height={200} alt={game.name} />
          </Card.Section>
          <Text weight={500} size="lg" mt="md" mb="xs">
            {game.name}
          </Text>
          <Text size="sm" color="dimmed">
            {game.description}
          </Text>
        </Card>
      ))}
    </SimpleGrid>
  );
};
