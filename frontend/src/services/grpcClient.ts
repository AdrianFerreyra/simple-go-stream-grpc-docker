// import * as grpcWeb from "grpc-web";
import { ClientReadableStream, Status } from "grpc-web";
import { DataServiceClient } from "../generated/DocumentServiceClientPb";
import { UpdateRequest, UpdateResponse } from "../generated/document_pb";

export class GrpcClient {
  private dataService: DataServiceClient;

  constructor(host: string) {
    this.dataService = new DataServiceClient(host);
  }

  startStream(
    clientId: string,
    onMessage: (message: string) => void
  ): ClientReadableStream<UpdateResponse> {
    const request = new UpdateRequest();
    request.setClientId(clientId);

    const call = this.dataService.getUpdates(request, {});
    call.on("data", (response: UpdateResponse) => {
      onMessage(response.getData());
    });

    return call;
  }
}
