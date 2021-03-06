export const db = [
  {
    name: "Bryan",
    email: "bryan@gmail.com",
    id: "101010",
    status: "pending", // aun no ha confirmado el email
  },
  {
    name: "Jose",
    id: "202020",
    email: "jose@gmail.com",
    status: "blocked", // ya solicito una cita para esta semana
  },
  {
    name: "Maria",
    email: "maria@gmail.com",
    id: "1122",
    satus: "unblocked", // cumple  con todos los requisitos para solicitar una cita
  },
];


export const authEmail = (email) => {
  return new Promise((resolve, reject) => {
    const checkEmail = db.find(
      (element) => element.email === email
    );
    setTimeout(() => {
      if (typeof checkEmail === 'undefined' ) {
        resolve(true)
      } else {
        reject('supplied credentials do not match any user')
      }
    }, 2000)
  })
}
