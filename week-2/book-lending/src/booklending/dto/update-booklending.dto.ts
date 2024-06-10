import { PartialType } from '@nestjs/mapped-types';
import { CreateBooklendingDto } from './create-booklending.dto';

export class UpdateBooklendingDto extends PartialType(CreateBooklendingDto) {}
