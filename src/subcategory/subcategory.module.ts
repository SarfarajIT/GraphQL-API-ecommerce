import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubcategoryResolver } from './subcategory.resolver';
import { SubcategoryService } from './subcategory.service';
import { Subcategory, SubcategorySchema } from './subcategory.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Subcategory.name, schema: SubcategorySchema }]),
  ],
  providers: [SubcategoryResolver, SubcategoryService],
  exports: [SubcategoryService],
})
export class SubcategoryModule {}
