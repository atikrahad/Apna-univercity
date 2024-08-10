export type TUser = {
  id: string;
  password: string;
  needPasswordChange: boolean;
  role: 'student' | 'faculty' | 'admin';
  stutas: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
export type TName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
