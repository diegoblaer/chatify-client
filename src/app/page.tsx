import Typography from "@/components/common/Typography";
import LoginForm from "@/components/feature/login/LoginForm";
import config from "@/utils/config";

export default function Home() {
  console.log(config.socketServerUrl);

  return (
    <div className="bg-white rounded p-12 w-full max-w-[700px] shadow-md">
      <Typography variant="h3" className="text-center">
        Welcome to {config.socketServerUrl}
        <Typography variant="h3" as="span" className="text-light-blue">
          Chatify
        </Typography>
      </Typography>
      <LoginForm />
    </div>
  );
}
