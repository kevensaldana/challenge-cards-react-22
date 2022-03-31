docker build -t image-tiendeo -f Dockerfile .
docker run --rm -p 8080:80 --name container-tiendeo image-tiendeo