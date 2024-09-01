# Use the official Nginx image
FROM nginx:latest

# Copy static website files to the Nginx directory
COPY . /usr/share/nginx/html

# Expose port 80 for the static site
EXPOSE 80