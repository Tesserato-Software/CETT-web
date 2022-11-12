import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../services/api";
import { DetachArchiveDiv } from "./style";

interface EgressesAndArchive {
    id: number;
    name: string;
    CGM_id: number;
    archive_id: number;
}

export const DetachArchive = () => {
    const { id } = useParams();

    const [egress, setEgress] = useState<EgressesAndArchive[]>([]);
    useEffect(() => {
        api.get(`/egress/dashboard-dettach-archive/${id}`).then((response) => {
            setEgress(response.data.egressesAndArchive);

            console.log(response.data.egressesAndArchive);
        });
    }, []);

    return (
        <DetachArchiveDiv>
            <div className="container">
                <div className="cotainer-egress">
                    <div className="head-grid">
                        <span>ID</span>
                        <span>NOME</span>
                        <span className="CGM">CGM</span>
                        <span>ARQUIVO</span>
                    </div>

                    <div className="data-grid">
                        <span>
                            {egress.map((egress) => {
                                return egress.id;
                            })}
                            {/* {egress.id} */}
                        </span>
                        <span>
                            {egress.map((egress) => {
                                return egress.name;
                            })}
                            {/* {egress.name} */}
                        </span>
                        <span className="CGM2">
                            {egress.map((egress) => {
                                return egress.CGM_id;
                            })}
                            {/* {egress.CGM_id} */}
                        </span>
                        <span>
                            {egress.map((egress) => {
                                return egress.archive_id;
                            })}
                            {/* {egress.archive_id} */}
                        </span>
                    </div>
                </div>
            </div>
            <div className="div-button">
                <button>DESANEXAR</button>
            </div>
        </DetachArchiveDiv>
    );
};
