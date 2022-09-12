FROM node:16.14.0

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY . .

# ENV MONGO_USER
# ENV MONGO_PASS
# ENV MONGO_DATABASE
# ENV PORT = 5000

EXPOSE 3000

CMD ["npm" , "start"]