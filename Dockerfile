FROM node:16 

WORKDIR /usr/src/app 

RUN npm install -g nodemon ts-node

COPY ./package* ./
 
RUN npm install 

COPY . .

CMD ["npm", "run", "docker:dev"]
