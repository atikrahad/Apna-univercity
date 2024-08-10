import { TName, TUser } from '../user/user.interface';

export type TGuardian = {
  father: {
    name: TName;
    ocupation: string;
    contactNo: string;
  };
  mother: {
    name: TName;
    ocupation: string;
    contactNo: string;
  };
};

export type TStudent = {
  user: TUser;
  name: TName;
  gender: 'male' | 'famale' | 'others';
  dateOfBirth: Date;
  email: string;
  constactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permenentAddress: string;
  guardian: TGuardian;
  localGuardian: TGuardian;
  academicDepertMent: string;
  group?: 'sceince' | 'arts' | 'commerce';
  profileImg: string;
  isDeleted: boolean;
};
