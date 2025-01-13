# Build stage
FROM node:22-alpine AS build-stage

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm test

# Production stage
FROM node:22-alpine AS production-stage

WORKDIR /usr/src/app

COPY --from=build-stage /usr/src/app/node_modules /usr/src/app/node_modules

COPY --from=build-stage /usr/src/app /usr/src/app

EXPOSE 8000

CMD ["node", "index.js"]
