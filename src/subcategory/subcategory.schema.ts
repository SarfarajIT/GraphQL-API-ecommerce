import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';

export type SubcategoryDocument = Subcategory & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Subcategory {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field(() => ID)
  @Prop({ type: Types.ObjectId, ref: 'Category' })
  categoryId: string;
}

export const SubcategorySchema = SchemaFactory.createForClass(Subcategory);
