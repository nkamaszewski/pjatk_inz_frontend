import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import Logo from '../assets/logo.svg';

const navigationsItems = [
  { id: 1, label: 'Pracownicy', link: '/pracownicy' },
  { id: 2, label: 'Wnioski', link: '/wnioski' },
  { id: 3, label: 'Szkolenia', link: '/szkolenia' },
  { id: 4, label: 'Szkolenia wewnętrzne', link: '/szkolenia-wewnetrzne' },
  { id: 5, label: 'Ankiety', link: '/ankiety' },
  {
    id: 6,
    label: 'Firma',
    link: '/firma',
    children: [
      { id: '6a', label: 'Dane Firmy', link: '/dane-firmy' },
      { id: '6b', label: 'Piony - wydziały', link: '/piony-wydzialy' },
      { id: '6c', label: 'Stanowiska', link: '/stanowiska' },
    ],
  },
  { id: 7, label: 'Moje konto', link: '/moje-konto' },
];

const NavigationStyle = styled.div`
  height: 100%;
  width: 280px;
  background-color: #c4c4c4;

  .logo {
    height: 76px;
    width: 280px;
    background-color: #b9cacd;
    padding: 22px;
  }

  .divider {
    height: 16px;
    width: 280px;
    background-color: white;
  }

  .navLink-item {
    display: block;
    font-size: 24px;
    padding: 16px 8px;
    text-decoration: none;
    color: black;
    &:hover {
      background-color: rgba(118, 45, 45, 0.2);
    }
  }
`;

const Navigation = () => {
  const [firmyOpen, setFirmyOpen] = useState(false);

  const getCloseFn = (label: string) => {
    switch (label) {
      case 'Firma':
        return { open: firmyOpen, setOpen: setFirmyOpen };
      default:
        return { open: false, setOpen: () => {} };
    }
  };

  return (
    <NavigationStyle>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="divider" />

      {navigationsItems.map((item) => (
        <div key={item.id}>
          <NavLink className="navLink-item" to={item.link}>
            <span
              onClick={() =>
                getCloseFn(item.label).setOpen(
                  (prevState: boolean) => !prevState
                )
              }
            >
              {item.label}
            </span>
          </NavLink>
          {item.children && (
            <Collapse
              in={getCloseFn(item.label).open}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
          )}
        </div>
      ))}
    </NavigationStyle>
  );
};

export default Navigation;
