import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const User = model('User', userSchema);
