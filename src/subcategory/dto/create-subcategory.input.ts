import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateSubcategoryInput {
  @Field()
  name: string;

  @Field(() => ID)
  categoryId: string;
}
