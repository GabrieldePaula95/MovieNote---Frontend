import { Container } from "./styles";

export function Tags({ title, ...rest }){
    return(
        <Container
            type="button"
            {...rest}
        >
            {title}
        </Container>
    );
}