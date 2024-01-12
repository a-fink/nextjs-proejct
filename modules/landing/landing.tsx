import Head from 'next/head'
import { Card, Container, Grid, Main } from './styles'

const Landing = () => {
    return (
        <Container>
            <Head>
                <meta name="description" content="Relevant TakeHome Test" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Main>
                <h1>
                    Welcome to <a href="https://relevantequityworks.com/">Relevant</a>
                </h1>

                <p>
                    Tasks
                </p>

                <Grid>
                    <Card>
                        <p>Create additional pages that share information</p>
                        <li>
                            Create two additional pages
                        </li>
                        <li>
                            Page one needs to have two fields of text input with a submit button.
                        </li>
                        <li>
                            When a user clicks submit. The text should be displayed on the Page 2.
                        </li>
                    </Card>
                </Grid>
            </Main>
        </Container>
    )
}

export default Landing
