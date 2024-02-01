interface Config {
  socketServerUrl: string;
}

const config: Config = {
  socketServerUrl: process.env.SOCKET_SERVER_URL ?? "",
};

export default config;
