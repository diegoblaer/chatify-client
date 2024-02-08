import Typography from "@/components/common/Typography";
import LoginForm from "@/components/feature/login/LoginForm";

export default function Home() {
  return (
    <div className="bg-white rounded p-12 w-full max-w-[700px] shadow-md">
      <Typography variant="h3" className="text-center">
        Welcome to{" "}
        <Typography variant="h3" as="span" className="text-light-blue">
          Chatify
        </Typography>
      </Typography>
      <LoginForm />
    </div>
  );
}
