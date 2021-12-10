import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguage } from 'providers/LanguageProvider';
import { useState } from 'react';

export const useNavigation = () => {
  const [firmyOpen, setFirmyOpen] = useState(false);
  const [wnioskiOpen, setWnioskiOpen] = useState(false);
  const [szkoleniaOpen, setSzkoleniaOpen] = useState(false);
  const [szkoleniaWewnetrzneOpen, setSzkoleniaWewnetrzneOpen] = useState(false);
  const {
    language: {
      schema: { company, applications, trainings, internalTrainings },
    },
  } = useLanguage();

  const getCloseFn = (label: string) => {
    switch (label) {
      case capFL(company):
        return { open: firmyOpen, setOpen: setFirmyOpen };
      case capFL(applications):
        return { open: wnioskiOpen, setOpen: setWnioskiOpen };
      case capFL(trainings):
        return { open: szkoleniaOpen, setOpen: setSzkoleniaOpen };
      case capFL(internalTrainings):
        return {
          open: szkoleniaWewnetrzneOpen,
          setOpen: setSzkoleniaWewnetrzneOpen,
        };
      default:
        return { open: false, setOpen: () => {} };
    }
  };
  return getCloseFn;
};
