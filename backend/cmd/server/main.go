package main

import (
	"log"
	"net"

	"github.com/AdrianFerreyra/simple-go-stream-grpc-docker/internal/server"
	"github.com/AdrianFerreyra/simple-go-stream-grpc-docker/pkg/pb"
	"google.golang.org/grpc"
)

func main() {
	lis, err := net.Listen("tcp", ":50005")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	pb.RegisterDataServiceServer(s, server.DocumentServer{})

	log.Println("Start Server...")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
