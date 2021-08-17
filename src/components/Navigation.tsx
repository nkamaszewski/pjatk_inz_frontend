import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Collapse } from '@material-ui/core';
import { ThemeContext } from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faBuilding,
  faChalkboardTeacher,
  faChevronDown,
  faChevronUp,
  faDatabase,
  faDivide,
  faHistory,
  faPersonBooth,
  faPoll,
  faPollH,
  faSchool,
  faUniversity,
  faUserCircle,
  faUserFriends,
  faUsers,
  faUsersCog,
  faUserTie,
  faWindowRestore,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

interface NavigationItem {
  id: string;
  label: string;
  link: string;
  icon?: IconDefinition;
  children?: NavigationItem[];
}

const navigationsItems: NavigationItem[] = [
  { id: '1', label: 'Pracownicy', link: '/pracownicy', icon: faUsers },
  {
    id: '2',
    label: 'Wnioski',
    link: '/wnioski/wnioski-szkoleniowe',
    children: [
      {
        id: '2a',
        label: 'Szkoleniowe',
        link: '/wnioski/wnioski-szkoleniowe',
        icon: faChalkboardTeacher,
      },
      {
        id: '2b',
        label: 'Dodatkowe',
        link: '/wnioski/wnioski-dodatkowe',
        icon: faPoll,
      },
    ],
  },
  {
    id: '3',
    label: 'Szkolenia',
    link: '/szkolenia/studia',
    children: [
      {
        id: '3a',
        label: 'Studia',
        link: '/szkolenia/studia',
        icon: faUniversity,
      },
      { id: '3b', label: 'Kursy', link: '/szkolenia/kursy', icon: faSchool },
      {
        id: '3c',
        label: 'Szkolenia wewnętrzne',
        link: '/szkolenia/szkolenia-wewnetrzne',
        icon: faBuilding,
      },
      {
        id: '3d',
        label: 'Inne',
        link: '/szkolenia/inne',
        icon: faWindowRestore,
      },
      {
        id: '3e',
        label: 'Organizatorzy',
        link: '/szkolenia/organizatorzy',
        icon: faUserFriends,
      },
      {
        id: '3f',
        label: 'Szkoleniowcy',
        link: '/szkolenia/szkoleniowcy',
        icon: faUserTie,
      },
    ],
  },
  {
    id: '4',
    label: 'Szkolenia wewnętrzne',
    link: '/szkolenia-wewnetrzne/sale',
    children: [
      {
        id: '4a',
        label: 'Sale',
        link: '/szkolenia-wewnetrzne/sale',
        icon: faPersonBooth,
      },
      {
        id: '4b',
        label: 'Grupy',
        link: '/szkolenia-wewnetrzne/grupy',
        icon: faUsersCog,
      },
      {
        id: '4c',
        label: 'Harmonogram',
        link: '/szkolenia-wewnetrzne/harmonogram',
        icon: faHistory,
      },
    ],
  },
  { id: '5', label: 'Ankiety', link: '/ankiety', icon: faPollH },
  {
    id: '6',
    label: 'Firma',
    link: '/firma/dane-firmy',
    children: [
      {
        id: '6a',
        label: 'Dane Firmy',
        link: '/firma/dane-firmy',
        icon: faDatabase,
      },
      {
        id: '6b',
        label: 'Piony - wydziały',
        link: '/firma/piony-wydzialy',
        icon: faDivide,
      },
      {
        id: '6c',
        label: 'Stanowiska',
        link: '/firma/stanowiska',
        icon: faAddressCard,
      },
    ],
  },
  { id: '7', label: 'Moje konto', link: '/moje-konto', icon: faUserCircle },
];

const NavigationStyle = styled.div`
  height: 100%;
  width: 280px;
  background-color: ${({ theme }) => theme.primaryBackground};

  .logo {
    width: 240px;
    height: 74px;
    padding: 8px;
    border-radius: 10px;
  }

  .navLink-item {
    display: block;
    font-size: 16px;
    padding: 16px 8px;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryColor};
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
      background-color: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }

  .navLink-item-active {
    color: ${({ theme }) => theme.primaryHover};
  }

  .sub-label {
    padding-left: 42px;
  }

  .main-level-navLink,
  .child-item {
    display: grid;
    grid-template-columns: 42px 1fr 42px;
  }
`;

const FakeNavItem = ({
  children,
  className,
  to,
}: {
  children: JSX.Element;
  className: string;
  to: string;
}) => <div className={className}>{children}</div>;

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

      {navigationsItems.map((item) => {
        const Component = item.children ? FakeNavItem : NavLink;
        return (
          <div key={item.id}>
            <Component
              className="navLink-item"
              to={item.link}
              activeClassName="navLink-item-active"
            >
              <div
                className="main-level-navLink"
                onClick={() =>
                  getCloseFn(item.label).setOpen(
                    (prevState: boolean) => !prevState
                  )
                }
              >
                {item.icon ? <FontAwesomeIcon icon={item.icon} /> : <span />}
                {item.label}
                {item.children && (
                  <FontAwesomeIcon
                    icon={
                      getCloseFn(item.label).open ? faChevronUp : faChevronDown
                    }
                  />
                )}
              </div>
            </Component>
            {item.children && (
              <Collapse
                in={getCloseFn(item.label).open}
                timeout="auto"
                unmountOnExit
                className="collapse-element"
              >
                {item.children.map((child) => (
                  <div key={child.id} className="sub-label">
                    <NavLink
                      className="navLink-item child-item"
                      to={child.link}
                      activeClassName="navLink-item-active"
                    >
                      {child.icon ? (
                        <FontAwesomeIcon icon={child.icon} />
                      ) : (
                        <span />
                      )}
                      <p>{child.label}</p>
                    </NavLink>
                  </div>
                ))}
              </Collapse>
            )}
          </div>
        );
      })}
    </NavigationStyle>
  );
};

export default Navigation;
