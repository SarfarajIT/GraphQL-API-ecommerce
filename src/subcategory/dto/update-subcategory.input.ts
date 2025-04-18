import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateSubcategoryInput } from './create-subcategory.input';

@InputType()
export class UpdateSubcategoryInput extends PartialType(CreateSubcategoryInput) {
  @Field(() => ID)
  id: string;
}
