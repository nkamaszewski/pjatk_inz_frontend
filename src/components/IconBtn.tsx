import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tooltip } from '@material-ui/core';
import styled from 'styled-components';

const IconBtnStyled = styled.div``;

interface Props {
  title: string;
  onClick: () => void;
  icon: IconProp;
  iconClassname?: string;
}

export const IconBtn = ({ title, onClick, icon, iconClassname }: Props) => {
  return (
    <Tooltip title={title}>
      <IconBtnStyled>
        <Button onClick={onClick}>
          <FontAwesomeIcon icon={icon} className={iconClassname} />
        </Button>
      </IconBtnStyled>
    </Tooltip>
  );
};
