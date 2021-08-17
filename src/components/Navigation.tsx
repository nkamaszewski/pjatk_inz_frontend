import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Collapse } from '@material-ui/core';
import { ThemeContext } from '../contexts/ThemeContext';

const navigationsItems = [
  { id: 1, label: 'Pracownicy', link: '/pracownicy' },
  {
    id: 2,
    label: 'Wnioski',
    link: '/wnioski/wnioski-szkoleniowe',
    children: [
      { id: '2a', label: 'Szkoleniowe', link: '/wnioski/wnioski-szkoleniowe' },
      { id: '2b', label: 'Dodatkowe', link: '/wnioski/wnioski-dodatkowe' },
    ],
  },
  {
    id: 3,
    label: 'Szkolenia',
    link: '/szkolenia/studia',
    children: [
      { id: '3a', label: 'Studia', link: '/szkolenia/studia' },
      { id: '3b', label: 'Kursy', link: '/szkolenia/kursy' },
      {
        id: '3c',
        label: 'Szkolenia wewnętrzne',
        link: '/szkolenia/szkolenia-wewnetrzne',
      },
      { id: '3d', label: 'Inne', link: '/szkolenia/inne' },
      { id: '3e', label: 'Organizatorzy', link: '/szkolenia/organizatorzy' },
      { id: '3f', label: 'Szkoleniowcy', link: '/szkolenia/szkoleniowcy' },
    ],
  },
  {
    id: 4,
    label: 'Szkolenia wewnętrzne',
    link: '/szkolenia-wewnetrzne/sale',
    children: [
      { id: '4a', label: 'Sale', link: '/szkolenia-wewnetrzne/sale' },
      { id: '4b', label: 'Grupy', link: '/szkolenia-wewnetrzne/grupy' },
      {
        id: '4c',
        label: 'Harmonogram',
        link: '/szkolenia-wewnetrzne/harmonogram',
      },
    ],
  },
  { id: 5, label: 'Ankiety', link: '/ankiety' },
  {
    id: 6,
    label: 'Firma',
    link: '/firma/dane-firmy',
    children: [
      { id: '6a', label: 'Dane Firmy', link: '/firma/dane-firmy' },
      { id: '6b', label: 'Piony - wydziały', link: '/firma/piony-wydzialy' },
      { id: '6c', label: 'Stanowiska', link: '/firma/stanowiska' },
    ],
  },
  { id: 7, label: 'Moje konto', link: '/moje-konto' },
];

const NavigationStyle = styled.div`
  height: 100%;
  width: 280px;
  background-color: ${({ theme }) => theme.primaryBackground};

  .logo {
    width: 240px;
    height: 74px;
    padding: 8px;
  }

  .navLink-item {
    display: block;
    font-size: 16px;
    padding: 16px 8px;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryColor};
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  .sub-label {
    padding-left: 36px;
  }
`;

const Navigation = () => {
  const [firmyOpen, setFirmyOpen] = useState(false);
  const [wnioskiOpen, setWnioskiOpen] = useState(false);
  const [szkoleniaOpen, setSzkoleniaOpen] = useState(false);
  const [szkoleniaWewnetrzneOpen, setSzkoleniaWewnetrzneOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const getCloseFn = (label: string) => {
    switch (label) {
      case 'Firma':
        return { open: firmyOpen, setOpen: setFirmyOpen };
      case 'Wnioski':
        return { open: wnioskiOpen, setOpen: setWnioskiOpen };
      case 'Szkolenia':
        return { open: szkoleniaOpen, setOpen: setSzkoleniaOpen };
      case 'Szkolenia wewnętrzne':
        return {
          open: szkoleniaWewnetrzneOpen,
          setOpen: setSzkoleniaWewnetrzneOpen,
        };
      default:
        return { open: false, setOpen: () => {} };
    }
  };

  return (
    <NavigationStyle theme={theme}>
      <img src={theme.logoSrc} alt="logo" className="logo" />

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
              className="collapse-element"
            >
              {item.children.map((child) => (
                <div key={child.id}>
                  <NavLink className="navLink-item" to={child.link}>
                    <p className="sub-label">{child.label}</p>
                  </NavLink>
                </div>
              ))}
            </Collapse>
          )}
        </div>
      ))}
    </NavigationStyle>
  );
};

export default Navigation;
