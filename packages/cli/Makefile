lint:
	go vet ./...

format:
	go fmt ./...

build:
	go build -o ./bin/strings ./main.go

install:
	go vet ./...
	go fmt ./...
	go build -o ./bin/strings ./main.go
	mkdir -p ~/bin
	cp ./bin/strings ~/bin/
	chmod +x ~/bin/strings
	export PATH="$(HOME)/bin:$(PATH)"
