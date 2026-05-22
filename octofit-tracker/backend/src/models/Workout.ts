import { Schema, model, Types } from 'mongoose';

const workoutSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User', required: true },
    planName: { type: String, required: true },
    suggested: { type: Boolean, default: true },
    exercises: [{ type: String, required: true }],
  },
  { timestamps: true },
);

export const Workout = model('Workout', workoutSchema);
