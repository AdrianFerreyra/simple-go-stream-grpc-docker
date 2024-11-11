import { useEffect, useRef, useState } from "react";
import { GrpcClient } from "../services/grpcClient";
import { ClientReadableStream } from "grpc-web";
import { UpdateResponse } from "../generated/document_pb";

interface Props {
  clientId: string;
}

const grpcClient = new GrpcClient("http://localhost:8080");

export const StreamingComponent = ({ clientId }: Props) => {
  const [text, setText] = useState<string>("start");

  useEffect(() => {
    const stream = grpcClient.startStream(clientId, (message: string) => {
      setText(message);
    });

    return () => {
      stream.cancel();
    };
  }, [clientId]);

  return <div>{text}</div>;
};
