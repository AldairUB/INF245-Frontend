import HttpClient from "../http-common";

export const getLoggedInUserDetails=()=> {
    return new Promise((resolve, reject) => {
      HttpClient.get("usuario/auth/info")
        .then((resultado) => {
          resolve(resultado);
        })
        .catch((error) => {
          resolve(error);
        });
    });
  };