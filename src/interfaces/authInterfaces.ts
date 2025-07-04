export interface ChangeData {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  userName: string;
  email: string;
  country: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export interface VerfiyData {
  email: string;
  code: string;
}

export interface ForgetPassData {
  email: string;
}

export interface ResetData {
  email: string;
  password: string;
  confirmPassword: string;
  seed: string;
}

export interface RegisterFormData {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  password: string;
}

export interface Student {
  _id: string;
  first_name: string;
  group?: string; 
}

export interface Group {
  _id: string;
  name: string;
  students: Student[] | string[];

}
export interface User {
  first_name: string;
  last_name: string;
  role: string;
  email: string;
  status: string;
  _id: string;

}