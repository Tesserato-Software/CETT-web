import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';
import {CreateHierarchyContainer} from "./style"



export const CreateHierarchy = () => {

    const navigate = useNavigate()

    const [hierarchyData, setHierarchyData] = useState<{
        name: string;
        can_update: boolean;
        can_delete: boolean;
        can_enable_users: boolean;
    }>({
        name: '',
        can_update: false,
        can_delete: false,
        can_enable_users: false
    }),
///////////////////////////////////////////////////////////
        [isLoading, setIsLoading] = useState(false),
            onSubmit = () => {
                setIsLoading(true);
                api.post('/hierarchy/create', {...hierarchyData })
                .then(res => {
                        console.log(res.data)
                        setHierarchyData({
                            name: '',
                            can_update: false,
                            can_delete: false,
                            can_enable_users: false
                        })
                        navigate("/hierarchy/list")
                    })
                    .catch(err => {
                        console.error(err)
                    })
                    .finally(() => setIsLoading(false))
            }








    return ( 
        <CreateHierarchyContainer>
            <h1>Criar cargo</h1>
            <section>
                <div id="nomeInput">
                    <input type="text" placeholder='Nome' id="name" onChange={(e) => {
                        setHierarchyData(prevState => ({...prevState, name: e.target.value }))
                    }}/>
                </div>
                <div id="checkBox">


                   <div id="checks"> <input type="checkbox" className="inPut" onChange={(e) => {
                        setHierarchyData(prevState => ({...prevState, can_update: e.target.checked}))
                    }}/> <span>Pode editar</span> </div>
                    
                    <div id="checks"> <input type="checkbox" className="inPut" onChange={(e) => {
                        setHierarchyData(prevState => ({...prevState, can_delete: e.target.checked}))
                    }}/> <span>Pode deletar</span> </div>

                    <div id="checks"> <input type="checkbox" className="inPut" onChange={(e) => {
                        setHierarchyData(prevState => ({...prevState, can_enable_users: e.target.checked}))
                    }}/> <span>Pode habilitar usuários</span> </div>


                </div>  
            </section>
            <button onClick={onSubmit}>Criar</button>
        </CreateHierarchyContainer>
    )
}
