import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from 'providers/LanguageProvider';
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
  const {
    language: { schema },
  } = useLanguage();
  return (
    <IconBtn
      title={schema.sendActivationLink}
      onClick={handleOnClick}
      icon={faPaperPlane}
    />
  );
};
