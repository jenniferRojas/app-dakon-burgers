import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  
 
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/HAMBURGUESAS'>Hamburguesas</SidebarLink>
        <SidebarLink to='/'>Combos Hamburguesas</SidebarLink>
        <SidebarLink to='/'>Chorizos</SidebarLink>
        <SidebarLink to='/'>Especiales</SidebarLink>
        <SidebarLink to='/'>Bebidas</SidebarLink>
      </SidebarMenu>
      
    </SidebarContainer>
  );
};

export default Sidebar;