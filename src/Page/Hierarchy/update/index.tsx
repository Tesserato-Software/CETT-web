import React from 'react'
import {UpdateHierarchyContainer} from "./style"

export const UpdateHierarchy = () => {
  return (
    <UpdateHierarchyContainer>
            <h1>Atualizar cargo</h1>
            <section>
                <div id="nomeInput">
                    <input type="text" placeholder='Nome' id="UInput"/>
                </div>
                <div id="checkBox">
                    <div id="checks"> <input type="checkbox" id="inPut"/> <span>Pode editar</span> </div>
                    <div id="checks"> <input type="checkbox" id="inPut"/> <span>Pode Criar</span> </div>
                </div>  
            </section>
            <button>Atualizar</button>
    </UpdateHierarchyContainer>
  )
}
