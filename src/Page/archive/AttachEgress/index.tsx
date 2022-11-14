import React from "react";
import {useEffect,useState} from "react";
import { EgressDiv } from "./styles";
import { useParams } from "react-router-dom";
import { api } from "./../../../services/api";

interface ArchivesId{
	id:number;
	onChangeArchive: any;
}

interface Archives {
	id: number;
}
interface Egresses{
	id: number
	arq_id: number
	name: string
	archive_id: number
}
export const AttachEgress = () => {
	const { id } = useParams();
	const [archives,setArchives] = useState<Archives>();
	const [egresses, setEgresses] = useState<Egresses[]>([]);
	const [egressId, setEgressId] = useState<Number[]>([]);
	
	useEffect(() => {
		api.get(`/archive/dashboard-attach-egress/${id}`).then((response)=>{
			setArchives(response.data.archives);
			setEgresses(response.data.egresses);

		})
		.catch((err) => console.log(err))
	},[]);

	
	const onSubmit = ()=>{
		if (egressId[0] === 0){
			return alert("NÃO FOI POSSÍVEL ANEXAR, SELECIONE UM EGRESSO")
		}
		api.post(`/archive/attach-egress/${archives?.id}`,{
			egress:egressId
		})
	}
	console.log(archives)
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
							{archives?.id
							&& <span>
            	<strong>Id: </strong>
							{archives?.id}</span>}							
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
						{egresses.map((egresses) => {
							return <tr className="tr-egress">
								<td>{egresses.id}</td>
								<td>{egresses.name}</td>
								<td>{egresses.arq_id}</td>
								<td><input type="checkbox"
								onClick={()=> setEgressId(egressId.concat(egresses.id))}
								value={egresses.id}
								/></td>
							</tr>
							})

						}
					</tbody>
				</table>
				<button onClick={onSubmit}>Anexar</button>
				
		</div>
			
						
		</EgressDiv>
	)
}	


