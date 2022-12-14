import { CardType } from './enums'

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

export interface ICategory {
  name: string;
  plants: IPlant[];
}

export interface IMeasurementDisplay {
  value: number;
  units: "m" | "cm";
}
