import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DateTime } from "ts-luxon";
import { Table } from "../../../Components/Table";
import { Egress } from "../../../models/Egress";
import { Filter } from "../../../models/Paginator";
import { api } from "../../../services/api";
import { ListContainer } from "./style";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const EgressList = () => {
	const [egresses, setEgresses] = useState<Egress[]>(),
		[isLoading, setIsLoading] = useState(true),
		[filters, setFilters] = useState<Filter | undefined>(),
		[pagination, setPagination] = useState<{
			currentPage: number;
			lastPages: number;
		}>({
			currentPage: 1,
			lastPages: 1,
		}),
		[trigger, setTrigger] = useState(0),
		navigate = useNavigate();

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
					column: filters.columnIdentifier === 'cgm_id'
						? 'CGM_id'
						: filters.columnIdentifier,
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
				pagination: {
					page: pagination?.currentPage || 1,
					per_page_limit: 16,
				},
				order: final_order,
			})
				.then((response) => {
					setEgresses(response.data.data);
					setPagination({
						currentPage: response.data.meta.current_page,
						lastPages: response.data.meta.last_page,
					});
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
	}, [filters, trigger]);

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
						identifier: "cgm_id",
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
				actions={[
					{
						name: "Anexar ao arquivo",
						icon: <MdIcons.MdSendAndArchive />,
						onClick: (row: any) => {
							navigate(`/egress/attach/${row.id}`);
						},
					},
					{
						name: "Desanexar do Arquivo",
						icon: <AiIcons.AiFillFolderOpen />,
						onClick: (row: any) => {
							navigate(`/egress/dettach/${row.id}`);
						},
					},
					{
						name: "Editar",
						icon: <MdIcons.MdModeEdit />,
						onClick: (row: any) => {
							navigate(`/egress/edit/${row.id}`);
						},
					},
					{
						name: "Excluir",
						icon: <AiIcons.AiOutlineDelete />,
						onClick: (row: any) => {
							navigate(`/egress/delete/${row.id}`);
						},
					},
				]}
				paginator={{
					current_page: pagination.currentPage,
					last_page: pagination.lastPages,
					changePage: (page: number) => {
						setPagination({
							...pagination,
							currentPage: page,
						});
					},
				}}
				setPaginator={(p) => {
					setPagination({
						...pagination,
						currentPage: p.current_page,
						lastPages: p.last_page,
					});
					setTrigger(trigger + 1);
				}}
				primaryKeyIdentifier="id"
				data={egresses}
				onFilter={setFilters}
			/>
		</ListContainer>
	);
};
