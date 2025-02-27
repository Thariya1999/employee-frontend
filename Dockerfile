FROM node:alpine 
# docker image(light weight hinda)

WORKDIR /app
# app kiyala folder ekak hadanawa docker environment ekedi

COPY package*.json ./
# app kiyana folder eka athulata packgae json file add wenawa

RUN npm install
# command eka run wenawa

COPY . .

ARG API_BASE_URL
ENV REACT_APP_API_BASE_URL=$API_BASE_URL

EXPOSE 5173
# port eka expose karanawa

CMD ["npm", "run", "dev"]
# app tika run karanna dena code tika