declare export type Paginator = {
    current_page: number;
    last_page: number;
    changePage: (current: number) => void;
    items_per_page?: 6 | 8 | 9 | 10 | 15 | 18 | 21 | 25 | 26 | 27 | 32 | 50 | 100;
}

export type Filter = {
    columnIdentifier?: string;
    order?: string;
    type?: string;
    filter?: string;
}
