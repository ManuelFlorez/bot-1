import { Message } from "./Message";

export interface GetUpdates {
  ok: boolean
  result: [
    {
      update_id: number,
      message: Message
    }
  ]
}