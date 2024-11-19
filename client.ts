import { DaprClient, DaprServer, HttpMethod, CommunicationProtocolEnum } from '@dapr/dapr';

const daprHost = '127.0.0.1';
const daprPort = '30000'; // should be same as the server's daprPort
const daprAppId = 'test-server'; // should be same as the app-id used in starting the server

async function start() {
  const client = new DaprClient({ daprHost, daprPort/*, communicationProtocol: CommunicationProtocolEnum.GRPC*/});

  const res = await client.invoker.invoke(daprAppId, 'hello-world', HttpMethod.POST , {
    hello: 'world',
  });
  console.log(`[Dapr-JS][Example] ${JSON.stringify(res)}`);
}

start().catch((e) => {
  console.error(e);
  process.exit(1);
});