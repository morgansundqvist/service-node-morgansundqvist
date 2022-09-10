FROM node:16.14-alpine as builder

# Build service app
WORKDIR /build
COPY ./ ./
# Workaround to avoid node-gyp build issues regarding .npm.certs.pem
RUN npm install && npm run build

# Package container
FROM node:16.14-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
COPY entrypoint.sh ./
RUN chmod +x ./entrypoint.sh

RUN npm install --only=production
RUN apk add --no-cache bash

COPY --from=builder /build/dist ./dist

CMD ["./entrypoint.sh"]