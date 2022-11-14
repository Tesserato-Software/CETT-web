import { AttachDiv, RadioButton } from "./style"

interface Archives {
    id: number;
    onChangeArchive: any;
}


export const AttachArchiveDiv = (propsArchives: Archives) => {
    const { id, onChangeArchive } = propsArchives

    return (
        <AttachDiv>
            <div className="data-archive">
                <span>{id}</span>
                <label className="container" >
                    <RadioButton name="numeor arquivo"  value={id} onChange={onChangeArchive} />
                </label>
            </div>

        </AttachDiv>
    );
};
