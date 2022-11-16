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
                .then((response) => {
                    console.log(response.data);
                    toast.success("Caixa de arquivos criada com sucesso!",
                    { theme: "colored" }
                    );
                })
                .catch((err: any) => {
                    console.error(err);
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
                {/* <div className="conteudo">
          <div>
            <div>
              <h2>Caixa [id]</h2>  <span>[id menor] - [id maior</span>
            </div>

            <div>
              <h2>Caixa [id]</h2>  <span>[id menor] - [id maior</span>
            </div>

            <div>
              <h2>Caixa [id]</h2>  <span>[id menor] - [id maior</span>
            </div>
           </div> 
        </div> */}
                <button onClick={onSubmit}>Criar nova caixa</button>
            </div>
        </CreateArchiveContainer>
    );
};
