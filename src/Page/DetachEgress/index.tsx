import React from "react";
import { DetachEgressDiv } from "./style";

export const DetachEgress = () => {
    return (
        <DetachEgressDiv>
             <h1>Desanexar Arquivo ao Aluno</h1>
         <div className="container">
         
         <div className="list-archive">
        <table>
            <thead>
              <tr className="cabeca">
                <th>Id Arquivo</th>
                <th></th>
                <th>Selecionar</th>
              </tr>
              
              </thead>
              <tbody>
                <tr className="corpo">
                  <td>1</td>
                  <td> 1-50</td>
                  <td><input type="checkbox"/></td>
                </tr>
               
              </tbody>
         </table>
        </div>
        <div className="lista-aluno">
         <table>
            <thead>
              <tr className="cabeca-aluno">
                <th>Id</th>
                <th>Nome</th>
                <th>Selecionar</th>
              </tr>
            
              </thead>
              <tbody>
                <tr className="corpo">
                  <td>1</td>
                  <td>João Henrique Alves</td>
                  <td><input className="aluno" type="checkbox"/></td>
                </tr>
              
              </tbody>
         </table>
        </div>

      </div>
      <div className="button">
        <button className="btn">
          Desanexar</button>
      </div>
        
        </DetachEgressDiv>
    );


}