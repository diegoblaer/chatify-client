interface Config {
  socketServerUrl: string;
}

const config: Config = {
  socketServerUrl: process.env.NEXT_PUBLIC_SOCKET_SERVER_URL ?? "",
};

export default config;
