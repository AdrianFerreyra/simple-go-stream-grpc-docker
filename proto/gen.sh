#!/bin/bash

protoc --proto_path=. --go_out=../backend/pkg/pb --go-grpc_out=../backend/pkg/pb document.proto