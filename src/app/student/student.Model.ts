import { model, Schema } from 'mongoose';
import { TGuardian, TStudent } from './student.Interface';
import { TName } from '../user/user.interface';

export const nameSchema = new Schema<TName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<TGuardian>({
  father: {
    name: nameSchema,
    ocupation: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
  },
  mother: {
    name: nameSchema,
    ocupation: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
  },
});

const studentSchema = new Schema<TStudent>({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: 'user',
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: nameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'famale', 'others'],
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  constactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
  },
  permenentAddress: {
    type: String,
  },
  academicSemester: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "academicSemester"
  },
  academicDepertMent: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    enum: ['sceince', 'arts', 'commerce'],
  },
  profileImg: {
    type: String,
    default: 'Image',
  },
  guardian: guardianSchema,
  localGuardian: guardianSchema,
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const studentModel = model<TStudent>('student', studentSchema);

export default studentModel;
