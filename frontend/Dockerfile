# FROM node:16-slim
# #RUN mkdir -p /home/node/app
# WORKDIR /home/node/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# ENV HOST=0.0.0.0 PORT=8001
# EXPOSE ${PORT}
# EXPOSE 49153
# #CMD ["npm", "start"]

FROM node:16-slim AS build
WORKDIR /home/node/app
ENV HOST=0.0.0.0 PORT=8001
EXPOSE ${PORT}
CMD npm install && npm start -- --watch --host=0.0.0.0