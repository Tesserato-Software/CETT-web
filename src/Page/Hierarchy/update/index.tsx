import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Hierarchy } from '..';
import { api } from '../../../services/api';
import {CreateHierarchyContainer} from "./style"

type hierarchy ={
    id: number;
    name: string;
    can_delete: boolean;
    can_update: boolean;
    can_enable_user: boolean;
}

type User = {
    id: number;
    hierarchy_id: number | null;
    hierarchy: any[];
}

export const UpdateHierarchy = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [hierarchy_id, setHierarchyId] = useState<Number[]>([]);
    const [can_enable_users, setCanEnableUsers] = useState<boolean>();
    const [can_update, setCanUpdate] = useState<boolean>();
    const [can_delete, setCanDelete] = useState<boolean>();

    useEffect(() => {
		api.get(`/hierarchy/show/${id}`)
			.then((response) => {
                setName(response.data.name);
				setCanUpdate(response.data.can_update);
                setCanDelete(response.data.can_delete);
                setCanEnableUsers(response.data.can_enable_users);
			})
			.catch((err) => {
				toast.error(
					"Ops, algo de errado não deu certo ao atualizar a hierarquia.",
					{ theme: "colored" }
				);
				console.error(err);
			});
	}, []);

    useEffect(() => console.log("aaa ->", hierarchy_id), [hierarchy_id]);
    useEffect(() => console.log("bbb ->", name), [name]);
    useEffect(() => console.log("aaa ->", can_update), [can_update]);
    useEffect(() => console.log("aaa ->", can_enable_users), [can_enable_users]);
    useEffect(() => console.log("aaa ->", can_delete), [can_delete]);

    const onSubmit = () => {
		api.put(`/hierarchy/update/${id}`, {
            name: name,
			can_update: can_update,
            can_delete: can_delete,
            can_enable_users: can_enable_users,
		});
	};

    return ( 
        <CreateHierarchyContainer>
            <h1>Alterar cargo</h1>
            <section>
                <div id="nomeInput">
                    <input type="text" placeholder='Nome' id="UInput" value={name} 
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div id="checkBox">
                    <div id="checks"> 
                    <input type="checkbox"
						onClick={() => {               
							if (can_update == true) {
                                setCanUpdate(false);
							} else {
                                setCanUpdate(true);
							}
						}}
						defaultChecked={true}/> 
                        <span>Pode editar</span> </div>

                    <div id="checks"> <input type="checkbox"
						onClick={() => {               
							if (can_update == true) {
                                setCanUpdate(false);
							} else {
                                setCanUpdate(true);
							}
						}}
						defaultChecked={true}/> 
                        <span>Pode deletar</span> </div>
                    <div id="checks"> <input type="checkbox"
						onClick={() => {               
							if (can_update == true) {
                                setCanUpdate(false);
							} else {
                                setCanUpdate(true);
							}
						}}
						defaultChecked={true}/> 
                        <span>Pode habilitar usuário</span> </div>

                </div>  
            </section>
            <button onClick={onSubmit}>Salvar</button>
        </CreateHierarchyContainer>
    )
}
