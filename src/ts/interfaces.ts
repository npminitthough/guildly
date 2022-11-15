export interface IPlant {
    name: string;
    widthInMetres: number;
    heightInMetres?: number;
    rootStock?: string
}

export interface IPlantWithItemId extends IPlant {
    itemId: string
}

export interface ICategory {
    name: string;
    plants: IPlant[]
}

export interface IMeasurementDisplay {
    value: number;
    units: 'm' | 'cm'
}
