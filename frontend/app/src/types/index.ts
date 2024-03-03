// ログインパラメーター
export type LoginParams = {
    email: string,
    password: string,
}

// 在庫一覧
export type StockList = {
    name: string,
    genre_id: number,
    deadline: string,
    count: number,
}

//在庫一覧(idこみ)
export type GetStock = {
    id: number,
    name: string,
    genre_id: number,
    deadline: string,
    count: number,
}


export type params = {
    genre_id: number,
    name: string,
    deadline: string
  }

//在庫削除
export type deleteParams = {
    stock_id: number,
    count: number,
}
