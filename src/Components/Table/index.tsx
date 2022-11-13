import React, { useState } from "react";
import { Filter } from "../../models/Paginator";
import { TableContainer } from "./style";
import { TableProps } from "./TableProps";

export const Table = ({
	columns,
	data,
	onCheckRow,
	onUncheckRow,
	header,
	paginator,
	setPaginator,
	filter,
	onFilter,
	onSort,
	isLoading,
    customGrid
}: TableProps) => {
	const [prevFilter, setPrevFilter] = useState<Filter | undefined>(filter);

	return (
		<TableContainer customGrid={customGrid} columnsQtd={columns.length}>
			<header className="root-header">
				<aside>
					<input
						type="text"
						placeholder="Search"
						onChange={() =>
							setPrevFilter({
								...prevFilter,
								filter: "teste",
							})
						}
					/>
					<select
						value={
							columns.find(
								(c) =>
									c.identifier ===
									prevFilter?.columnIdentifier
							)?.identifier
						}
						onChange={(e) => {
							let column: string = String(e.target.value);
							setPrevFilter((prevState) => ({
								...prevState,
								columnIdentifier: column,
							}));
						}}
					>
						{columns
							?.filter((c) => c.filterable)
							.map((column, index) => (
								<option key={index} value={column.identifier}>
									{column.name}
								</option>
							))}
					</select>
					{prevFilter?.columnIdentifier &&
						columns.find(
							(c) => c.identifier === prevFilter.columnIdentifier
						)?.sortable?.length && (
							<select
								onChange={(e) => {
									let type: string = String(e.target.value);
									setPrevFilter((prevState) => ({
										...prevState,
										type,
									}));
								}}
							>
								{columns
									.find(
										(c) =>
											c.identifier ===
											prevFilter.columnIdentifier
									)
									?.sortable?.map((sort, index) => {
										return (
											<option
												key={index}
												value={sort.type}
											>
												{sort.name}
											</option>
										);
									})}
							</select>
						)}
				</aside>
				<aside>
					{header?.map((action, index) => (
						<button key={index} onClick={action.onClick}>
							{action.name}
						</button>
					))}
				</aside>
			</header>
			<section className="table-grid">
				<header className="grid-header">
					{columns?.map((column, index) => (
						<span key={index} title={column.name}>
							{column.name}
						</span>
					))}
				</header>
				<div className="grid">
					{data?.map((row, row_index) => (
                        <React.Fragment key={row_index}>
							{columns?.map((column, index) => {
                                let value = row[column.identifier];

                                if(column?.formatter){
                                    value = column?.formatter(value);
                                }

                                return (
                                    <span
                                        key={index}
                                        title={value}
                                    >
                                        {value}
                                    </span>
                                )
							})}
                        </React.Fragment>
					))}
				</div>
			</section>
		</TableContainer>
	);
};
