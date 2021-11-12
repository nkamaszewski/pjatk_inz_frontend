import styled from 'styled-components';
import lottieJson from 'animations/NoData.json';
import Lottie from 'react-lottie-player';
import { useLanguage } from 'providers/LanguageProvider';

const NoDataStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .lottie {
    width: 640px;
    height: 480px;
  }
`;

export const NoData = () => {
  const {
    language: {
      schema: { noContent },
    },
  } = useLanguage();
  return (
    <NoDataStyled>
      <Lottie className="lottie" loop animationData={lottieJson} play />
      <h2>{noContent}</h2>
    </NoDataStyled>
  );
};
