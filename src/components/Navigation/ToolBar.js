import React from 'react';
import classes from './ToolBar.module.css';
import Logo from '../../components/Logo/Logo';
import NavigationItens from '../Navigation/NavigationItens/NavigationItens';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToogle';
const toolbar=(props)=>{
return(
  <header className={classes.Toolbar}>
  <DrawerToggle clicked={props.drawerToggleClicked} />
  <div className={classes.Logo}>
      <Logo />
  </div>
  <nav className={classes.DesktopOnly}>
  <NavigationItens />
  </nav>
</header>
);
}
export default toolbar;