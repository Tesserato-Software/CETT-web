import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "./../../../services/api";
import { toast } from "react-toastify";
import { DetachEgressDiv } from "./style";

interface Archives {
    id: number;
}
interface Egresses {
    id: number;
    arq_id: number;
    name: string;
    archive_id: number;
}

export const DetachEgress = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [egresses, setEgresses] = useState<Egresses[]>([]);
    const [egressId, setEgressId] = useState<Number[]>([]);

    useEffect(() => {
        api.get(`/archive/dashboard-dattach-egress/${id}`)
            .then((response) => {
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

    console.log(egressId);
    const onSubmit = () => {
        api.post(`/archive/dettach-egress`, {
            egress: egressId,
        });
        toast.success("Egresso desanexado com sucesso!", { theme: "colored" });
        return navigate(`/archive/list`);
    };
    return (
        <DetachEgressDiv>
            <h1>Desanexar Arquivo ao Aluno</h1>
            <div className="container">
                <div className="list-student">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Arquivo</th>
                                <th>Selecionar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {egresses.map((egress) => {
                                return (
                                    <tr>
                                        <td>{egress.id}</td>
                                        <td>{egress.name}</td>
                                        <td>{egress.archive_id}</td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                onClick={() => {
                                                    if (
                                                        egressId?.includes(
                                                            egress.id
                                                        )
                                                    ) {
                                                        setEgressId(
                                                            egressId?.filter(
                                                                (item) =>
                                                                    item !==
                                                                    egress.id
                                                            )
                                                        );
                                                    } else {
                                                        setEgressId(
                                                            egressId?.concat(
                                                                egress.id
                                                            )
                                                        );
                                                    }
                                                }}
                                                defaultChecked={egressId?.includes(
                                                    egress.id
                                                )}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="button">
                <button onClick={onSubmit}>DESANEXAR</button>
                <button onClick={() => navigate(`/archive/list`)}>
                    CANCELAR
                </button>
                <button onClick={() => navigate(`/archive/list`)}>
                    VOLTAR
                </button>
            </div>
        </DetachEgressDiv>
    );
};
