FROM node:alpine 
# docker image(light weight hinda)

WORKDIR /app
# app kiyala folder ekak hadanawa docker environment ekedi

COPY package*.json ./
# app kiyana folder eka athulata packgae json file add wenawa

RUN npm install
# command eka run wenawa

COPY . .

EXPOSE 5173
# port eka expose karanawa

CMD ["npm", "run", "dev"]
# app tika run karanna dena code tika