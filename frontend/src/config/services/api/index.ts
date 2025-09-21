// import axios from "axios"

// export const login = async (data) => {

//     const response = await axios.post('https://calm-plum-jaguar-tutu.cyclic.app/todos', { todoName: "me", isComplete: false, }).then((res) => {
//         return res.data
//     })
//     return response
// }

// export const MapTodo = () => {
//     const data = axios.get('https://calm-plum-jaguar-tutu.cyclic.app/todos').then(res => {
//         return res.data.data

//     })
//     return data
// }

import axios, { AxiosResponse } from "axios";

interface Todo {
    todoName: string;
    isComplete: boolean;
}

interface ApiResponse<T> {
    data: T;
}

export const login = async (data: Todo): Promise<Todo> => {
    const response: AxiosResponse<Todo> = await axios.post('https://calm-plum-jaguar-tutu.cyclic.app/todos', data);
    return response.data;
}

export const mapTodo = async (): Promise<Todo[]> => {
    const response: AxiosResponse<ApiResponse<Todo[]>> = await axios.get('https://calm-plum-jaguar-tutu.cyclic.app/todos');
    return response.data.data;
}
