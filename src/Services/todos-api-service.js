import config from '../config'

const TodosApiService = {
    getTodos() {
        return fetch (`${config.API_ENDPOINT}/todos`, {
            headers: {},            
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res.json()
            )
    },

    postTodo(todo) {
        return fetch (`${config.API_ENDPOINT}/todos`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                title: todo.title,
                category: todo.category,
            })  
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res.json()
            )
    },
}


export default TodosApiService