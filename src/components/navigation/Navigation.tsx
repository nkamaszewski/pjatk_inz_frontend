import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../../providers/ThemeContext';
import { useNavigation } from './useNavigation';
import { useNavigationItems } from './useNavigationItems';

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
  const getCloseFn = useNavigation();
  const navigationItems = useNavigationItems();

  const { theme } = useTheme();

  return (
    <NavigationStyle theme={theme}>
      <img src={theme.logoSrc} alt="logo" className="logo" />

      {navigationItems.map((item) => {
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
