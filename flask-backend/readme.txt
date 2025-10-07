#1st step: create a docker image by uisng Dockerfile
docker build -t flaskbackendapp .

#2nd step: now to see docker images is ready run this[optional]
docker images

#3rd step: Now create a container of the created docker image
docker run -d -p 5000:5000 --env-file .env flaskbackendapp
or docker run -it -p 5000:5000 --env-file .env flaskbackendapp



