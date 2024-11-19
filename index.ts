import { DaprServer, HttpMethod, CommunicationProtocolEnum } from "@dapr/dapr";

const daprHost = "127.0.0.1"; // Dapr Sidecar Host
const daprPort = "30000"; // Dapr Sidecar Port of this Example Server
const serverHost = "127.0.0.1"; // App Host of this Example Server
const serverPort = "13000"; // App Port of this Example Server

const server = new DaprServer({
  serverHost,
  serverPort,
  //communicationProtocol: CommunicationProtocolEnum.GRPC,
  clientOptions: {
    daprHost,
    daprPort,
  },
});

// initialize subscriptions, ... before server start
  await server.invoker.listen(
    'hello-world',
    async () => {
      console.log('[Dapr-JS][Example] GET /hello-world');
      console.log(`[Dapr-JS][Example] Replying to Client`);
      return { hello: 'world received from GET' };
    },
    { method: HttpMethod.POST  }
  );
// the dapr sidecar relies on these
await server.start();