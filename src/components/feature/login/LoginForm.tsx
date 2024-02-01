"use client";
import FormComponent from "@/components/common/FormComponent";
import { Avatar, User } from "@/utils/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import DefaultButton from "../../common/DefaultButton";
import TextInput from "../../common/TextInput";
import AvatarPicker from "./AvatarPicker";

const loginFormSchema = yup
  .object({
    name: yup.string().required("This field is required"),
    age: yup
      .number()
      .required("This field is required")
      .typeError("This field must be a number")
      .min(0, "Minimum age is 0"),
    avatar: yup.string<Avatar>().required("You must select an avatar"),
  })
  .required();

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(loginFormSchema),
    reValidateMode: "onSubmit",
    shouldUnregister: false,
  });

  const handleAvatarChange = (avatar: Avatar) => {
    setValue("avatar", avatar);
  };

  const onSubmit = ({ name, age, avatar }: User) => {
    router.push(`/chat?name=${name}&age=${age}&avatar=${avatar}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6 mb-8">
        <FormComponent
          label="Name"
          component={
            <TextInput placeholder={"Type your name"} {...register("name")} />
          }
          error={errors.name?.message}
        />
        <FormComponent
          label="Age"
          component={
            <TextInput placeholder={"Type your age"} {...register("age")} />
          }
          error={errors.age?.message}
        />

        <AvatarPicker
          onChange={handleAvatarChange}
          selected={watch("avatar")}
          error={errors.avatar?.message}
        />
      </div>
      <DefaultButton title="Join Chat" type="submit" />
    </form>
  );
};

export default LoginForm;
