import styled from 'styled-components';

export const ContainerHome = styled.section`
    padding: 0 4rem;
    height: calc(100vh - 6.5rem);
    overflow-y: scroll;

    h2 {
        margin-top: 3rem;
        margin-bottom: 1.5rem;

    }


`;

export const LatestEpisodes = styled.div`

    ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;

        li {
            background: var(--white);
            border: 1px solid var(--gray-100);
            padding: 1.25rem;
            border-radius: 1.5rem;
            position: relative;

            display: flex;
            align-items: center;

            img {
                width: 6rem;
                height: 6rem;
                border-radius: 1rem;
            }

            .episodeDetails {
                flex: 1;
                margin-left: 1rem;

                a {
                    display: block;
                    color: var(--gray-800);
                    font-family: Nunito, sans-serif;
                    font-weight: 600;
                    text-decoration: none;
                    line-height: 1.4rem;

                    &:hover{
                        text-decoration: underline;
                    }
                }

                p {
                    font-size: 0.875rem;
                    margin-top: 0.5rem;
                    max-width: 70%;

                    /* white-space: nowrap; */
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                span {
                    display: inline-block;
                    margin-top: 0.5rem;
                    font-size: 0.875rem;

                    &:last-child {
                        margin-left: 0.5rem;
                        padding-left: 0.5rem;
                        position: relative;

                        &::before {
                            content: " ";
                            width: 4px;
                            height: 4px;
                            border-radius: 2px;
                            background: #DDD;
                            position: absolute;
                            left: 0;
                            top: 50%;
                            transform: translate(-50%, -50%)
                        }

                    }
                }

                
            }

            button {
                    position: absolute;
                    right: 2rem;
                    bottom: 2rem;

                    width: 2.5rem;
                    height: 2.5rem;
                    background: var(--white);
                    border: 1px solid var(--gray-100);
                    border-radius: 0.675rem;
                    font-size: 0;
                    transition: filter 0.3s;

                    img {
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                &:hover {
                    filter: brightness(0.95);

                }

                }
        }
    }


`;
export const AllEpisodes = styled.div`
    padding-bottom: 2rem;

    table {
        width: 100%;

        th, td {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid var(--gray-100);

        }

        th {
            color: var(--gray-800);
            text-transform: uppercase;
            font: 500 0.9rem Nunito, sans-serif;
            text-align: left;
        }

        td {
            font-size: 0.875rem;

            img {
                width: 2.5rem;
                height: 2.5rem;

                border-radius: 0.5rem;
            }

            a {
                color: var(--gray-800);
                font-family: Nunito, sans-serif;
                font-weight:600;
                text-decoration: none;
                line-height: 1.4rem;
                font-size: 0.9rem;

                &:hover {
                    text-decoration: underline;
                }
            }

            button {
                    width: 2rem;
                    height: 2rem;
                    background: var(--white);
                    border: 1px solid var(--gray-100);
                    border-radius: 0.5rem;
                    font-size: 0;
                    transition: filter 0.3s;

                    img {
                        width: 1.25rem;
                        height: 1.25rem;
                    }
                &:hover {
                    filter: brightness(0.95);

                }
                

            }
        }
    }

`;