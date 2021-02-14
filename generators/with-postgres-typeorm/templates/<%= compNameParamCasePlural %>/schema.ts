import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { <%= compNamePascalCase %> } from './types';
import { ENTITY } from './constants';

@Entity(ENTITY)
class Schema implements <%= compNamePascalCase %> {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  // TODO: add more fields
}

export default Schema;
