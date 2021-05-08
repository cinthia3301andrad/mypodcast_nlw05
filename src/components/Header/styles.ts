import styled from 'styled-components';

export const ContainerHeader = styled.header`
    background: var(--white);
    height: 6.5rem;

    display: flex;
    align-items: center;

    padding: 2rem 4rem;

    border-bottom: 1px solid var(--orange-500);

    img {
        height: 100%;
    }

    p {
        margin: 0 0 0 2rem;
        padding: 0.25rem 0 0.25rem 2rem;

        border-left: 1px solid var(--gray-100)
    }

    span {
        margin: 0 0 0 auto;
        text-transform: capitalize;
    }


`;