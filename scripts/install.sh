## run from root directory

# destroy database before starting
docker stop exc_container
docker container rm exc_container
docker image rm exc_image

# create database
cd ./database
docker build -t exc_image .
docker run --name exc_container -d -p 5432:3306 exc_image

# install server dependancies
cd ../server
npm i .

# install client dependancies
cd ../client
npm i .