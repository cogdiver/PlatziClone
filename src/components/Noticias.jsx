import React from 'react';
import NewPost from './NewPost';
import NewCourse from './NewCourse';

const Noticias = () => {
  return (
    <>
      <h1>Sección de Noticias y cursos nuevos</h1>
      <NewPost />
      <NewCourse />
    </>
  );
};

export default Noticias;
