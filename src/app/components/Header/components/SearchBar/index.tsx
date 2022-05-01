import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function SearchBar() {
  const history = useHistory();

  const [value, setValue] = React.useState<string>('');

  const handleSetValue = e => {
    setValue(e.target.value);
  };

  const handleClickSearch = () => {
    if (value.trim().length > 0) {
      history.push(`/search?words=${value}`);
    }
  };

  return (
    <SearchInput
      placeholder="Nhập tên sản phẩm ..."
      onChange={handleSetValue}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon
              onClick={handleClickSearch}
              sx={{ '&:hover': { cursor: 'pointer', color: '#02C4DA' } }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
}

const SearchInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  height: '50px',
  width: '500px',
  borderRadius: '16px',

  // css for TextField

  '.MuiOutlinedInput-root': {
    height: '50px',

    svg: { height: '25px', width: '25px' },

    input: {
      height: '100%',
      padding: '0px 16px',
      fontSize: '14px',
      lineHeight: '22px',

      '&::placeholder': {
        fontSize: '14px',
        lineHeight: '22px',
      },
    },

    fieldset: {
      border: '1px solid rgba(0,0,0,0.8)',
      outline: 'none',
    },
  },
}));
