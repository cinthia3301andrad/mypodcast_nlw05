import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";

import { api } from "../../services/api";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";
import { ContainerEpisode } from "./styles";

type Episode = {
  id: string;
  title: string;
  members: string;
  publishedAt: string;
  thumbnail: string;
  duration: number;
  url: string;
  durationAsString: string;
  description: string;
};
type EpisodeProps = {
  episode: Episode;
};

export default function Episode({ episode }: EpisodeProps) {
  const { play } = useContext(PlayerContext);
  return (
    <ContainerEpisode>
      <Head>
        <title>{episode.title} | PodCastr</title>
      </Head>
      <div className="containerThumbnail">
        <Link href={"/"}>
          <button>
            <img src="/arrow-left.svg" alt="voltar" />
          </button>
        </Link>

        <Image
          width={780}
          height={160}
          src={episode.thumbnail}
          objectFit="cover"
        />

        <button>
          <img
            src="/play.svg"
            alt="Tocar Episodio"
            onClick={() => play(episode)}
          />
        </button>
      </div>

      <header>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>

        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: episode.description }}
        />
      </header>
    </ContainerEpisode>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const { data } = await api.get(`/episodes/${slug}`);

  const episode = {
    id: data.id,
    title: data.title,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), "d MMM yy", {
      locale: ptBR,
    }),
    thumbnail: data.thumbnail,
    duration: Number(data.file.duration),
    description: data.description,
    url: data.file.url,

    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
  };

  return {
    props: {
      episode,
    },
    revalidate: 60 * 60 * 24,
  };
};
