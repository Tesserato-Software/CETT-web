import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { api } from '../../../services/api'
import { ListArchiveContainer } from './style'

interface ListArchive {  /* A gente ta tipando o que vai receber do back*/
  id: number;
}

export const ListArchive = () => {
  const [archiveData, setArchiveData] = useState<ListArchive[]>([]) /* Aqui para */
  useEffect(() => {
    api.get('archive/list')
      .then((response) => {
        setArchiveData(response.data)
        console.log(response.data)
      })
  }, [])
  return (
    <ListArchiveContainer>
      <div className="conteudo">
        <div>
          {archiveData.map((archive) => (

            <Link to={`/archive/delete/${archive.id}`} replace={true}>
              <h2>Caixa {archive.id} </h2>
            </Link>

          ))}


          { }
        </div>
      </div>

    </ListArchiveContainer>
  )
}
