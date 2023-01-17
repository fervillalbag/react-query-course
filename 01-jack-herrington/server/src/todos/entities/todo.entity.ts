import { Document } from 'mongoose';
import { Schema, Prop } from '@nestjs/mongoose';
import { SchemaFactory } from '@nestjs/mongoose/dist';

@Schema()
export class Todo extends Document {
  @Prop({ type: String })
  title: string;

  @Prop({ type: Boolean })
  done: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
