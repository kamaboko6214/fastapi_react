export type LoginParams = {
    email: string,
    password: string,
}

export type StockList = {
    id: number,
    name: string,
    genre_id: number,
    deadline: string,
    count: number,
    message: string,
    user_id: number,
}