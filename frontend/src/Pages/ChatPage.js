import { ChatState } from "../Context/ChatProvider"
import { Box } from "@chakra-ui/react";
import MyChat from "../Components/mislleneous/MyChat";
import ChatBox from "../Components/mislleneous/ChatBox";
import SideDrawer from "../Components/mislleneous/SideDrawer";
import { useState } from "react";

const ChatPage = () => {
  const [fetchAgain ,setFetchAgain] =  useState(false);
  const {user} = ChatState();
  return (
    <div style={{width:"100%",color:'black'}}>
      {user && <SideDrawer/>}

      <Box display="flex" justifyContent='space-between' width='100%' padding='10px' height='91.5vh' >
        {user && <MyChat fetchAgain={fetchAgain} />}
        {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
      </Box>
    </div>
  )
}

export default ChatPage
