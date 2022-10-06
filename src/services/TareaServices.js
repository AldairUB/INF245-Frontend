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