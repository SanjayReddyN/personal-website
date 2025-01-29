import { SimpleGrid, Card, Text, Image } from "@mantine/core";
// import SimpleGrid from "@mantine/core/SimpleGrid";
// import Card from "@mantine/core/Card";
// import Text from "@mantine/core/Text";
// import Image from "@mantine/core/Image";

export const SpotifySection = () => {
  const topArtists = [
    // Add your top artists here
  ];

  return (
    <SimpleGrid cols={3}>
      {topArtists.map((artist, index) => (
        <Card key={index} shadow="sm" padding="lg">
          <Card.Section>
            <Image src={artist.image} height={160} />
          </Card.Section>
          <Text weight={500} mt="md">
            {artist.name}
          </Text>
        </Card>
      ))}
    </SimpleGrid>
  );
};
