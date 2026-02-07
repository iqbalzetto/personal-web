# Dockerfile

# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* bun.lockb* ./

# Install dependencies
# If bun.lockb exists, we might need bun, but for now assuming npm/yarn/pnpm work or lockfile is compatible/ignored if npm ci fails.
# Given the presence of bun.lockb in the file list, the user might be using bun.
# However, standard node image doesn't have bun. 
# Let's check if we should use bun image or install bun. 
# The package.json has "scripts" with "vite", so it's a standard vite app.
# Let's stick to npm for broader compatibility unless I see explicit bun usage in scripts, 
# but wait, `bun.lockb` is there. 
# Let's try to infer if I should use bun. 
# The user didn't explicitly ask for bun, but `bun.lockb` suggests it.
# To be safe and standard, I'll use npm ci if package-lock.json exists, else yarn/bun.
# Actually, `package-lock.json` IS present in the file list. So `npm ci` should work.

RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the application
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
