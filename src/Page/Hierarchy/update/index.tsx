import React from 'react'
import {CreateHierarchyContainer} from "./style"

export const UpdateHierarchy = () => {
    return ( 
        <CreateHierarchyContainer>
            <h1>Alterar cargo</h1>
            <section>
                <div id="nomeInput">
                    <input type="text" placeholder='Nome' id="UInput" value='coordenador'/>
                </div>
                <div id="checkBox">
                    <div id="checks"> <input type="checkbox" id="inPut"/> <span>Pode editar</span> </div>
                    <div id="checks"> <input type="checkbox" checked id="inPut"/> <span>Pode Criar</span> </div>
                </div>  
            </section>
            <button>Salvar</button>
        </CreateHierarchyContainer>
    )
}
