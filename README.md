// Docker setup
FROM node:14.14.0-alpine
WORKDIR /app
COPY ./package.json ./
CMD ["npm","run","start"]

docker build -f Dockerfile.dev -t bookingapp/frontend




# react_booking_app
React Node Mongodb Booking App

//server setup

npm init

npm i express dotenv mongoose cors morgan nodemon

npm i esm
