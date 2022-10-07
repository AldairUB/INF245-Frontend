import HttpClient from "../http-common";

export const listarEspecialidades = () => {
  return new Promise((resolve, reject) => {
    HttpClient.get("especialidad")
      .then((resultado) => {
        resolve(resultado);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};

export const agregarEspecialidades = (especialidad) => {
  return new Promise((resolve, reject) => {
    HttpClient.post("especialidad", especialidad)
      .then((resultado) => {
        resolve(resultado);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};
