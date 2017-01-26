//@flow

export type todo = {
  id: number,
  title: string,
  text: string,
  complete: boolean
};

export type todoCollection = {
  [id: number]: todo
}

export type Action = {
  type: string,
  payload: any
}