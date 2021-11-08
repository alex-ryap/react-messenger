import { Divider, List, ListItemText, Toolbar } from '@mui/material';
import { Message } from '../Message/Message';

export default function MessagesHistory({ messageList }) {
  return (
    <div>
      <Toolbar>
        <h3>
          Chat with <span>Robot</span>
        </h3>
      </Toolbar>
      <Divider />
      <div className="chat__history">
        <div className="messages">
          <List sx={{ display: 'flex', flexDirection: 'column' }}>
            {messageList.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}
