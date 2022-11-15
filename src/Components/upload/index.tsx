import {
	createContext,
	forwardRef,
	ForwardRefRenderFunction,
	HTMLProps,
	useEffect,
	useState,
} from "react";
import { formatBytes } from "../../utils/formatters";
import { Box, FileContainer } from "./style";
import * as AiIcons from "react-icons/ai";
import { toast } from "react-toastify";

type FileInputProps = HTMLProps<HTMLInputElement> & {
	description?: string;
	is_optional?: boolean;
	label?: string;
	subtitle?: string;
	values?: any;
	inputName?: string;
	custom_onChange?: (e: any) => void;
	default_value?: string;
	onClearInput?: () => void;
};

const FileInput: ForwardRefRenderFunction<HTMLInputElement, FileInputProps> = (
	{
		description,
		label,
		is_optional,
		inputName,
		default_value,
		value,
		subtitle,
		onBlur,
		custom_onChange,
		onClearInput,
		values,
		...rest
	},
	ref
) => {
	const [fileData, setFileData] = useState<File | null>(null);

	function handleDeleteFile() {
		setFileData(null);
		custom_onChange && custom_onChange(null);
	}

	return (
		<Box>
			<div className="input-container">
				<FileContainer>
					<input
						{...rest}
						ref={ref}
						onBlur={onBlur}
						onChange={(e) => {
							if (
								e?.target?.files![0].type ===
									"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
								e?.target?.files![0].type ===
									"application/vnd.ms-excel"
							) {
								custom_onChange && custom_onChange(e);
								setFileData(e.target.files![0]);
							} else {
								toast.error(
									"Arquivo inválido, por favor, use: XLSX",
									{ theme: "colored" }
								);
							}
						}}
						value={value}
						disabled={!!fileData?.name || !!default_value}
						className="the-input"
						type="file"
						style={{
							display:
								fileData?.name || !!default_value
									? "none"
									: "flex",
						}}
					/>
					{!fileData?.name && !default_value ? (
						<>
							{/*INPUT PADRÃO ANTES DE QUALQUER AÇÃO*/}
							<div className="basic_input">
								<div className="text_box">
									<i className="icon icon-upload"></i>
									<h1 className="title">
										Clique aqui para fazer upload do arquivo
									</h1>
								</div>

								<span>ou arraste</span>
							</div>
						</>
					) : (
						<>
							{/*CARD DO FILE UPLOADED*/}
							<div className="uploaded_card">
								<section>
									<h5 className="file_name">
										{`${
											fileData?.name || default_value
										} - ${
											fileData?.size
												? formatBytes(fileData?.size)
												: ""
										}`}
									</h5>
								</section>

								<button
									onClick={handleDeleteFile}
									className="btn-delete"
								>
									<AiIcons.AiFillDelete />
								</button>
								<button
									onClick={() => {
										if (fileData?.name) {
											let blob = new Blob([fileData], {
												type: fileData.type,
											});
											let url = URL.createObjectURL(blob);
											let a = document.createElement("a");
											a.href = url;
											a.download = fileData.name;
											a.click();
										} else if (default_value) {
											window.open(
												default_value,
												"_blank"
											);
										}
									}}
									className="btn-download"
								>
									<AiIcons.AiOutlineCloudDownload />
								</button>
							</div>
						</>
					)}
				</FileContainer>
			</div>
		</Box>
	);
};

export default forwardRef(FileInput);
