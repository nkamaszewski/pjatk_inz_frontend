import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Drawer } from '@material-ui/core';
import { IconBtn } from 'components/IconBtn';
import { useDrawer } from 'hooks/useDrawer';
import { AddtionalApplicationsFieldset } from 'pages/AdditionalApplications/AddtionalApplicationsFieldset';
import { useLanguageSchema } from 'providers/LanguageProvider';

interface Props {
  IdApplicationFor: string;
}

export const AddAdditionalBtn = ({ IdApplicationFor }: Props) => {
  const { open, openDrawer, closeDrawer } = useDrawer();
  const schema = useLanguageSchema();

  return (
    <>
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <AddtionalApplicationsFieldset
          closeDrawer={closeDrawer}
          IdApplicationFor={IdApplicationFor}
        />
      </Drawer>
      <IconBtn
        title={schema.addAdditionalApplication}
        onClick={openDrawer}
        icon={faPlus}
        iconClassname="g-primary-color"
      />
    </>
  );
};
