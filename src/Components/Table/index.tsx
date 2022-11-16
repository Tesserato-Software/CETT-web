import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
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
	primaryKeyIdentifier,
	customGrid,
	actions,
}: TableProps) => {
	const [prevFilter, setPrevFilter] = useState<Filter | undefined>(filter);

	useEffect(() => {
		if (onFilter) onFilter(prevFilter);
	}, [prevFilter]);

	return (
		<TableContainer customGrid={customGrid} columnsQtd={columns.length}>
			<header className="root-header">
				<aside>
					<div>
						<label>Pesquisar</label>
						<input
							type={
								columns.find(
									(column) =>
										prevFilter?.columnIdentifier ===
										column.identifier
								)?.type || "text"
							}
							placeholder="Pesquisar"
							onChange={(e) =>
								setPrevFilter({
									...prevFilter,
									filter: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<label>Coluna</label>
						<select
							onChange={(e) => {
								let column: string = String(e.target.value);
								setPrevFilter((prevState) => ({
									...prevState,
									columnIdentifier: column,
									filter: "",
								}));
							}}
						>
							<option disabled selected>
								Selecione uma coluna
							</option>
							{columns
								?.filter((c) => c.filterable)
								.map((column, index) => (
									<option
										key={index}
										value={column.identifier}
										selected={
											prevFilter?.columnIdentifier ===
											column.identifier
										}
									>
										{column.name}
									</option>
								))}
						</select>
					</div>
					{prevFilter?.columnIdentifier &&
						columns.find(
							(c) => c.identifier === prevFilter.columnIdentifier
						)?.sortable?.length && (
							<div>
								<label>Ordem</label>
								<select
									onChange={(e) => {
										let type: string = String(
											e.target.value
										);
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
							</div>
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
					<aside className="columns">
						{columns?.map((column, index) => (
							<span key={index} title={column.name}>
								{column.name}
							</span>
						))}
					</aside>
					{actions && (
						<aside
							className="actions"
							style={{
								width: `calc(${
									(actions?.length || 0) * 30
								}px + ${actions?.length || 0 * 1}rem)`,
							}}
						>
							<span>Ações</span>
						</aside>
					)}
				</header>
				<div className="grid">
					{!isLoading ? (
						data?.map((row, row_index) => (
							<div className="pre-row">
								<div className="row" key={row_index}>
									{columns?.map((column, index) => {
										let value = row[column.identifier];

										if (column?.formatter) {
											value = column?.formatter(value);
										}

										return (
											<span key={index} title={value}>
												{value}
											</span>
										);
									})}
								</div>
								{actions && (
									<div className="actions">
										{actions?.map((action, index) => (
											<button
												key={index}
												title={action.name}
												onClick={() =>
													action.onClick(row)
												}
											>
												{action.icon}
											</button>
										))}
									</div>
								)}
							</div>
						))
					) : (
						<>
							{Array.from(Array(15)).map((_, index) => (
								<div className="row" key={index}>
									{columns?.map((column, index) => (
										<Skeleton
											key={index}
											variant="text"
											animation="wave"
											style={{
												borderBottom: "none",
												width: "85%",
												height: "70%",
												transform: "scale(1, 1)",
											}}
										/>
									))}
								</div>
							))}
						</>
					)}
				</div>
			</section>
		</TableContainer>
	);
};
