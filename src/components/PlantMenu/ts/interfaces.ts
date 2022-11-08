export interface ICategory {
    name: string,
    plants: IPlant[]
}

export interface IPlant {
    name: string,
    widthInMetres: number,
    id: string
}