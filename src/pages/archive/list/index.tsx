import { ClassNames } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import { ListArchiveContainer } from "./style";
import { useNavigate } from "react-router-dom";

interface ListArchive {
    /* A gente ta tipando o que vai receber do back*/ id: number;
}

export const ListArchive = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [archiveData, setArchiveData] = useState<ListArchive[]>([]) /* Aqui para */
  useEffect(() => {
    api.get('archive/list')
      .then((response) => {
        setArchiveData(response.data)
        console.log(response.data)
      });
  }, []);
  return (
    <ListArchiveContainer>
      <div className="conteudo">
        
          {archiveData.map((archive) => (
            
            <div className='btn'><div></div>
              <Link to={`/archive/detach-egress/${archive.id}`} replace={true}>
                <h2>Caixa {archive.id} </h2>
              </Link>
              <button className='delete'><Link className='link-delete' to= {`/archive/delete/${archive.id}`}>DELETAR</Link></button>
              <button><Link to= {`/archive/attach-egress/${archive.id}`}>ANEXAR</Link> </button>
            </div>
          ))}
          
          { }
        </div>
        
      

    </ListArchiveContainer>
  )
}
