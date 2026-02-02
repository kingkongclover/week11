import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ minWidth: '100' }}
          >
            <MenuIcon />
          </IconButton>
          <Button component={Link} to='/' color="inherit">home</Button>
          <Button component={Link} to='/saved' color="inherit">saved</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}