import PageHeader from 'components/PageHeader';
import { useLanguageSchema } from 'providers/LanguageProvider';

interface ScoresPageProps {}

export const ScoresPage = ({}: ScoresPageProps) => {
  const schema = useLanguageSchema();
  return (
    <>
      <PageHeader title={schema.scores} />
    </>
  );
};
