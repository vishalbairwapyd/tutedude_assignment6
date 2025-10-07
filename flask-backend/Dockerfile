
# Use an official lightweight Python image
FROM python:3.10-slim

# Set the working directory inside container
WORKDIR /app

# Copy only requirements first (for better caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the code
COPY . .

# Expose Flask default port
EXPOSE 5000

# Command to run the Flask app
CMD ["python", "app.py"]

