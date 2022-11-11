import { useState, useEffect } from "react";
import { AttachArchiveDiv } from "../../../Components/AttachEgress";
import { AttachDiv } from "./styles";
import { api } from "./../../../services/api";

interface Egresses {
	id: number;
	name: string;
	CGM_id: number;
}
interface Archives {
	id: number;
}

export const AttachArchive = () => {
	const [egress, setEgress] = useState<Egresses[]>([]);
	const [archives, setArchives] = useState<Archives[]>([]);

	useEffect(() => {
		api.get("/egress/dashboard-attach-archive/70").then((response) => {
			setEgress(response.data);
		});
	}, []);

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
						return <AttachArchiveDiv id={archive.id}
						/>;
					})}
				</div>
			</div>

			<div className="container-button">
				<button>Anexar</button>
			</div>

		</AttachDiv>
	);
};
