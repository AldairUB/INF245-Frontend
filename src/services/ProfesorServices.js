import HttpClient from "../http-common";

export const listarProfesores = () => {
  return new Promise((resolve, reject) => {
    HttpClient.get("profesor")
      .then((resultado) => {
        resolve(resultado);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};
