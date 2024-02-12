export type LoginParams = {
    email: string,
    password: string,
}

export type StockList = {
    name: string,
    genre_id: number,
    deadline: string,
    count: number,
}

// id込みのタイプ
export type GetStock = {
    id: number,
    name: string,
    genre_id: number,
    deadline: string,
    count: number,
}
type params = {
    genre_id: number,
    name: string,
    deadline: string
  }
