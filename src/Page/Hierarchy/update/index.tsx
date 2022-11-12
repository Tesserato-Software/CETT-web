import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { api } from '../../../services/api';
import {CreateHierarchyContainer} from "./style"

export const UpdateHierarchy = () => {
    const { id } = useParams();
    const handleSubmit = () => {
        console.log(id)
        api
        .get('user/list')
        .then((response) => {
            update(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return ( 
        <CreateHierarchyContainer>
            <h1>Alterar cargo</h1>
            <section>
                <div id="nomeInput">
                    <input type="text" placeholder='Nome' id="UInput" value='coordenador'/>
                </div>
                <div id="checkBox">
                    <div id="checks"> <input type="checkbox" id="inPut"/> <span>Pode editar</span> </div>
                    <div id="checks"> <input type="checkbox" checked id="inPut"/> <span>Pode Criar</span> </div>
                </div>  
            </section>
            <button onClick={handleSubmit}>Salvar</button>
        </CreateHierarchyContainer>
    )
}
