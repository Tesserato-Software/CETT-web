import React, { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { CreateArchiveContainer } from "./style";
import { useNavigate } from "react-router-dom";

export const CreateArchive = () => {
    const [isLoading, setIsLoading] = useState(false),
        navigate = useNavigate(),
        onSubmit = () => {
            setIsLoading(true);
            api.post("/archive/create")
                .then(() => {
                    toast.success("Caixa de arquivos criada com sucesso!",
                    { theme: "colored" }
                    );
                })
                .catch(() => {
                    toast.error("Erro ao criar caixa de arquivos!",
                    { theme: "colored" }
                    );
                })
                .finally(() => setIsLoading(false));
            navigate("/archive/list");
        };

    return (
        <CreateArchiveContainer>
            <div className="but">
                <button onClick={onSubmit} disabled={isLoading}>Criar nova caixa</button>
            </div>
        </CreateArchiveContainer>
    );
};
