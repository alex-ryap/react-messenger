import { Search as SearchIcon } from '@mui/icons-material';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

export default function Search() {
  return (
    <TextField
      sx={{
        my: 2,
      }}
      fullWidth
      variant="standard"
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
