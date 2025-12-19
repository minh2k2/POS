import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function AccountMenu() {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          POS System
        </Typography>

        <Button color="inherit" component={Link} to="/">
          POS
        </Button>
        <Button color="inherit" component={Link} to="/ordersrealtime">
          Orders Realtime
        </Button>
      </Toolbar>
    </AppBar>


  );
}
