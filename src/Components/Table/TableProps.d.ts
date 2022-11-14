import { Filter } from '../../models/Paginator';

declare export type Sortable = {
    name: string;
    type: 'ASC' | 'DESC' | 'asc' | 'desc';
}

declare export type Column = {
    name: string;
    identifier: string;
    formatter?: (value: any) => string;
    sortable?: Sortable[];
    filterable?: boolean;
}

declare export type TableHeader = {
    name: string;
    onClick: () => void;
    backgroundColor?: string;
    color?: string;
    icon?: string;
}

declare export type TableProps = {
    columns: Column[];
    data: any[] | undefined;
    onCheckRow?: (row: TableData) => void;
    onUncheckRow?: (row: TableData) => void;
    header?: TableHeader[];
    paginator?: Paginator;
    setPaginator?: (paginator: Paginator) => void;
    filter?: Filter;
    onFilter?: (filter: Filter) => void;
    onSort?: (sortable: Sortable) => void;
    isLoading?: boolean;
    customGrid?: number[];
};