// category.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Subcategory } from '../subcategory/subcategory.schema';

export type CategoryDocument = Category & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Category {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true, unique: true })
  name: string;

  // 👇 Add this field
  @Field(() => [Subcategory], { nullable: true })
  subcategories?: Subcategory[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
