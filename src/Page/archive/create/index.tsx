import React from 'react'
import { CreateArchiveContainer } from './style'

export const CreateArchive = () => {
  return (
    <CreateArchiveContainer>
      <div className='but'>
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
        
        <input type="submit" value="Criar nova caixa"/>
      </div>
    </CreateArchiveContainer>
  )
}
