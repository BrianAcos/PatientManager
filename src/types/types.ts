export interface PatientData {
  avatar: string;
  createdAt: string;
  description: string;
  id: string;
  name: string;
  website: string;
  DOB?: string;
  gender?: string;
  weight?: string;
  height?: string;
}

export type NotificationType = 'error' | 'success' | null;