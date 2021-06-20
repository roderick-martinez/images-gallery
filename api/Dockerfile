# base image to use; see Docker Hub for more options
FROM python:3.8

WORKDIR /app

# expose the port
EXPOSE 5050

# copy pip files that contain requirements
COPY Pipfile Pipfile.lock ./

RUN pip install pipenv
# create requirements file from Pipfiles, excluding dev dependencies
RUN pipenv lock --requirements > requirements.txt
RUN pip install -r requirements.txt

# Copy all files from API folder 
COPY . ./

# run python app
CMD ["python", "main.py"]