import HttpClient from "../http-common";

export const listarUsuarios = () => {
  return new Promise((resolve, reject) => {
    HttpClient.get("usuario")
      .then((resultado) => {
        resolve(resultado);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};