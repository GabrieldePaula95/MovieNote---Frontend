import { Container } from "./styles";

export function Button({ title, loading = false, $isBlack, ...rest}){

    return(
        <Container 
            type="button"
            disabled={loading}
            $isBlack={$isBlack}
            className={$isBlack ? 'button-delete' : 'button-add'}
            {...rest}
        >
            {loading ? 'carregando...' : title}
        </Container>
    );
}