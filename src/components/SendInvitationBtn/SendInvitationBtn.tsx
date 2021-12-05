import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { IconBtn } from '../IconBtn';
import { useSendInvitation } from './useSendInitivation';

interface SendInvitationBtnProps {
  email: string;
}

export const SendInvitationBtn = ({ email }: SendInvitationBtnProps) => {
  const sendInvitation = useSendInvitation();
  const handleOnClick = () => {
    sendInvitation(email);
  };
  return (
    <IconBtn
      title="wyślij link aktywacyjny"
      onClick={handleOnClick}
      icon={faPaperPlane}
    />
  );
};
