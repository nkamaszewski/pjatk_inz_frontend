import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Divider, Tooltip } from '@material-ui/core';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const HeaderFieldsetStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 56px;
  grid-column-gap: 16px;
  h3 {
    color: ${(p) => p.theme.primaryBackground};
    border-radius: 5px;
    margin: 22px 0;
  }

  .cancel-btn {
    height: 48px;
  }
`;

interface Props {
  title: string;
  className?: string | undefined;
  closeDrawer: () => void;
}

const HeaderFieldset = ({ title, className, closeDrawer }: Props) => {
  const { theme } = useTheme();
  const handleCancel = () => closeDrawer();
  return (
    <HeaderFieldsetStyle theme={theme} className={className}>
      <div>
        <h3>{title}</h3>
        <Divider />
      </div>
      <Tooltip title="anuluj">
        <Button className="cancel-btn" color="primary" onClick={handleCancel}>
          <FontAwesomeIcon className="g-primary-color" icon={faWindowClose} />
        </Button>
      </Tooltip>
    </HeaderFieldsetStyle>
  );
};

export default HeaderFieldset;
