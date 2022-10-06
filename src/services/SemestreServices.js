import HttpClient from "../http-common";

export const listarSemestres = () => {
  return new Promise((resolve, reject) => {
    HttpClient.get("semestre")
      .then((resultado) => {
        resolve(resultado);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};
