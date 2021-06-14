import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgPost from "../../assets/static/post.png";
//import Like from './svg/Like';
import Comentarios from "../svg/Comentarios";
import Comentar from "../svg/Comentar";
import autorPost from "../../assets/static/perfil.jpg";

class NewPost extends Component {
  render() {
    const { autor } = this.props;
    return (
      <Link to="/" className="new">
        <div className="post">
          <img src={imgPost} alt="" />
          <div className="description">
            <p>
              Título del post cuando es más o menos largo pero bastante largo,
              aun más
            </p>
            <div className="autor">
              <img src={autorPost} alt="" />
              <p>{autor}</p>
            </div>
          </div>
        </div>
        <div className="details">
          <div className="interaccion">
            <div className="like">
              <Comentarios />
              <span>64</span>
            </div>
            <div className="comentariosPost">
              <Comentarios />
              <span>25</span>
            </div>
            <div className="comentar">
              <Comentar />
              <span>Comentar</span>
            </div>
          </div>
          <p className="time">hace un día</p>
        </div>
      </Link>
    );
  }
}

export default NewPost;
