import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  list: Array<{ label: string; value: string }>;
  setValue: Function;
}

export default function SelectList(props: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    props.setValue(event.target.value);
  };
  return (
    <Select
      defaultValue={props.list[0].value}
      onChange={handleChange}
      MenuProps={{
        sx: {
          '.MuiMenu-paper': {
            backgroundColor: '#FFF',
            width: '159px',

            borderRadius: '0px 0 12px 12px',

            ul: {
              padding: '0px',

              li: {
                height: '40px',
                padding: '16px',
                fontSize: '12px',
                lineHeight: '20px',
                fontWeight: 400,
              },
            },
          },
        },
      }}
      sx={{
        width: '172px',
        height: '40px',
        padding: '8px',
        borderRadius: '8px',

        '.MuiSelect-select': { padding: '6px' },

        fieldset: {
          border: '1px solid rgba(0,0,0,0.8)',
          outline: 'unset',
        },
      }}
    >
      {props.list.map((e, i) => (
        <MenuItem value={e.value} key={i}>
          {e.label}
        </MenuItem>
      ))}
    </Select>
  );
}
