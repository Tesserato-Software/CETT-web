import React, { useState } from "react";
import { AttachArchiveDiv } from "../../../Components/AttachEgress";
import { AttachDiv } from "./styles";
import { api } from './../../../services/api';

export const AttachArchive = () => {

	api.get('egress/dashboard-attach-archive/{id}')

	return (
		<AttachDiv>
			<div className="div-container-egress">
				<div className="container">
					<div className="div-head">
						<span>ID</span>
						<span>NOME</span>
						<span className="CGM">CGM</span>
					</div>
					<div className="view-egress">
						<span className="id">4</span>
						<span className="name">Eduardo Henrique Lisboa alves </span>
						<span className="CGM">123445657</span>
					</div>
				</div>
			</div>

			<div className="archive">
				<strong>Arquivos</strong>
				<div className="archive-option">
					<span>ID</span>
					<span>Selcionar</span>
				</div>
				<AttachArchiveDiv />
			</div>
		</AttachDiv>
	);
};
