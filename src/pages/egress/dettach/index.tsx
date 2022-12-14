import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { DetachArchiveDiv } from "./style";
import { DashboarEgress } from "./../../../Components/DashBoardEgress/index";
import { toast } from "react-toastify";

interface EgressesAndArchive {
    id: number;
    name: string;
    CGM_id: number;
    archive_id: number;
}

export const DetachArchive = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [egress, setEgress] = useState<EgressesAndArchive[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        api.get(`/egress/dashboard-dettach-archive/${id}`)
            .then((response) => {
                setEgress(response.data.egressesAndArchive);
            })
            .catch((err) =>
                toast.error(`Egresso não esta vinculado a nenhum arquivo!`, {
                    theme: "colored",
                })
            )
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const onsubmit = () => {
        api.post(`/egress/dettach-archives`, {
            egress: [+(id || 0)],
        })
            .then(() => {
                toast.success(`Egresso desanexado do arquivo com sucesso!`, {
                    theme: "colored",
                });
            })
            .catch(() => {
                toast.error(`Erro ao desanexar o egresso do arquivo!`, {
                    theme: "colored",
                });
            });

        return navigate(`/egress/list`);
    };

    return (
        <DetachArchiveDiv>
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
                <div className="archive-id">
                    <p>
                        {" "}
                        Desanexar Egresso do Arquivo: {egress[0]?.archive_id} ?
                    </p>
                </div>
            </div>

            <div className="div-button">
                <button
                    className="voltar"
                    onClick={() => navigate(`/egress/list`)}
                >
                    CANCELAR
                </button>

                <button className="desanexar" onClick={onsubmit}>
                    DESANEXAR
                </button>
            </div>
        </DetachArchiveDiv>
    );
};
