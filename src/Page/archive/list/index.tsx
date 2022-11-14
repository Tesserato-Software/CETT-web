import React, { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import { ListArchiveContainer } from './style'

export const ListArchive = () => {
  const [archiveData, setArchiveData] = useState()
  useEffect(() => {
  api.get('archive/list')
  .then((response)=> {
    setArchiveData(response.data) 
      console.log(response.data)
  })
  },[])
  return (
    <ListArchiveContainer>
        <div className="conteudo">
          <div>
            <div>
              <h2>Caixa [id]</h2>  <span>[id menor] - [id maior</span>
            </div>

            <div>
              <h2>Caixa [id]</h2>  <span>[id menor] - [id maior</span>
            </div>

            <div>
              <h2>Caixa [id]</h2>  <span>[id menor] - [id maior</span>
            </div>
           </div> 
        </div>
        
    </ListArchiveContainer>
  )
}
