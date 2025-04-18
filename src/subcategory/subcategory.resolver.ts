import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SubcategoryService } from './subcategory.service';
import { Subcategory } from './subcategory.schema';
import { CreateSubcategoryInput } from './dto/create-subcategory.input';
import { UpdateSubcategoryInput } from './dto/update-subcategory.input';

@Resolver(() => Subcategory)
export class SubcategoryResolver {
  constructor(private readonly subcategoryService: SubcategoryService) {}

  @Mutation(() => Subcategory)
  createSubcategory(@Args('input') input: CreateSubcategoryInput) {
    return this.subcategoryService.create(input);
  }

  @Query(() => [Subcategory])
  getAllSubcategories() {
    return this.subcategoryService.findAll();
  }

  @Mutation(() => Subcategory)
  updateSubcategory(@Args('input') input: UpdateSubcategoryInput) {
    return this.subcategoryService.update(input);
  }

  @Mutation(() => Subcategory)
  removeSubcategory(@Args('id') id: string) {
    return this.subcategoryService.remove(id);
  }
}
