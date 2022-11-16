import React from "react";
import { useEffect, useState } from "react";
import { EgressDiv } from "./styles";
import { useParams,useNavigate } from "react-router-dom";
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
	const navigate = useNavigate();
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


	const onSubmit = () => {
		api.post(`/archive/attach-egress/${archives?.id}`, {
			egress: egressId,
		});
		toast.success(`Egresso anexado com sucesso`,
			{ theme: "colored" }
		);
		return  navigate (`/archive/list`);
	};

	return (
		<EgressDiv>
				<div className="one">
						<div className="first-container">
    						<div className="div-first-table">
    								<table className="first-table">
											<thead>
      									<tr>
      											<th>ID ARQUIVO</th>
      									</tr>
											</thead>	
      										<tr>
													{archives?.id && (
														<td>
																{archives?.id}
														</td>
													)}
      										</tr>
    									</table>
  							</div>
								<div className="btn">
									<button onClick={onSubmit}>Anexar</button>
									<button onClick={() => navigate(`/archive/list`)}>CANCELAR</button>
									<button onClick={() => navigate(`/archive/list`)}>VOLTAR</button>
								</div>	
						</div>
						<section className="second-container">
							<table className="second-table">
      						<tr>
									<th>ID:</th>
									<th>Nome:</th>
									<th>ID ARQUIVO ESCOLA</th>
									<th>SELECIONAR</th>
      						</tr>
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
    					</table>	
							</section>													
				</div>										
			
		</EgressDiv>
	);
};
