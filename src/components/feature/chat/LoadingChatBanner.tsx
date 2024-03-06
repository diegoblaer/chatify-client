import Typography from "@/components/common/Typography";

const LoadingChatBanner = () => {
  return (
    <Typography variant="body" className="mb-8">
      Connecting to the Chatify Server. his action could take up to a minute...
    </Typography>
  );
};

export default LoadingChatBanner;
