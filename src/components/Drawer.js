import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="bg-slate-800 h-full text-white flex flex-col justify-center text-center md:hidden"
    >
      <List>
        {['Reservations', 'Add reservation', 'Add Airplane', 'Remove Airplane'].map((text) => (
          <ListItem button key={text}>
            <NavLink className="text-center w-full " to={`/${text.toLowerCase().replace(' ', '-')}/`}><ListItemText primary={text} /></NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="sm:block md:hidden text-yellow-400 text-5xl">
      <>
        <FaBars onClick={toggleDrawer('left', true)} />
        <Drawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </>
    </div>
  );
}
