# Use python 3.9 or higher (matching your requirements)
FROM python:3.9-slim

WORKDIR /app

# Copy requirements from the backend folder
# Copy requirements from the backend folder
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend code
COPY backend/ .

# Copy public folder (needed for services.csv and PDF templates)
# api.py looks for "../public", so assuming WORKDIR /app, we need it at /public
COPY public/ /public/

# Command to run the application
# We use "api:app" because your file is named "api.py"
# WARNING: Ensure inside api.py your FastAPI instance is named 'app'
CMD ["uvicorn", "api:app", "--host", "0.0.0.0", "--port", "1000"]