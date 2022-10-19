import HttpClient from "../http-common";

export const listarAlumnos = () => {
  return new Promise((resolve, reject) => {
    HttpClient.get("alumno")
      .then((resultado) => {
        resolve(resultado);
      })
      .catch((error) => {
        resolve(error);
      });
  });
}

export const agregarAlumno = (alumno) => {
  return new Promise((resolve, reject) => {
    HttpClient.post("alumno", alumno)
      .then((resultado) => {
        resolve(resultado);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};
