import { useState, useEffect } from "react";
import { AttachArchiveDiv } from "../../../Components/AttachEgress";
import { Container } from "./styles";
import { api } from "./../../../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { DashboarEgress } from "../../../Components/DashBoardEgress";
import { toast } from 'react-toastify';

interface Egresses {
	id: number;
	name: string;
	CGM_id: number;
}
interface Archives {
	id: number;
}

export const AttachArchive = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [egress, setEgress] = useState<Egresses[]>([]);
	const [archives, setArchives] = useState<Archives[]>([]);
	const [archiveId, setarchiveId] = useState<Number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true);
		api.get(`/egress/dashboard-attach-archive/${id}`)
			.then((response) => {
				setArchives(response.data.archives);
				setEgress(response.data.egresses);
			})
			.catch(() => toast.error("Ocorreu um erro ao buscar arquivo ou egresso!"))
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	const onChangeArchive = (event: any) => {
		setarchiveId(event.target.value);
	};

	const onsubmit = () => {
		if (archiveId === 0) {
			return toast.error("Selecione um arquivo",
				{ theme: "colored" }			
			);
		}

		api.post(`/egress/attach-archives/${archiveId}`, {
			egress: [+(id || 0)],
		})

			.then(() => {
				toast.success(`Egresso anexado ao arquivo ${archiveId} com sucesso!`,
					{ theme: "colored" }
				);
			})
			.catch(() => {
				toast.error(`Erro ao anexar egresso ao arquivo ${archiveId}!`,
					{ theme: "colored" }
				);
			});

		return navigate(`/egress/list`);
	};

	return (
		<Container>
			<div className="div-container-egress">
				<div className="div-head">
					<div className="ID">ID</div>
					<div className="NOME">NOME</div>
					<div className="CGM">CGM</div>
				</div>

				{egress.map((egress) => (
					<DashboarEgress
						key={egress.id}
						id={egress.id}
						name={egress.name}
						CGM_id={egress.CGM_id}
					/>
				))}
			</div>

			<div className="archive">
				<strong>Arquivos</strong>
				<div className="archive-option">
					<span className="span-archive">ID</span>
					<span className="span-archive">Selcionar</span>
				</div>

				{archives.map((archive) => {
					return (
						<AttachArchiveDiv
							onChangeArchive={onChangeArchive}
							id={archive.id}
							key={archive.id}
						/>
					);
				})}
			</div>

			<div className="container-button">
				<button className="anexar" onClick={onsubmit}>ANEXAR</button>
				<button
					className="voltar"
					onClick={() => navigate(`/egress/list`)}
				>CANCELAR
				</button>
			</div>
		</Container>
	);
};
