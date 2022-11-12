export interface Item {
    title: string,
    description: string,
    price: number,
    preference: number,
    link: string,
    image: string
}

export type Items = Item[]