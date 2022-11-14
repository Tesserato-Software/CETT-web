import { display, fontSize, margin, textAlign } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DateTime } from 'ts-luxon';
import { api } from '../../../services/api';

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
                                    width: '40%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    margin: '1rem auto 1rem auto',
                                    padding: '10px',
                                    borderRadius: '8px'
                                }}>                                    
                                    <span style={{color: 'black'}}>
                                        {item.name}
                                    </span>

                                    <span style={{color: 'green'}}>
                                        {item.users?.length}
                                    </span>
                                </div>
                             
                                
                            </>
                        )
                    })}
                </div>
            }
        </div>
    )
}
