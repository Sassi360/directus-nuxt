ARG VERSION=20.10.0
ARG ARCH=slim

# deploy image
FROM node:${VERSION}-${ARCH}

WORKDIR /app

RUN corepack enable && mkdir uploads extensions

COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm install --production

COPY snapshots snapshots

ENV ENV production
CMD ["pnpm", "start"]

EXPOSE 8080
