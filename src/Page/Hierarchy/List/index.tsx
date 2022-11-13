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
                                <span>{item.name}</span>
                                <span>{item.users?.length}</span>
                            </>
                        )
                    })}
                </div>
            }
        </div>
    )
}
