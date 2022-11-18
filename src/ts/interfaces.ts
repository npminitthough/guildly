export interface IPlant {
  name: string;
  widthInMetres: number;
  heightInMetres?: number;
  rootStock?: string;
}

export interface IPlantPosition {
  left: string;
  top: string;
}

export interface IScrollPosition {
  scrollTop: number;
  scrollLeft: number;
}

export interface IPlantWithItemId extends IPlant {
  itemId: string;
  position: IPlantPosition;
}

export interface ICategory {
  name: string;
  plants: IPlant[];
}

export interface IMeasurementDisplay {
  value: number;
  units: "m" | "cm";
}
