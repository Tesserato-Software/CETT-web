import React from "react";
import { InputDiv } from "./styles";


export const InputArchive = () => {
    return (
        <InputDiv>
            <div>
                <div className="input-archive">
                    <h2>Anexar arquivo de aluno</h2>
                    <div className="div-input">
                        <input className="input" type="file" accept=""/>
                        <button className="submit">Anexar</button>
                    </div>
                </div>
            </div>
        </InputDiv>
    )
}