import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tooltip } from '@material-ui/core';
import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext';

const HeaderFieldsetStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 56px;
  grid-column-gap: 16px;
  h4 {
    background-color: ${(p) => p.theme.primaryBackground};
    color: ${(p) => p.theme.primaryColor};
    padding: 16px;
    border-radius: 5px;
    margin: 22px 0;
  }

  .cancel-btn {
    height: 48px;
    margin: 22px 0;
  }
`;

interface Props {
  title: string;
  className?: string | undefined;
  closeDrawer: () => void;
}

const HeaderFieldset = ({ title, className, closeDrawer }: Props) => {
  const { theme } = useContext(ThemeContext);
  const handleCancel = () => closeDrawer();
  return (
    <HeaderFieldsetStyle theme={theme} className={className}>
      <h4>{title}</h4>
      <Tooltip title="anuluj">
        <Button className="cancel-btn" color="primary" onClick={handleCancel}>
          <FontAwesomeIcon className="g-primary-color" icon={faWindowClose} />
        </Button>
      </Tooltip>
    </HeaderFieldsetStyle>
  );
};

export default HeaderFieldset;
