#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "Building all services..."

# Build the frontend
echo "Building frontend..."
pnpm --filter frontend build

# Build the backend services
echo "Building users service..."
pnpm --filter @datascube/users-service build

echo "Building products service..."
pnpm --filter @datascube/products-service build

echo "Building orders service..."
pnpm --filter @datascube/orders-service build

echo "All services built successfully."
