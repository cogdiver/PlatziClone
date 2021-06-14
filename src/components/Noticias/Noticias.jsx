import React from "react";
import NewPost from "../NewPost/NewPost";
import NewCourse from "../NewCourse/NewCourse";
import StyledNoticias from "./style";

const Noticias = () => {
  return (
    <StyledNoticias>
      <NewPost autor="Autor del Post" />
      <NewPost autor="Autor del Post" />
      <NewCourse
        profesor="Nombre del profesor"
        curso="Nombre del curso pero un nombre de curso más largo"
        color="verde"
      />
      <NewCourse
        profesor="Nombre del profesor"
        curso="Nombre del curso"
        color="verde"
      />
      <NewPost autor="Autor del Post" />
      <NewPost autor="Autor del Post" />
      <NewPost autor="Autor del Post" />
      <NewCourse
        profesor="Nombre del profesor"
        curso="Nombre del curso pero un nombre de curso más largo"
        color="verde"
      />
    </StyledNoticias>
  );
};

export default Noticias;
