import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';

export const useNavigation = () => {
  const [firmyOpen, setFirmyOpen] = useState(false);
  const [wnioskiOpen, setWnioskiOpen] = useState(false);
  const [szkoleniaOpen, setSzkoleniaOpen] = useState(false);
  const [szkoleniaWewnetrzneOpen, setSzkoleniaWewnetrzneOpen] = useState(false);
  const { company, applications, trainings, internalTrainings } =
    useLanguageSchema();

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
