docker build -t image-cards-app -f Dockerfile .
docker run --rm -p 8080:80 --name container-cards-app image-cards-app