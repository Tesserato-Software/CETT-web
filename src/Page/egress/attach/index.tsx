import { useState, useEffect, useRef } from "react";
import { AttachArchiveDiv } from "../../../Components/AttachEgress";
import { AttachDiv } from "./styles";
import { api } from "./../../../services/api";
import { useParams } from "react-router-dom";

interface Egresses {
	id: number;
	name: string;
	CGM_id: number;
}
interface Archives {
	id: number;
}

export const AttachArchive = () => {
	const { id } = useParams();

	const archiveId = useRef<HTMLInputElement>(null);
	const [egress, setEgress] = useState<Egresses[]>([]);
	const [archives, setArchives] = useState<Archives[]>([]);

	useEffect(() => {
		api.get(`/egress/dashboard-attach-archive/${id}`).then((response) => {
			setArchives(response.data.archives);
			setEgress(response.data.egresses);
		});
	}, []);

	const onChangeArchive =

	const onSubmit = () => {
		api.post(`/egress/attach-archive/${id}`, { archives }).then(
			(res) => { }
		);

		return alert(`Egresso anexao em arquivo ${id} com sucesso!`);
	};

	console.log(egress);

	return (
		<AttachDiv>
			<div className="container-all">
				<div className="div-container-egress">
					<div className="container">
						<div className="div-head">
							<span>ID</span>
							<span>NOME</span>
							<span className="CGM">CGM</span>
						</div>
						<div className="view-egress">
							<span className="id">
								{egress.map((egress) => {
									return egress.id;
								})}
							</span>
							<span className="name">
								{egress.map((egress) => {
									return egress.name;
								})}
							</span>
							<span className="CGM">
								{egress.map((egress) => {
									return egress.CGM_id;
								})}
							</span>
						</div>
					</div>
				</div>

				<div className="archive">
					<strong>Arquivos</strong>
					<div className="archive-option">
						<span>ID</span>
						<span>Selcionar</span>
					</div>

					{archives.map((archive) => {
						console.log(archive);
						return (
							<AttachArchiveDiv
								id={archive.id}
								key={archive.id}
							/>
						);
					})}
				</div>
			</div>

			<div className="container-button">
				<button onSubmit={onSubmit}>Anexar</button>
			</div>
		</AttachDiv>
	);
};
