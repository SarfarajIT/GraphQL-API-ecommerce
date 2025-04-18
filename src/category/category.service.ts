import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './category.schema';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  create(input: CreateCategoryInput) {
    return this.categoryModel.create(input);
  }

  findAll() {
    return this.categoryModel.find().exec();
  }

  findOne(id: string) {
    return this.categoryModel.findById(id).exec();
  }

  update(input: UpdateCategoryInput) {
    return this.categoryModel.findByIdAndUpdate(input.id, input, { new: true });
  }

  remove(id: string) {
    return this.categoryModel.findByIdAndDelete(id);
  }
}
