
import styled from "styled-components";

export const ContainerPlayer = styled.section`
  padding: 3rem 4rem;
  width: 26.5rem;
  height: auto;
  background: var(--purple-500);
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  header {
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      height: 3rem;
    }
  }
  strong {
    font-family: Nunito, sans-serif;
    font-weight: 600;
  }
`;

export const EmptyPlayer = styled.div`
  width: 100%;
  height: 20rem;
  border: 1.5px dashed var(--purble-300);
  border-radius: 1.5rem;
  background: linear-gradient(
    143.8deg,
    rgba(145, 100, 250, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  padding: 4rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CurrentEpisode = styled.div`
  text-align: center;
  img {
    border-radius: 1.5rem;
  }
  strong {
    display: block;
    margin-top: 2rem;
    font: 600 1.25rem Nunito, sans-serif;
    line-height: 1.75rem;
  }
  span {
    display: block;
    margin-top: 1rem;
    opacity: 0.6;
    line-height: 1.5rem;
  }
`;

export const Footer = styled.footer<{ empty: boolean }>`
  align-self: stretch;
  opacity: ${(props) => (props.empty ? 0.5 : null)};
  .isActiveRepete {
    filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
    &:hover {
      filter: brightness(0.6) invert(0.35) sepia(1) saturate(3)
        hue-rotate(100deg);
    }
  }
  .progress {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    span {
      display: inline-block;
      width: 4rem;
      text-align: center;
    }
    .slider {
      flex: 1;
      .emptySlider {
        width: 100%;
        height: 4px;
        background: var(--purple-300);
        border-radius: 2px;
      }
    }
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2.5rem auto auto auto;
    gap: 1.5rem;
    button {
      background: transparent;
      border: 0;
      font-size: 0;
      &:disabled {
        cursor: default;
        opacity: 0.5;
      }
      &.playButton {
        width: 4rem;
        height: 4rem;
        border-radius: 1rem;
        background: var(--purple-400);
        transition: filter 0.2s;
        &:hover {
          filter: brightness(0.95);
        }
      }
    }
  }
`;