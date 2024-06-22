# Stage 1: Build the application
FROM node:18-alpine AS builder

# Install dependencies
RUN apk add --no-cache curl gcc g++ make python3 \
    && curl https://sh.rustup.rs -sSf | sh -s -- -y

# Set environment variables for Rust
ENV PATH="/root/.cargo/bin:${PATH}"

WORKDIR /

COPY package*.json ./
RUN npm install

COPY . .

# Build the Tauri application
RUN npm run build

# Stage 2: Create the final image
FROM node:18-alpine

WORKDIR /

COPY --from=builder /app .
COPY --from=builder /root/.cargo /root/.cargo

ENV PATH="/root/.cargo/bin:${PATH}"
ENV PORT=8008

EXPOSE 8080

CMD ["npm", "start", "tauri", "dev"]
