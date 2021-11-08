import { useEffect, useRef, useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { AUTHORS, DATEOPTIONS } from '../../utils/constants';

import './InputMessage.scss';

export const InputMessage = ({ submit }) => {
  const [text, setText] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (text) {
      const message = {
        author: AUTHORS.me,
        text: text,
        date: new Intl.DateTimeFormat('ru-RU', DATEOPTIONS).format(new Date()),
      };

      submit(message);
      setText('');
      inputRef.current?.focus();
    }
  };

  const handlerChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form className="form" onSubmit={handlerSubmit}>
      <Grid
        container
        spacing={2}
        sx={{ px: 2 }}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs>
          <TextField
            label="Type your message here"
            fullWidth
            id="filled-hidden-label-small"
            size="small"
            variant="filled"
            value={text}
            inputRef={inputRef}
            onChange={handlerChange}
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" endIcon={<SendIcon />} type="submit">
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
