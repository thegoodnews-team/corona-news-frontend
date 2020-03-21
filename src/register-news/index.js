import React from "react";
import Header from "../header/index";
import { useFormReducer } from "../hooks/userFormReducer";
import { SET_ONCHANGE } from "../actions/acation";
import { HttpRequestService } from "../services/httpRequest.service";

const RegisterNews = () => {
  const [formState, dispatch] = useFormReducer();

  const handleChange = e => {
    dispatch({
      type: SET_ONCHANGE,
      name: e.target.name,
      value: e.target.value
    });
  };

  const onSubmitted = e => {
    HttpRequestService.create(formState);
  };

  return (
    <>
      <Header />
      <div className="container" style={{ width: "500px", marginTop: "80px" }}>
        <h2 className="align-self-center" style={{ marginBottom: "30px" }}>
          Cadastre uma noticia boa!
        </h2>
        <form>
          <div className="form-group">
            <label>Titulo da notícia:</label>
            <input
              type="text"
              onChange={handleChange}
              className="form-control"
              name="title"
              placeholder="Titulo da notícia"
            />
          </div>
          <div className="form-group">
            <label>Link da noticia:</label>
            <input
              type="text"
              onChange={handleChange}
              className="form-control"
              name="link"
              placeholder="Link da notícia"
            />
          </div>
          <div className="form-group">
            <label>Link da imagem da notícia:</label>
            <input
              type="text"
              onChange={handleChange}
              className="form-control"
              name="linkPhoto"
              placeholder="Link da imagem da notícia"
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              onClick={onSubmitted}
              fullWidth
              className="btn btn-primary btn-block"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterNews;
