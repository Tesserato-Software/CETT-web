import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { api } from '../../../services/api';
import { AttachContainer, UserSection } from "./style"

type users = {
    id: number;
    full_name: string;
    hierarchy_id: number | null;
}

type hierarchies = {
    id: number;
    name: string;
}
type listProps = {
    id:         number;
    name:       string;
    can_delete: boolean;
    can_update: boolean;
    school_id:  number;
    users:      users[] | [];
}

// if(users['hierarchy_id'] === hierarchies['id']){
//     return this.hierachy.name;
// }
// type user_h = {
//     id: users['id'];
//     full_name: users['full_name'];
//     // users['id']: number;
//     // users['full_name']: string;
//     // users['hierarchy_id']: number | null;
//     // hierarchies['id']: number;
//     // hierarchies['name']: string;
// }

export const AttachUser = () => {
    const [user, ListUser] = useState<users[]>([]);
    const [hierarchy, ShowHierarchy] = useState<hierarchies[]>([]);
    const [list, setList] = useState<listProps[]>([]);
    
    useEffect(() => {
        api.get('user/list')
        .then((response) => {
            ListUser(response.data);
            console.log(response.data)
        })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    useEffect(() => {
        api.get('hierarchy/list')
        .then((response) => {
            ShowHierarchy(response.data);
            console.log(response.data)
        })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return (
        <AttachContainer>
        {user?.map((uItem) => {
            return (  
                <UserSection>
                    <>
                        <span className='user'>{uItem.full_name}</span>
                    </>
            {hierarchy?.map((hItem) => {
                if (uItem.id === hItem.id) {
                    return (
                        <span className='user'>{hItem.name}</span>
                    )
                }
            })}
            <span className='opt'> 
                <button type="submit"> Editar </button>
            </span>
            </UserSection>
            )
            })}
        </AttachContainer>

        // this.user.school_id === this.id && this.hierarchy.id has can_update True
        // add user hierarchy validation => user (hierarchy) can_update
        // 
        // onSubmit = () => {
        //     api.post('/user/user-hierarchy/:id', {...user, hierarchy_id: Number(user.hierarchy_id)})
        //         .then(res => {
        //             console.log(res.data)
        //             AttachHierarchy({
        //                 hierarchy_id: undefined,
        //             })
        //         })
        //         .catch(err => {
        //             console.error(err)
        //         })
        //}
        // onClick={onSubmit}
    )
}