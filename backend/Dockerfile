FROM python:3.7

# Necessary dependencies for Postgres DB
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Adding backend directory to make absolute filepaths consistent across services
WORKDIR /app/backend/

# Install Python dependencies
COPY requirements.txt /app/backend/
RUN pip3 install --upgrade pip -r requirements.txt

# Add the rest of the code
COPY . /app/backend

# Make port 8000 available for the app
EXPOSE 8000

# Be sure to use 0.0.0.0 for the host within the Docker container,
# otherwise the browser won't be able to find it
CMD python3 manage.py runserver 0.0.0.0:8000