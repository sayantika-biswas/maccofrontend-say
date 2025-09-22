# ========= STAGE 1: Build =========
FROM node:22-alpine AS builder

# Set working dir
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build Next.js app
RUN npm run build

# ========= STAGE 2: Production =========
FROM node:22-alpine AS runner

# Set NODE_ENV
ENV NODE_ENV=production

# Set working dir
WORKDIR /app

# Only copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the Next.js port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
