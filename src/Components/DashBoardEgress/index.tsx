import { Container } from "./style";

interface Egress {
    id: number;
    name: string;
    CGM_id: number;
}

export const DashboarEgress = (props: Egress) => {
    const { id, name, CGM_id } = props;

    return (
        <Container>
            <div className="view-egress">
                <div className="id-egress">{id}</div>
                <div className="name-egress">{name}</div>
                <div className="cgm-egress">{CGM_id}</div>
            </div>
        </Container>
    );
};
