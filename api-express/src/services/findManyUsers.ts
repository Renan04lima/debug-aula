import { EventEmitterAsyncResource } from "events"

export const findManyUsers = () => {
    const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
    ]
    return users
}

export const findUserById = (id: number) => {
    const users = findManyUsers()
    return users.find(user => user.id === id)
}