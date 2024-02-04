import { CardType } from './enums'
import { CategoryName } from './types';

export interface IPlant {
  name: string;
  widthInMetres: number;
  heightInMetres?: number;
  rootStock?: string;
  insectAttractor?: boolean;
  nitrogenFixer?: boolean;
  nutrientAccumulator?: boolean;
  biofumigant?: boolean;
  imageUrl?: string;
  categoryId?: string;
}

export interface IPlantWithCategories extends Omit<IPlant, 'categoryId'> {
  categories: CategoryName[]
}

export interface IFilters {
  nitrogenFixer: boolean;
  insectAttractor: boolean;
  nutrientAccumulator: boolean;
  categoryId: string | null;
}

export interface ICard extends ICardMetaData {
  itemId: string;
  position: ICardPosition;
}

export interface ICardMetaData {
  name?: string;
  dimensions: ICardDimensions;
  type: CardType;
  colour?: string;
}

export interface ICardDimensions {
  xInMetres: number;
  yInMetres?: number;
}

export interface IScrollPosition {
  scrollTop: number;
  scrollLeft: number;
}

export interface ICardPosition {
  left: string;
  top: string;
}

export interface ICategoryWithPlants {
  name: string;
  plants: IPlant[];
  id?: string;
}

export interface ICategory {
  name: string;
  id?: string;
}

export interface IMeasurementDisplay {
  value: number;
  units: "m" | "cm";
}
