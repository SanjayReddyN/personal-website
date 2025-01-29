import { Stack, Card, Text, Group } from "@mantine/core";
// import { Stack } from "@mantine/core/Stack";
// import { Card } from "@mantine/core/Card";
// import { Text } from "@mantine/core/Text";
// import { Group } from "@mantine/core/Group";

export const BucketListSection = () => {
  const bucketList = [
    {
      title: "Learning how to do a backflip",
      description:
        "Imagine being able to show people that you can do a backflip",
    },
    {
      title: "Skydiving",
      description: "Gotta try it at least once right?",
    },
    {
      title: "Hiking in New Zealand",
      description: "They also have wonderful music there I'd love to listen to",
    },
  ];

  return (
    <Stack spacing="md">
      {bucketList.map((item, index) => (
        <Card key={index} shadow="sm" padding="lg">
          <Group position="apart">
            <Text weight={500}>{item.title}</Text>
            <Text size="sm" color="dimmed">
              {item.description}
            </Text>
          </Group>
        </Card>
      ))}
    </Stack>
  );
};
