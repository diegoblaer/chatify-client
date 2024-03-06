import Spinner from "@/components/common/Spinner";
import Typography from "@/components/common/Typography";

const LoadingChatBanner = () => {
  return (
    <div className="bg-white rounded p-12 text-center">
      <Typography variant="h5" className="mb-1">
        Connecting to the Chatify Server
      </Typography>
      <Typography variant="small" as={"div"} className="mb-8">
        This action could take up to a minute...
      </Typography>
      <Spinner />
    </div>
  );
};

export default LoadingChatBanner;
