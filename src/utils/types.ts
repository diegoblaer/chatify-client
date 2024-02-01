import { Socket } from "socket.io-client";

export interface User {
  name: string;
  age: number;
  avatar: Avatar;
  id?: Socket["id"];
}

export interface Message {
  text: string;
  user: User;
  timestamp?: number;
  fromMe?: boolean;
}

export interface ConnectionStatusChange {
  user: User;
  type: "connection" | "disconnection";
}

export interface ChatEvent {
  event: Message | ConnectionStatusChange;
  type: "message" | "connectionStatusChange";
}

export type Avatar =
  | "astronaut"
  | "chef"
  | "employee"
  | "farmer"
  | "sailor"
  | "stewardess"
  | "waiter";

export type AvatarSize = "xsmall" | "small" | "big";
