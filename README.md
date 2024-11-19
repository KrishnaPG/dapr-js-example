# dapr-js-example
Sample for DAPR js SDK service invocation

## usage
  1. Install the dependencies with `bun i`
  2. Launch the server with `bun dev`
  3. Launch the client with `bun client`

## Notes
Dapr uses a sidecar architecture. To invoke an application using Dapr:
  - You use the `invoke` API on the Dapr instance.
  - Each application communicates with its own instance of Dapr.
  - The Dapr instances discover and communicate with each other.
