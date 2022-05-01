import { Box } from '@mui/material';
import MenuList from '../MenuList';
import HeaderMenuItem from './HeaderMenuItem';

export default function HeaderMenu() {
  return (
    <Box display="flex" alignItems="center" sx={{ gap: '40px' }}>
      <HeaderMenuItem text="Trang chủ" link="/" />
      <MenuList>
        <Box>
          <Box
            sx={{
              fontSize: '14px',
              lineHeight: '18px',
              fontWeight: 700,
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            Danh mục
          </Box>
        </Box>
      </MenuList>
    </Box>
  );
}
