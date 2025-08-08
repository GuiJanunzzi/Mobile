import axios from "axios";

//Função para receber os dado (usuarios)
export const fetchUsers = async ()=> {
const response = await axios.get("https://6893f9a2be3700414e11a8e2.mockapi.io/users")//fazendo o get de uma API
    return response.data //retorna os dados {array de users}
}

//Função para enviar um novo usuário
export const createUsers = async (newUser) => {
    const response = await axios.post("https://6893f9a2be3700414e11a8e2.mockapi.io/users",newUser)
    return response.data
}