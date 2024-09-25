import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import config from '../config';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needPasswordChange: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
    },
    stutas: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.bcrypt_sault_round));
  next();
});

userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

const UserModel = model<TUser>('user', userSchema);

export default UserModel;
