FROM node:latest
WORKDIR /app
COPY . .
RUN yarn install && yarn build
CMD ["yarn", "start"]