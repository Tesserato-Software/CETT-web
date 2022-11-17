import { Filter, Paginator } from "../../models/Paginator";

declare type Sortable = {
	name: string;
	type: "ASC" | "DESC" | "asc" | "desc";
};

declare type Column = {
	name: string;
	identifier: string;
	formatter?: (value: any) => string;
	sortable?: Sortable[];
	filterable?: boolean;
	type: "string" | "number" | "date" | "boolean" | "custom";
};

declare type TableHeader = {
	name: string;
	onClick: () => void;
	backgroundColor?: string;
	color?: string;
	icon?: string;
};

declare type Actions = {
    name: string;
	icon?: JSX.Element;
    onClick: (row: any) => void;
};

declare type TableProps = {
	columns: Column[];
	primaryKeyIdentifier?: string;
	data: any[] | undefined;
	onCheckRow?: (row: TableData) => void;
	onUncheckRow?: (row: TableData) => void;
	header?: TableHeader[];
	paginator?: Paginator;
	setPaginator: (paginator: Paginator) => void;
	filter?: Filter;
	onFilter?: (filter: Filter | undefined) => void;
	onSort?: (sortable: Sortable) => void;
	isLoading?: boolean;
	customGrid?: number[];
	actions?: Actions[];
};
