import HttpClient from "../http-common";

export const listarTareas = () => {
  return new Promise((resolve, reject) => {
    HttpClient.get("tareas")
      .then((resultado) => {
        resolve(resultado);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};

export const agregarTareas = (tarea) => {
  return new Promise((resolve, reject) => {
    HttpClient.post("tareas", tarea)
      .then((resultado) => {
        resolve(resultado);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};