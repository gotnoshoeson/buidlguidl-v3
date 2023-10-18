import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { chakraMarkdownComponents } from "../helpers/chakraMarkdownTheme";
import ReactMarkdown from "react-markdown";
import React, { useEffect, useState } from "react";
import { useNotifications } from "../contexts/notificationContext";

const NotificationItem = ({ notification, onMarkAsRead }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" padding="4" marginY="2" boxShadow="sm">
      <Heading size="md" marginBottom="2">
        {notification.title}
      </Heading>
      <ReactMarkdown components={ChakraUIRenderer(chakraMarkdownComponents)}>{notification.content}</ReactMarkdown>
      <Button mt="4" colorScheme="blue" onClick={() => onMarkAsRead(notification.id)}>
        Mark as Read
      </Button>
    </Box>
  );
};

const BuilderNotifications = () => {
  const { notifications, markNotificationAsRead } = useNotifications();

  if (!notifications || notifications.length === 0) return null;

  return (
    <VStack align="stretch" spacing="4" mb="4">
      {notifications.map(notification => (
        <NotificationItem key={notification.title} notification={notification} onMarkAsRead={markNotificationAsRead} />
      ))}
    </VStack>
  );
};

export default BuilderNotifications;
