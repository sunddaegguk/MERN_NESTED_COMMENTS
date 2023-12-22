devServer: {
  port: 4000,
  liveReload: true,
  host: webpackArgv.nodeEnv === "local" ? "localhost" : "0.0.0.0",
  allowedHosts: "all",
  open: true,
  client: {
    overlay: true,
    webSocketURL:
      webpackArgv.nodeEnv === "local"
        ? { hostname: undefined, pathname: undefined, port: '0' }
        : "wss://0.0.0.0:443/ws",
  },
  compress: true,
},
