import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useLanguageSchema } from 'providers/LanguageProvider';
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
  const schema = useLanguageSchema();
  return (
    <IconBtn
      title={schema.sendActivationLink}
      onClick={handleOnClick}
      icon={faPaperPlane}
    />
  );
};
