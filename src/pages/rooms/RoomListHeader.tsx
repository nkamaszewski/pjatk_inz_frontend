import { Card } from '@material-ui/core';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const RoomListHeaderStyle = styled(Card)`
  margin-top: 4px;
  padding: 16px;
  img {
    width: 28px;
    height: 28px;
  }
`;

const RoomListHeader = () => {
  const { name, surface, cinematic, layoutU, uWithoutATable, schoolV2 } =
    useLanguageSchema();
  return (
    <>
      <HeaderListStyled className="grid-room">
        <>
          <p>{name}</p>
          <p>{surface}</p>
          <p className="item-centered">{cinematic}</p>
          <p className="item-centered">{layoutU}</p>
          <p className="item-centered">{uWithoutATable}</p>
          <p className="item-centered">{schoolV2}</p>
        </>
      </HeaderListStyled>
      <RoomListHeaderStyle className="grid-room">
        <>
          <p>Ustawienia krzeseł:</p>
          <div />
          <img
            src="/images/cinema_chairs.JPG"
            className="item-centered"
            alt="chair_setting_1"
          />
          <img
            src="/images/u_chairs.JPG"
            className="item-centered"
            alt="chair_setting_2"
          />
          <img
            src="/images/u_no_chairs.JPG"
            className="item-centered"
            alt="chair_setting_3"
          />
          <img
            src="/images/school_chairs.JPG"
            className="item-centered"
            alt="chair_setting_4"
          />
        </>
      </RoomListHeaderStyle>
    </>
  );
};

export default RoomListHeader;
