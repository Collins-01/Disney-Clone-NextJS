import React from "react";
import CategoryContent from "./CategoryContent";
import { VideoData } from "./Data";
import { Container, Wrapper } from "./styles";

function Categories() {
  return (
    <Container>
      {VideoData.map((item) => (
        <Wrapper key={`${item.id} ${item.name}`}>
          <CategoryContent
            name={item.name}
            defaultImage={item.imageUrl}
            video={item.video}
            key={item.id}
          />
        </Wrapper>
      ))}
    </Container>
  );
}

export default Categories;
