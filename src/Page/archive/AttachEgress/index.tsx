import React from "react";
import { useEffect, useState } from "react";
import { EgressDiv } from "./styles";
import { useParams } from "react-router-dom";
import { api } from "./../../../services/api";
import { toast } from "react-toastify";

interface ArchivesId {
	id: number;
	onChangeArchive: any;
}

interface Archives {
	id: number;
}
interface Egresses {
	id: number;
	arq_id: number;
	name: string;
	archive_id: number;
}
export const AttachEgress = () => {
	const { id } = useParams();
	const [archives, setArchives] = useState<Archives>();
	const [egresses, setEgresses] = useState<Egresses[]>([]);
	const [egressId, setEgressId] = useState<Number[]>([]);

	useEffect(() => {
		api.get(`/archive/dashboard-attach-egress/${id}`)
			.then((response) => {
				setArchives(response.data.archives);
				setEgresses(response.data.egresses);
			})
			.catch((err) => {
				toast.error(
					"Erro ao listar, verifique se este arquivo existe.",
					{ theme: "colored" }
				);
				console.error(err);
			});
	}, []);

	useEffect(() => console.log("aaa ->", egressId), [egressId]);

	const onSubmit = () => {
		api.post(`/archive/attach-egress/${archives?.id}`, {
			egress: egressId,
		});
	};

	return (
		<EgressDiv>
			<div className="container">
				<table className="table-archive">
					<thead>
						<tr>
							<th>ID ARQUIVO</th>
						</tr>
					</thead>
					<tbody>
						{archives?.id && (
							<span>
								<strong>Id: </strong>
								{archives?.id}
							</span>
						)}
					</tbody>
				</table>

				<table>
					<thead>
						<tr>
							<th>ID:</th>
							<th>Nome:</th>
							<th>ID ARQUIVO ESCOLA</th>
							<th>SELECIONAR</th>
						</tr>
					</thead>
					<tbody>
						{egresses.map((egress) => {
							return (
								<tr className="tr-egress">
									<td>{egress.id}</td>
									<td>{egress.name}</td>
									<td>{egress.arq_id}</td>
									<td>
										<input
											type="checkbox"
											onClick={() => {
												if (egressId?.includes(egress.id)){
													setEgressId(egressId?.filter((item) => item !== egress.id))
												} else {
													setEgressId(egressId?.concat(egress.id))
												}
											}}
											defaultChecked={egressId?.includes(egress.id)}
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<button onClick={onSubmit}>Anexar</button>
			</div>
		</EgressDiv>
	);
};
