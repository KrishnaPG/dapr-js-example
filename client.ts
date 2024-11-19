import { DaprClient, DaprServer, HttpMethod, CommunicationProtocolEnum } from '@dapr/dapr';

/*
  As a client, we have two choices - the client can have its own dapr side car, which can 
  be achieved by launching the client as part of `dapr ...` command line, in which case the
  `daprPort` has to be unique. Or,
  the client can connect to an existing dapr sidecar instance, which is possible by specifying
  the corresponding host and port, which reuses the existing dapr without launching a new sidecar.
  In this case, the client has to be launched directly, as `bun client.ts`
*/
const daprHost = '127.0.0.1';
const daprPort = '31000'; // client's own dapr instance (or, server's sidecar port, to reuse the sidecar)
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