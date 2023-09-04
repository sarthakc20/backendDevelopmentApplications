import mongoose, { Schema, Document } from 'mongoose';

export interface ITodo extends Document {
  todo: string;
}

const todoSchema: Schema = new Schema({
  todo: {
    type: String,
    required: true,
  },
});

export default mongoose.model<ITodo>('Todo', todoSchema);
