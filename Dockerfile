# syntax=docker/dockerfile:1.6

FROM oven/bun:1 AS builder
WORKDIR /app
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*
COPY package.json bun.lock* package-lock.json* ./
RUN bun install --frozen-lockfile
COPY . .
RUN <<SH
git describe --tags --long --dirty --always
bun run build:ssg
SH

FROM nginx:1.27-alpine AS runner
WORKDIR /usr/share/nginx/html
COPY deploy/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
