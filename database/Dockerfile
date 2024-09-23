# docker run -d \
# --name mysql-container \
# -e MYSQL_ROOT_PASSWORD=root_password \
# -e MYSQL_DATABASE=exc_database \
# -e MYSQL_USER=user \
# -e MYSQL_PASSWORD=password \
# -p 5432:3306 \
# mysql:latest

# Use the official MySQL image from the Docker Hub
FROM mysql:latest

# Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASE=exc_database
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password

# Expose MySQL port
EXPOSE 5432