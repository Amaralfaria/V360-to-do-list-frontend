export interface List{
    list_name: string,
    user: number
}

export interface ListItem{
    item_name: string,
    description: string,
    done: boolean,
    due_date: Date,
    list: number
}