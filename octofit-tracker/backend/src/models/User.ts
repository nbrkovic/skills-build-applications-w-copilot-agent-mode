import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    profile: {
      age: Number,
      heightCm: Number,
      weightKg: Number,
    },
  },
  { timestamps: true },
);

export const User = model('User', userSchema);
