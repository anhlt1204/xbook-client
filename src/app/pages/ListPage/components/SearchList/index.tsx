import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  setValue: Function;
}

export default function SearchList(props: Props) {
  return (
    <TextFieldStyle
      placeholder="Tìm kiếm"
      onChange={e => props.setValue(e.target.value)}
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

const TextFieldStyle = styled(TextField)<TextFieldProps>(({ theme }) => ({
  height: '40px',
  fontSize: '14px',
  lineHeight: '22px',
  fontWeight: 700,
  borderRadius: '10px',

  // css for TextField

  '.MuiOutlinedInput-root': {
    paddingLeft: '8px',
    height: '40px',

    svg: { height: '25px', width: '25px' },

    input: {
      height: '100%',
      padding: '0px 16px 0px 0px',
      fontSize: '14px',
      lineHeight: '22px',

      '&::placeholder': {
        fontSize: '16px',
        lineHeight: '22px',
      },
    },

    fieldset: {
      border: '1px solid rgba(0,0,0,0.8)',
      outline: 'none',
    },
  },
}));
