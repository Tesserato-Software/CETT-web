import { display, fontSize, margin, textAlign } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DateTime } from 'ts-luxon';
import { api } from '../../../services/api';
import { Link } from 'react-router-dom'

type users = {
    id:             number;
    full_name:      string;
    password:       string;
    email:          string;
    hierarchy_id:   number;
    school_id:      number;
    first_access:   DateTime;
}

type listProps = {
    id:         number;
    name:       string;
    can_delete: boolean;
    can_update: boolean;
    school_id:  number;
    users:      users[] | [];
}

export const HierarchyList = () => {
    const [list, setList] = useState<listProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        api.get('/hierarchy/list')
            .then((response) => {
                setList(response.data);
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <div>
            {isLoading
                ? <h1>Loading...</h1>
                : <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',

                    }}
                >
                    {list?.map((item) => {
                        return (



                            
                            <>

                            
                                <div style={{
                                    backgroundColor: '#D9D9D9',
                                    border: '1px solid white',
                                    width: '60%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    margin: '1rem auto 1rem auto',
                                    padding: '10px',
                                    borderRadius: '8px'
                                }} key={item.id}>                                    
                                    <span style={{
                                        color: 'black',
                                        width: '25rem'
                                        
                                }}>
                                        {item.name}
                                    </span>

                                    <span style={{
                                        color: 'green',
                                }}>
                                        <span>Usuários: </span>{item.users?.length}
                                    </span>
                                    <div>
                                        <Link style={{
                                            border: "2px solid black",
                                            marginRight: "30px",
                                            padding: '5px',
                                            backgroundColor: '#6f6fe9',
                                            color: 'white' 
                                            
                                        }} className="LinkUpdate" to={`/hierarchy/update/${item.id}`}>
                                            Editar
                                        </Link>

                                        <Link style={{
                                            border: "2px solid black",
                                            marginRight: "30px",
                                            padding: '5px',
                                            backgroundColor: '#f04b4b',
                                            color: 'white'

                                              }} className="LinkUpdate" to={`/hierarchy/delete/${item.id}`}>
                                                Remover
                                        </Link>


                                    </div>

                                </div>
                             
                                
                            </>
                        )
                    })}
                </div>
            }
        </div>
    )
}
