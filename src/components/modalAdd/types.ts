import {PatientData} from '../../types/types';

export interface props {
  onClose: () => void;
  onSubmit: (patient: PatientData) => void;
  isVisible: boolean;
  patient: PatientData | null;
}

interface Inputs {
  id: string;
  placeholder: string;
  required: boolean;
  value: string;
}

export const inputs: Inputs[] = [
  {id: 'name', placeholder: 'Full Name', required: true, value: ''},
  {id: 'avatar', placeholder: 'Picture', required: false, value: ''},
  {id: 'description', placeholder: 'Description', required: true, value: ''},
  {id: 'website', placeholder: 'Website', required: true, value: ''},
  {
    id: 'DOB',
    placeholder: 'Date of birth MM/DD/YYYY',
    required: false,
    value: '',
  },
  {id: 'gender', placeholder: 'Gender', required: false, value: ''},
  {id: 'weight', placeholder: 'Weight', required: false, value: ''},
  {id: 'height', placeholder: 'Height', required: false, value: ''},
];
