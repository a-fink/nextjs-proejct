import styled from 'styled-components';

export const Container = styled.div`
    adding: 0 2rem;
`;

export const Main = styled.main`
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        text-align: center;
    };

    a {
        color: #0070f3;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        };
        &:active {
            text-decoration: underline;
        };
        &: focus {
            text-decoration: underline;
        };
    };

    p {
        text-align: center;
        margin: 1.5rem 0;
        line-height: 1.5;
        font-size: 1.5rem;
    }
`;

export const Code = styled.code`
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;

    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
    }
`;


export const Card = styled.div`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    max-width: 800px;

    h2 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
    };

    p {
        text-align: center;
        margin: 1.5rem 0;
        line-height: 1.5;
        font-size: 1.5rem;
    }

    li {
        text-align: left;
        margin: .5rem 0;
        line-height: 1;
    }
`;

export const Logo = styled.div`
    height: 1em;
    margin-left: 0.5rem;
`
