import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { InputDiv } from "./styles";

export const InputExcel = () => {

    const [file, setFile] = useState<File | null>(null),
        [loading, setLoading] = useState(false),
        onsubmit = () => {
            if (file) {
                setLoading(true);

                let formData = new FormData();

                formData.append('file', file, file?.name)

                // Endpoint para enviar arquivos
                api.post('egress/import-excel', formData)
                    .then(res => {
                        console.log(res.data)
                        toast.success('Arquivo enviado com sucesso!', {theme: 'colored'})
                    })
                    .catch(err => {
                        console.error(err)
                        toast.error('Erro ao importar excel :/', {theme: 'colored'})
                    })
                    .finally(() => setLoading(false))
            } else {
                toast.error('Selecione um arquivo!', {theme: 'colored'})
            }
        };

    return (
        <InputDiv>
            <div>
                <div className="input-archive">
                    <h2>Anexar arquivo de egresso</h2>
                    <div className="div-input">
                        <input
                            className="input"
                            type="file"
                            accept=".xls,.xlsx"
                            onChange={(e) => 
                                setFile(
                                    e.target?.files?.length
                                        ? (e.target?.files[0] || null)
                                        : null
                                )
                            }
                        />
                    </div>
                    <button onClick={onsubmit}>{loading ? 'Carregando...' : 'Importar Egressos'}</button>
                </div>
            </div>
        </InputDiv>
    )
}