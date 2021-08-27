import { Card } from '@material-ui/core';
import styled from 'styled-components';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const DocumentAdditionalListHeaderStyle = styled(Card)`
  margin-top: 4px;
  padding: 16px;
  img {
    width: 28px;
    height: 28px;
  }
`;

const DocumentAdditionalListHeader = () => {
  return (
    <>
      <HeaderListStyled className="grid-room">
        <>
          <p>Nazwa</p>
          <p>Powierzchnia</p>
          <p className="item-centered">Kinowe</p>
          <p className="item-centered">"U"</p>
          <p className="item-centered">"U" bez stołu</p>
          <p className="item-centered">Szkolne</p>
        </>
      </HeaderListStyled>
      <DocumentAdditionalListHeaderStyle className="grid-room">
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
      </DocumentAdditionalListHeaderStyle>
    </>
  );
};

export default DocumentAdditionalListHeader;
