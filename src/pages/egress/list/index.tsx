import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DateTime } from "ts-luxon";
import { Table } from "../../../Components/Table";
import { Egress } from "../../../models/Egress";
import { Filter } from "../../../models/Paginator";
import { api } from "../../../services/api";
import { ListContainer } from "./style";

export const EgressList = () => {
	const [egresses, setEgresses] = useState<Egress[]>(),
		[isLoading, setIsLoading] = useState(true),
		[filters, setFilters] = useState<Filter | undefined>(),
		[pagination, setPagination] = useState();

	useEffect(() => {
		setIsLoading(true);

		let final_filter: {
				value: string | null;
				operator: string;
				column: string;
			}[],
			final_order: { column: string; direction: string };

		if (filters && filters.columnIdentifier && filters.filter) {
			final_filter = [
				{
					value:
						filters.columnIdentifier === "birth_date"
							? DateTime.fromISO(filters.filter).toISODate()
							: filters.filter,
					operator:
						filters.columnIdentifier === "name" ||
						filters.columnIdentifier === "responsible_name"
							? "ilike"
							: "=",
					column: filters.columnIdentifier,
				},
			];
		}

		if (filters && filters.columnIdentifier && filters.type) {
			final_order = {
				column: filters.columnIdentifier,
				direction: filters.type,
			};
		}

		const bouncer = setTimeout(() => {
			api.post("/egress/list", {
				filters: final_filter,
				order: final_order,
			})
				.then((response) => {
					setEgresses(response.data);
				})
				.catch((error) => {
					toast.error("Erro ao listar egressos", {
						theme: "colored",
					});
					console.error(error);
				})
				.finally(() => setIsLoading(false));
		}, 1000);

		return () => clearTimeout(bouncer);
	}, [filters]);

	return (
		<ListContainer>
			<Table
                isLoading={isLoading}
				columns={[
					{
						name: "ID",
						identifier: "arq_id",
						filterable: true,
						sortable: [
							{
								name: "Crescente",
								type: "ASC",
							},
							{
								name: "Decrescente",
								type: "DESC",
							},
						],
						type: "number",
					},
					{
						name: "Nome",
						identifier: "name",
						sortable: [
							{
								name: "Alfabética (A-Z)",
								type: "asc",
							},
							{
								name: "Alfabética (Z-A)",
								type: "desc",
							},
						],
						filterable: true,
						type: "string",
					},
					{
						name: "CGM",
						identifier: "CGM_id",
						sortable: [
							{
								name: "Crescente",
								type: "asc",
							},
							{
								name: "Decrescente",
								type: "desc",
							},
						],
						filterable: true,
						type: "number",
					},
					{
						name: "Data de nascimento",
						identifier: "birth_date",
						sortable: [
							{
								name: "Crescente",
								type: "asc",
							},
							{
								name: "Decrescente",
								type: "desc",
							},
						],
						filterable: true,
						formatter: (value: string) => {
							return new Date(value).toLocaleDateString("pt-BR");
						},
						type: "date",
					},
					{
						name: "Nome do responsável",
						identifier: "responsible_name",
						filterable: true,
						type: "string",
					},
				]}
				data={egresses}
				onFilter={setFilters}
			/>
		</ListContainer>
	);
};