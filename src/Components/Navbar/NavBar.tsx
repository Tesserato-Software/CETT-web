import {CustomDiv} from './style';
import LogoBranco from '../../assets/logo_branco_transparent.png'
import * as VscIcons from 'react-icons/vsc'

export const NavBar = ({
    title,
    have_menu
}: {
    title?: string | null;
    have_menu?: boolean; 
}) => {
    return (
        <CustomDiv>
            <img src={LogoBranco}/>
            <h1>{title ?? ''}</h1>
            {have_menu && (
                <VscIcons.VscMenu/>
            )}
        </CustomDiv>
    )
}
