import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import { Box } from '@mui/system';

export default function ChatsList({ chats }) {
  return (
    <List>
      {chats.map((chat) => (
        <Box key={chat.id}>
          <ListItemButton>
            <ListItem sx={{ p: 0 }}>
              <ListItemAvatar>
                <Avatar src={chat.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={`${chat.name} ${chat.surname}`}
                secondary={chat.lastMessage}
              />
            </ListItem>
          </ListItemButton>
        </Box>
      ))}
    </List>
  );
}
