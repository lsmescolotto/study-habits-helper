import Button from "../../components/button"
import Footer from "../../components/footer"
import Header from "../../components/header"
import { useHistory } from "react-router-dom"
import { Container, RedirectContainer } from "./styles"


const Home = () => {

    const history = useHistory()

    return (
        <Container>
            <Header />

            <RedirectContainer>
                <h3>Seja bem-vindo!</h3>
                <Button onClick={() => history.push('/login')}>Login</Button>
                <Button onClick={() => history.push('/signup')}>Cadastro</Button>
            </RedirectContainer>
            <Footer />
        </Container>
    )
}

export default Home