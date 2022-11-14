import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { api } from '../../../services/api';
import {CreateHierarchyContainer} from "./style"

export const UpdateHierarchy = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [dadosHI, setDadosHI] = useState({
        name: '',
        can_update: false,
        can_create: false,
        can_enable_users: false

    })

    






    return ( 
        <CreateHierarchyContainer>
            <h1>Alterar cargo</h1>
            <section>
                <div id="nomeInput">
                    <input type="text" placeholder='Nome' id="UInput" value='coordenador'/>
                </div>
                <div id="checkBox">
                    <div id="checks"> <input type="checkbox" id="inPut"/> <span>Pode editar</span> </div>
                    <div id="checks"> <input type="checkbox" id="inPut"/> <span>Pode criar</span> </div>
                    <div id="checks"> <input type="checkbox" id="inPut"/> <span>Pode habilitar usuário</span> </div>

                </div>  
            </section>
            <button onClick={handleSubmit}>Salvar</button>
        </CreateHierarchyContainer>
    )
}
