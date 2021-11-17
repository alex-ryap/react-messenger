import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

export default function UserInfo() {
  return (
    <ListItem sx={{ px: 0 }}>
      <ListItemAvatar>
        <Avatar src="https://picsum.photos/50" />
      </ListItemAvatar>
      <ListItemText primary="Bob Garden" secondary="Project-manager" />
    </ListItem>
  );
}
