import React from "react";
import { ChatState } from "../Context/chatProvider";
import { Box } from "@chakra-ui/react";
import SingleChats from "./SingleChats";

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();
  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      className="group-item"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="1g"
      borderWidth="1px"
    >
      <SingleChats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default ChatBox;
