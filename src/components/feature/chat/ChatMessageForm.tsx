"use client";

import DefaultButton from "@/components/common/DefaultButton";
import TextInput from "@/components/common/TextInput";
import { Message } from "@/utils/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const chatMessageFormSchema = yup
  .object({
    text: yup.string().required(),
  })
  .required();

type MessageText = Pick<Message, "text">;

interface ChatMessageFormProps {
  onMessageSubmit: (text: Message["text"]) => void;
}

const ChatMessageForm = ({ onMessageSubmit }: ChatMessageFormProps) => {
  const { register, handleSubmit, reset } = useForm<MessageText>({
    resolver: yupResolver(chatMessageFormSchema),
    reValidateMode: "onSubmit",
    shouldUnregister: false,
  });

  const onSubmit = ({ text }: MessageText) => {
    onMessageSubmit(text);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-[80px] w-full border-t border-t-light-gray flex items-center">
        <TextInput
          className="h-full border-none"
          placeholder="Type something..."
          autoComplete="off"
          {...register("text")}
        />
        <DefaultButton title="Send" type="submit" className="w-auto mx-2" />
      </div>
    </form>
  );
};

export default ChatMessageForm;
