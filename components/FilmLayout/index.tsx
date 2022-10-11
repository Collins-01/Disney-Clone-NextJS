import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import MovieListType from "../../types/MovieList";
import { AddButton, Container, Controls, Description, GroupWatchButton, ImageTitle, PlayButton, SubTitle, TrailerButton } from "./styles";

interface Props {
  movieResults: MovieListType;
}

function FilmLayout({ movieResults }: Props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push({
        pathname: "/login",
      });
    }
    return () => {};
  }, []);

  if (status === "loading") return <p>Loading</p>;
  if (session)
  return (
    <Container
      style={{
        backgroundImage: `url(${movieResults.backgroundImg})`,
        opacity: "0.8",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <ImageTitle>
        <img src={movieResults.titleImage} alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>{movieResults.subtitle}</SubTitle>
      <Description>{movieResults.description}</Description>
    </Container>
  );
}

export default FilmLayout;
