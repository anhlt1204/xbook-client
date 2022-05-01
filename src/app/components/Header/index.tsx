import { Box, Container, Grid } from '@mui/material';
import LogoHeader from './components/LogoHeader';
import ButtonGroupHeader from './components/ButtonGroupHeader';
import HeaderMenu from './components/HeaderMenu';
import SearchBar from './components/SearchBar';

export default function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '160px',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: '100%',
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: '80px' }}
        >
          <LogoHeader />
          <HeaderMenu />
          <ButtonGroupHeader />
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ height: '80px', borderBottom: '2px solid #28CE7E' }}
        >
          <SearchBar />
        </Grid>
      </Container>
    </Box>
  );
}
