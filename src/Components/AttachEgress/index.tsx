import { AttachDiv } from "./style"

interface Archives {
    id: number;
}


export const AttachArchiveDiv = (props: Archives) => {




    return (
        <AttachDiv>
            <div className="data-archive">
                <span>{props.id}</span>
                <input type="checkbox" value={props.id} />
            </div>

        </AttachDiv>
    );
};
