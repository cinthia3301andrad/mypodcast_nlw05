import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { PlayerContext } from "../../contexts/PlayerContext";

import { ContainerEpisode, EmptyPlayer, CurrentEpisode, Footer } from "./styles";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [progress, setProgress] = useState(0);

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    togglePlay,
    setPlayingState,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
    isLooping,
    toggleLoop,
    isShuffling,
    toggleShuffle,
    clearPlayerState,
  } = useContext(PlayerContext);

  const episode = episodeList[currentEpisodeIndex];

  function setupProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener("timeupdate", () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext();
    } else {
      clearPlayerState();
    }
  }

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <ContainerPlayer>
      <header>
        <img src="/playing1.svg" alt="tocando agora" />
        <strong>Tocando agora </strong>
      </header>

      {episode ? (
        <CurrentEpisode>
          <Image
            width={500}
            height={500}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </CurrentEpisode>
      ) : (
        <EmptyPlayer>
          <strong>Selecione um podcast para ouvir</strong>
        </EmptyPlayer>
      )}

      <Footer empty={!episode ? true : false}>
        <div className="progress">
          <span>{convertDurationToTimeString(progress)}</span>
          <div className="slider">
            {episode ? (
              <Slider
                onChange={handleSeek}
                max={episode.duration}
                value={progress}
                trackStyle={{
                  backgroundColor: "#rgba(255,193,69,0.84)",
                }}
                railStyle={{
                  backgroundColor: "#9f75ff",
                }}
                handleStyle={{
                  borderColor: "#rgba(255,193,69,0.84)",
                  borderWidth: 4,
                }}
              />
            ) : (
              <div className="emptySlider" />
            )}
          </div>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </div>
        {episode && (
          <>
            <audio
              onEnded={handleEpisodeEnded}
              ref={audioRef}
              src={episode.url}
              autoPlay
              loop={isLooping}
              onPlay={() => setPlayingState(true)}
              onPause={() => setPlayingState(false)}
              onLoadedMetadata={setupProgressListener}
            />
          </>
        )}

        <div className="buttons">
          <button
            type="button"
            disabled={!episode || episodeList.length === 1}
            onClick={toggleShuffle}
            className={isShuffling ? "isActiveRepete" : ""}
          >
            <img src="/shuffle.svg" alt="embaralhar" />
          </button>
          <button type="button" disabled={!episode || !hasPrevious}>
            <img
              src="/play-previous.svg"
              alt="Tocar anterior"
              onClick={playPrevious}
            />
          </button>
          <button
            type="button"
            className="playButton"
            onClick={togglePlay}
            disabled={!episode}
          >
            {isPlaying ? (
              <img src="/pause.svg" alt="Pause" />
            ) : (
              <img src="/play.svg" alt="Tocar" />
            )}
          </button>
          <button type="button" disabled={!episode || !hasNext}>
            <img src="/play-next.svg" alt="Tocar próxima" onClick={playNext} />
          </button>
          <button
            className={isLooping ? "isActiveRepete" : ""}
            type="button"
            disabled={!episode}
            onClick={toggleLoop}
          >
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </Footer>
    </ContainerPlayer>
  );
}
