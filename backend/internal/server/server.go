package server

import (
	"log"
	"time"

	"github.com/AdrianFerreyra/simple-go-stream-grpc-docker/pkg/pb"

	"google.golang.org/grpc"
)

type DocumentServer struct {
	pb.UnimplementedDataServiceServer
}

func (c DocumentServer) GetUpdates(in *pb.UpdateRequest, srv grpc.ServerStreamingServer[pb.UpdateResponse]) error {
	for {
		current_time := time.Now().String()
		resp := pb.UpdateResponse{Data: current_time, Timestamp: 1}

		if err := srv.Send(&resp); err != nil {
			log.Printf("send error %v", err)
			break
		}

		time.Sleep(2 * time.Second)
	}
	return nil
}
