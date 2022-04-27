#  syntax=docker/dockerfile:1

FROM golang:1.18 AS builder

WORKDIR /app

# RUN apt-get install build-essential
COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY . ./

# RUN go build -o app ./cmd/bitsports/main.go
RUN GOOS=linux go build -a -ldflags '-extldflags "-static"' -o app ./src/main.go

FROM alpine:latest


RUN apk --no-cache add ca-certificates
RUN apk add libc6-compat

WORKDIR /root/
COPY --from=builder /app/app ./
CMD "./app"