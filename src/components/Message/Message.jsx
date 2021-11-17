import { Avatar, ListItemAvatar, ListItemText, ListItem } from '@mui/material';
import './Message.scss';

export const Message = ({ message }) => {
  const avatar =
    message.author === 'Me'
      ? 'https://picsum.photos/50'
      : 'https://picsum.photos/70';

  const position = message.author === 'Me' ? 'flex-end' : 'flex-start';

  return (
    <ListItem sx={{ width: 'max-content', alignSelf: position }}>
      <ListItemAvatar>
        <Avatar src={avatar} />
      </ListItemAvatar>
      <ListItemText primary={message.text} secondary={message.date} />
    </ListItem>
  );
};
