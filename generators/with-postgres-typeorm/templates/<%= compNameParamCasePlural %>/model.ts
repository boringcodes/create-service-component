import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import pluralize from 'pluralize';

import { <%= compNamePascalCase %> } from './types';
import { ENTITY } from './constants';

@Entity(pluralize(ENTITY))
class Model implements <%= compNamePascalCase %> {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  // TODO: add more fields
}

export default Model;
