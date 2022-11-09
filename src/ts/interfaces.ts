export interface IPlant {
    name: string,
    widthInMetres: number,
    id: string
}

export interface IPlantWithItemId extends IPlant {
    itemId: string
} 