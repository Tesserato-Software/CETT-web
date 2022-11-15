import { CustomDiv } from "./style";
import { Link } from "react-router-dom";
import LogoBranco from "../../assets/logo_branco_transparent.png";
import * as VscIcons from "react-icons/vsc";
import { useState } from "react";
import { ClickAwayListener } from "@mui/material";
import { RightBar } from "../RightBar";
import { titles } from "./titles";

export const NavBar = ({
	title_json,
	have_menu,
}: {
	title_json: string;
	have_menu?: boolean;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ClickAwayListener onClickAway={() => setIsOpen(false)}>
			<CustomDiv>
				<Link to="/">
					<img src={LogoBranco} />
				</Link>

				<h1>{titles[title_json!] ?? title_json}</h1>

				{have_menu && (
					<VscIcons.VscMenu onClick={() => setIsOpen(true)} />
				)}
				<RightBar isOpen={isOpen} onClose={() => setIsOpen(false)} />
			</CustomDiv>
		</ClickAwayListener>
	);
};
