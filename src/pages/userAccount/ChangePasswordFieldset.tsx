import HeaderFieldset from 'components/HeaderFieldset';
import FieldsetStyled from 'components/styled/FieldsetStyled';
import ChangePasswordContent from './ChangePasswordContent';

interface Props {
  closeDrawer: () => void;
}

const ChangePasswordFieldset = ({ closeDrawer }: Props) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset title={`Zmień hasło`} closeDrawer={closeDrawer} />
      <ChangePasswordContent closeDrawer={closeDrawer} />
    </FieldsetStyled>
  );
};

export default ChangePasswordFieldset;
