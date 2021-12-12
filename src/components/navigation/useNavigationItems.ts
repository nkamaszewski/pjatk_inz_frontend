import {
  faAddressCard,
  faChalkboardTeacher,
  faDatabase,
  faDivide,
  faHistory,
  faPersonBooth,
  faPoll,
  faPollH,
  faSchool,
  faUniversity,
  faUserCircle,
  faUserFriends,
  faUsers,
  faUsersCog,
  faUserTie,
  faWindowRestore,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { capFL } from 'helpers/capitalizeFirstLetter';
import { LanguageSchema } from 'languages/LanguageSchema';
import { useLanguage } from 'providers/LanguageProvider';
import { useMemo } from 'react';

interface NavigationItem {
  id: string;
  label: string;
  link: string;
  icon?: IconDefinition;
  children?: NavigationItem[];
}

const getNavigationsItems = (schema: LanguageSchema): NavigationItem[] => [
  {
    id: '1',
    label: capFL(schema.employees),
    link: '/pracownicy',
    icon: faUsers,
  },
  {
    id: '2',
    label: capFL(schema.applications),
    link: '/wnioski/wnioski-szkoleniowe',
    children: [
      {
        id: '2a',
        label: capFL(schema.training),
        link: '/wnioski/wnioski-szkoleniowe',
        icon: faChalkboardTeacher,
      },
      {
        id: '2b',
        label: capFL(schema.additional),
        link: '/wnioski/wnioski-dodatkowe',
        icon: faPoll,
      },
    ],
  },
  {
    id: '3',
    label: capFL(schema.trainings),
    link: '/szkolenia/studia',
    children: [
      {
        id: '3a',
        label: capFL(schema.study),
        link: '/szkolenia/studia',
        icon: faUniversity,
      },
      {
        id: '3b',
        label: capFL(schema.courses),
        link: '/szkolenia/kursy',
        icon: faSchool,
      },
      {
        id: '3d',
        label: capFL(schema.others),
        link: '/szkolenia/inne',
        icon: faWindowRestore,
      },
      {
        id: '3e',
        label: capFL(schema.organizators),
        link: '/szkolenia/organizatorzy',
        icon: faUserFriends,
      },
      {
        id: '3f',
        label: capFL(schema.coaches),
        link: '/szkolenia/szkoleniowcy',
        icon: faUserTie,
      },
    ],
  },
  {
    id: '4',
    label: capFL(schema.internalTrainings),
    link: '/szkolenia-wewnetrzne/sale',
    children: [
      {
        id: '4a',
        label: capFL(schema.rooms),
        link: '/szkolenia-wewnetrzne/sale',
        icon: faPersonBooth,
      },
      {
        id: '4b',
        label: capFL(schema.groups),
        link: '/szkolenia-wewnetrzne/grupy',
        icon: faUsersCog,
      },
      {
        id: '4c',
        label: capFL(schema.meetings),
        link: '/szkolenia-wewnetrzne/harmonogram',
        icon: faHistory,
      },
    ],
  },
  {
    id: '5',
    label: capFL(schema.questionnaires),
    link: '/ankiety',
    icon: faPollH,
  },
  {
    id: '6',
    label: capFL(schema.company),
    link: '/firma/dane-firmy',
    children: [
      {
        id: '6a',
        label: capFL(schema.companyData),
        link: '/firma/dane-firmy',
        icon: faDatabase,
      },
      {
        id: '6b',
        label: capFL(schema.departmentsDivisions),
        link: '/firma/piony-wydzialy',
        icon: faDivide,
      },
      {
        id: '6c',
        label: capFL(schema.positions),
        link: '/firma/stanowiska',
        icon: faAddressCard,
      },
    ],
  },
  {
    id: '7',
    label: capFL(schema.myAccount),
    link: '/moje-konto',
    icon: faUserCircle,
  },
];
export const useNavigationItems = () => {
  const {
    language: { schema },
  } = useLanguage();

  const menuItems = useMemo(() => getNavigationsItems(schema), [schema]);

  return menuItems;
};
