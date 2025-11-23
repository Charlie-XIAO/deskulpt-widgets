import { useState, useEffect } from "@deskulpt-test/react";
import { Flex, Text, Heading } from "@deskulpt-test/ui";

export default () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) =>
    date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <Flex
      direction="column"
      gapY="1"
      justify="center"
      align="center"
      height="100%"
      width="100%"
    >
      <Heading size="8">{formatTime(time)}</Heading>
      <Text color="gray">{formatDate(time)}</Text>
    </Flex>
  );
};
