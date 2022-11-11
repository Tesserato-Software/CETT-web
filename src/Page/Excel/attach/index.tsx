import axios from "axios";
import React from "react";
import { api } from "../../../services/api";
import { InputDiv } from "./styles";

export const InputExcel = () => {
    
    const [file, setFile] = React.useState<FileList | null>(null); 
    
    let formData = new FormData();

    onsubmit = () => {
        // Endpoint para enviar arquivos
        api.post('excel/import', formData.append('file', 'file', 'file?.name'))
          .then(res => {
            console.log(res.data)
        })
          .catch(err => {
            console.error(err) 
        })
    }
    return (
        <InputDiv>
            <div>
                <div className="input-archive">
                    <h2>Anexar arquivo de egresso</h2>
                    <div className="div-input">
                        <input className="input" type="file" accept=".xls,.xlsx"/>
                        <button>Anexar</button>
                    </div>
                </div>
            </div>
        </InputDiv>
    )
}