import { Chat } from "./Chat";
import { From } from "./From";

export interface Message {
  message_id: number
  from: From
  chat: Chat
  date: number
  text: string
}