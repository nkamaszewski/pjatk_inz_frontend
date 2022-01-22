import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { AddtionalApplicationsContent } from './AddtionalApplicationsContent';

interface Props {
  closeDrawer: () => void;
}

export const AddtionalApplicationsFieldset = ({ closeDrawer }: Props) => {
  const schema = useLanguageSchema();
  return (
    <FieldsetStyled>
      <HeaderFieldset
        title={schema.addAnApplication}
        closeDrawer={closeDrawer}
      />
      <AddtionalApplicationsContent closeDrawer={closeDrawer} />
    </FieldsetStyled>
  );
};
