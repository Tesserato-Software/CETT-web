import { useState } from "react";
import { toast } from "react-toastify";
import FileInput from "../../../Components/upload/index";
import { api } from "../../../services/api";
import { InputDiv } from "./styles";
import { template_export } from "./template-export";
import * as AiIcons from "react-icons/ai";

export const InputExcel = () => {
	const [file, setFile] = useState<File | null>(null),
		[errors, setErrors] = useState<{ error: any; row: any }[]>(),
		[loading, setLoading] = useState(false),
		onsubmit = () => {
			if (file) {
				setLoading(true);

				let formData = new FormData();

				formData.append("file", file, file?.name);

				// Endpoint para enviar arquivos
				api.post("egress/import-excel", formData)
					.then((res) => {
						console.log(res.data);
						toast.success("Arquivo enviado com sucesso!", {
							theme: "colored",
						});
					})
					.catch((err) => {
						console.error(err);
						if (err.response.data.errors) {
							toast.error(
								"Erro em alguns egressos. Os que não estiverem listados abaixos, foram cridos",
								{ theme: "colored" }
							);
							setErrors(err.response.data.errors);
						} else {
							toast.error("Erro ao importar excel :/", {
								theme: "colored",
							});
						}
					})
					.finally(() => setLoading(false));
			} else {
				toast.error("Selecione um arquivo!", { theme: "colored" });
			}
		},
		downloadTemplate = async () => {
			let dataEx = await template_export(),
				url = window.URL.createObjectURL(dataEx),
				a = document.createElement("a");

			a.href = url;
			a.download = `Template importar egressos`;
			a.click();
		};

	return (
		<InputDiv>
			<header>
				<div></div>
				<p>
					<strong>ATENÇÃO: </strong>os nomes das colunas devem ser
					seguidos a risca. O sistema está pronto para não receber
					alguma coluna, desde que estejam nos nomes corretos.
				</p>
				<button onClick={downloadTemplate}>
					<AiIcons.AiOutlineCloudDownload /> Baixar Template
				</button>
			</header>
			<div className="upload-input">
				<FileInput
					accept=".xls,.xlsx"
					custom_onChange={(e) =>
						setFile(
							e.target?.files?.length
								? e.target?.files[0] || null
								: null
						)
					}
					onClearInput={() => setFile(null)}
					default_value={
						typeof file === "string" && file !== "N/A"
							? file
							: undefined
					}
				/>
				<footer>
					<aside>
						<button
							className="sec"
							disabled={!file}
							onClick={() => setFile(null)}
						>
							Cancelar
						</button>
					</aside>
					<aside>
						<button disabled={!file} onClick={onsubmit}>
							{loading ? "Carregando..." : "Importar Egressos"}
						</button>
						{loading && (
							<p>Este processo pode demorar alguns instantes</p>
						)}
					</aside>
				</footer>
			</div>
			{errors && (
				<div className="errors">
					<div className="titles">
						<h1>Erros:</h1>
						<span>Os alunos que não estiverem aqui, foram criados, cuidado ao enviar novamente o excel para evitar conflitos de informações</span>
						<span></span>
					</div>
					<ul className="ul-errors">
						{errors.map((err, i) => (
							<li key={i}>
								<p>
									<strong>Erro:</strong>{" "}
									{err.error.constraint
										? String(err.error.constraint)
												.split("_")
												.map(
													(p) =>
														p[0].toUpperCase() +
														p.substring(1)
												)
												.join(" ")
										: JSON.stringify(err.error)}
								</p>
								<p>
									<strong>Linha:</strong>
									<ul className="line">
										{Object.keys(err.row).map((key, i) => (
											<li key={i}>
												{key}: {err.row[key]}
											</li>
										))}
									</ul>
								</p>
							</li>
						))}
					</ul>
				</div>
			)}
		</InputDiv>
	);
};
