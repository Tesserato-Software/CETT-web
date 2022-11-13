import { CustomDiv } from "./style";
import LogoBranco from "../../assets/logo_branco_transparent.png";
import * as VscIcons from "react-icons/vsc";
import { useState } from "react";
import { ClickAwayListener } from "@mui/material";
import { RightBar } from "../RightBar";

export const NavBar = ({
	title,
	have_menu,
}: {
	title?: string | null;
	have_menu?: boolean;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ClickAwayListener onClickAway={() => setIsOpen(false)}>
			<CustomDiv>
				<img src={LogoBranco} />
				<h1>{title ?? ""}</h1>
				{have_menu && (
					<VscIcons.VscMenu onClick={() => setIsOpen(true)} />
				)}
                <RightBar
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                />
			</CustomDiv>
		</ClickAwayListener>
	);
};
