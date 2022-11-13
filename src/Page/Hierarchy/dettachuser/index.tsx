import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../../services/api';
import { AttachContainer, UserSection } from "./style"

type users = {
    id: number;
    full_name: string;
    hierarchy_id: number | null;
    hierarchy: any[];
  };
  
  type hierarchies = {
    id: number;
    name: string;
  };
  
  export const DettachUser = () => {
    const [user, ListUser] = useState<users[]>([]);
    const [hierarchy, ShowHierarchy] = useState<hierarchies[]>([]);
  
    useEffect(() => {
      api
        .get('user/list')
        .then((response) => {
          ListUser(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    useEffect(() => {
      api
        .get('hierarchy/list')
        .then((response) => {
          ShowHierarchy(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
    return (
      <AttachContainer>
        {hierarchy?.map((hitem) => {
          return (
            <>
              <UserSection>
                <h1 className="user">Hierarquia: {hitem.name}</h1>
                <ul>
                {user?.map((uitem, index) => {
                  if (uitem.hierarchy[0]?.id == hitem.id) {
                    return (
                      <li>
                          User: {uitem.full_name}
                          <Link replace={true} to={`hierarchy/update/${uitem.id}`}>Remover</Link>
                      </li>
                    );
                  }
                  })}
                  </ul>
              </UserSection>
            </>
          );
        })}
      </AttachContainer>
    );
  };