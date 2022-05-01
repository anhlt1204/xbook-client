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
        height: '125px',
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
          sx={{ height: '70px' }}
        >
          <LogoHeader />
          <SearchBar />
          <ButtonGroupHeader />
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ height: '55px', borderBottom: '2px solid #bb0000' }}
        >
          <HeaderMenu />
        </Grid>
      </Container>
    </Box>
  );
}
