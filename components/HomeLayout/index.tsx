import React from "react";
import MovieListType from "../../types/MovieList";
import FilmsRow from "../FilmsRow";
import Categories from "./Categories";
import SliderBanner from "./SliderBanner";
import { Container } from "./styles";

interface Props {
  movieResults: MovieListType[];
}

function HomeLayout({ movieResults }: Props) {
  return (
    <Container>
      <SliderBanner />
      <Categories />
      {/* Rows with Movies */}
      <h4>Recommended for you</h4>
      <FilmsRow movieResults={movieResults} category={"Action"}  />
      <h4>Trending</h4>
      <FilmsRow movieResults={movieResults} category={"Action"}  />
      <h4>New for you</h4>
      <FilmsRow movieResults={movieResults} category={"Action"}  />
      <h4>Originals</h4>
      <FilmsRow movieResults={movieResults} category={"Action"}  addMargin={true}/>
    </Container>
  );
}

export default HomeLayout;
