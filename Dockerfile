# syntax=docker/dockerfile:1
# HELOC Frontend: build with Node + Vite, serve static on PORT (Railway)

# ---- Build ----
FROM node:22-alpine AS build

WORKDIR /app

# Build-time API URL (set in Railway: VITE_API_URL=https://your-api.railway.app)
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

COPY . .
RUN npm run build

# ---- Serve ----
FROM node:22-alpine AS serve

WORKDIR /app

COPY --from=build /app/build ./build

# serve listens on PORT; Railway sets PORT
ENV PORT=3000
EXPOSE 3000

CMD ["sh", "-c", "npx serve -s build -l ${PORT}"]
