export interface List{
    id?: number,
    list_name: string,
    user: number
}

export interface ListItem{
    id?: number,
    item_name: string,
    description: string,
    done: boolean,
    due_date: Date,
    list: number
}