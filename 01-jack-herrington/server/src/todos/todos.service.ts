import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
  ) {}

  async create(dto: CreateTodoDto) {
    try {
      const todo = await this.todoModel.create({ ...dto, done: false });
      return todo;
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    return this.todoModel.find();
  }

  findOne(id: string) {
    return this.todoModel.findById(id);
  }

  async update(id: string, dto: UpdateTodoDto) {
    const todo = await this.findOne(id);

    try {
      await todo.updateOne(dto);
      return { ...todo.toJSON(), ...dto };
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: string) {
    try {
      const { deletedCount } = await this.todoModel.deleteOne({ _id: id });

      if (deletedCount === 0)
        throw new NotFoundException(`Todo with ${id} does not exists`);

      return `Todo with id ${id} deleted!`;
    } catch (error) {
      console.log(error);
    }
  }
}
