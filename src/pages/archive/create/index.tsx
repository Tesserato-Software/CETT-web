import React, { useState } from 'react'
import { api } from '../../../services/api';
import { CreateArchiveContainer } from './style'

export const CreateArchive = () => {
  const 
    [isLoading, setIsLoading] = useState(false),
    onSubmit = () => {
        setIsLoading(true);
        api.post('/archive/create')
            .then(response => {
                console.log(response.data)
              
            })
            .catch((err: any) => {
                console.error(err)
            })
            .finally(() => setIsLoading(false))
    }


  return (
    <CreateArchiveContainer>
      <div className='but'>
        {/* <div className="conteudo">
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
        </div> */}
        <button onClick={onSubmit}>
           Criar nova caixa
        </button>
      </div>
    </CreateArchiveContainer>
  )
}
