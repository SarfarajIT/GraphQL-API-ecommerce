import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subcategory, SubcategoryDocument } from './subcategory.schema';
import { CreateSubcategoryInput } from './dto/create-subcategory.input';
import { UpdateSubcategoryInput } from './dto/update-subcategory.input';

@Injectable()
export class SubcategoryService {
  constructor(
    @InjectModel(Subcategory.name)
    private subcategoryModel: Model<SubcategoryDocument>,
  ) {}

  create(input: CreateSubcategoryInput) {
    return this.subcategoryModel.create(input);
  }

  findAll() {
    return this.subcategoryModel.find().exec();
  }

  findByCategoryId(categoryId: string) {
    return this.subcategoryModel.find({ categoryId }).exec();
  }

  update(input: UpdateSubcategoryInput) {
    return this.subcategoryModel.findByIdAndUpdate(input.id, input, { new: true });
  }

  remove(id: string) {
    return this.subcategoryModel.findByIdAndDelete(id);
  }
}
