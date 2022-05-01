import { Box } from '@mui/material';
import { selectGlobal } from 'app/components/GlobalState/selector';
import { useSelector } from 'react-redux';
import MenuList from '../MenuList';
import HeaderMenuItem from './HeaderMenuItem';

export default function HeaderMenu() {
  const { listCategory } = useSelector(selectGlobal);

  return (
    <Box display="flex" alignItems="center" sx={{ gap: '40px' }}>
      {listCategory.slice(0, 4).map((e, i) => (
        <HeaderMenuItem text={e.name} link={`/product-list/${e.id}`} key={i} />
      ))}

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
            Khác
          </Box>
        </Box>
      </MenuList>
    </Box>
  );
}
