export type PersonalData = {
  name: string,
  email: string,
  cpf: string,
  address: string,
  city: string,
  uf: string,
};

export type ProfessionalData = {
  resume: string,
  role: string,
  description: string,
};

export type FormInfo = PersonalData | ProfessionalData;
