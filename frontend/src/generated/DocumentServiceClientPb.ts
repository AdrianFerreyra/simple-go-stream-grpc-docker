/**
 * @fileoverview gRPC-Web generated client stub for document.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.3
// source: document.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as document_pb from './document_pb'; // proto import: "document.proto"


export class DataServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetUpdates = new grpcWeb.MethodDescriptor(
    '/document.v1.DataService/GetUpdates',
    grpcWeb.MethodType.SERVER_STREAMING,
    document_pb.UpdateRequest,
    document_pb.UpdateResponse,
    (request: document_pb.UpdateRequest) => {
      return request.serializeBinary();
    },
    document_pb.UpdateResponse.deserializeBinary
  );

  getUpdates(
    request: document_pb.UpdateRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<document_pb.UpdateResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/document.v1.DataService/GetUpdates',
      request,
      metadata || {},
      this.methodDescriptorGetUpdates);
  }

}

