import React from "react";
import NewPost from "../NewPost/NewPost";
import NewCourse from "../NewCourse/NewCourse";
import "../../assets/styles/_Noticias.scss";

const Noticias = () => {
  return (
    <div className="noticiasHome">
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
    </div>
  );
};

export default Noticias;
