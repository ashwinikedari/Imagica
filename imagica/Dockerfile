FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install @angular/cli 
COPY package.json /usr/src/app
RUN npm clean-install
RUN npm install
COPY . /usr/src/app
EXPOSE 4200
CMD ["npm","start"]