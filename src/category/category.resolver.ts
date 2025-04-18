import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './category.schema';
import { SubcategoryService } from '../subcategory/subcategory.service';
import { Subcategory } from '../subcategory/subcategory.schema';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly subcategoryService: SubcategoryService,
  ) {}

  @Mutation(() => Category)
  createCategory(@Args('input') input: CreateCategoryInput) {
    return this.categoryService.create(input);
  }

  @Query(() => [Category])
  getAllCategories() {
    return this.categoryService.findAll();
  }

  @Query(() => [Category])
  async getAllCategoriesWithSubcategories() {
    const categories = await this.categoryService.findAll();
    return Promise.all(
      categories.map(async (category: any) => {
        const subcategories = await this.subcategoryService.findByCategoryId(category._id);
        return { ...category.toObject(), subcategories };
      })
    );
  }

  @Mutation(() => Category)
  updateCategory(@Args('input') input: UpdateCategoryInput) {
    return this.categoryService.update(input);
  }

  @Mutation(() => Category)
  removeCategory(@Args('id') id: string) {
    return this.categoryService.remove(id);
  }
}
