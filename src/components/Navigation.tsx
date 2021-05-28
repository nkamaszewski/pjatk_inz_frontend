import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const navigationsItems = [
  { id: 1, label: 'Pracownicy', link: `/pracownicy` },
  { id: 2, label: 'Wnioski', link: `/wnioski` },
  { id: 3, label: 'Szkolenia', link: `/szkolenia` },
  { id: 4, label: 'Szkolenia wewnętrzne', link: `/szkolenia-wewnetrzne` },
  { id: 5, label: 'Ankiety', link: `/ankiety` },
  { id: 6, label: 'Firma', link: `/firma` },
  { id: 7, label: 'Moje konto', link: `/moje-konto` },
];

const NavigationStyle = styled.div`
  height: 100%;
  width: 280px;
  background-color: #c4c4c4;

  .navLink-item {
    font-size: 24px;
    padding: 16px 8px;
    a {
      text-decoration: none;
      color: black;
    }
  }
`;

const Navigation = () => {
  return (
    <NavigationStyle>
      {navigationsItems.map((item) => (
        <div key={item.id} className="navLink-item">
          <NavLink to={item.link}>{item.label}</NavLink>
        </div>
      ))}
    </NavigationStyle>
  );
};

export default Navigation;
