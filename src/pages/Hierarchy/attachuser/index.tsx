import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../../services/api';
import { AttachContainer, UserSection } from './style';

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

export const AttachUser = () => {
  const [user, ListUser] = useState<users[]>([]);
  const [hierarchy, ShowHierarchy] = useState<hierarchies[]>([]);

  useEffect(() => {
    api
      .get('user/list')
      .then((response) => {
        ListUser(response.data);
      })
      .catch(() => {
        toast.error(
					"Ops, algo de errado não deu certo ao atualizar a hierarquia.",
					{ theme: "colored" }
				);
      });
  }, []);

  useEffect(() => {
    api
      .get('hierarchy/list')
      .then((response) => {
        ShowHierarchy(response.data);
      })
      .catch(() => {
        toast.error("Erro ao buscar hierarquias!", { theme: "colored" })
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
              {user?.map((uitem) => {
                if (uitem.hierarchy[0]?.id == hitem.id) {
                  return (
                    <li>
                        User: {uitem.full_name}
                        <Link replace={true} to={`/hierarchy/update/${uitem.id}`}>Editar</Link>
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
