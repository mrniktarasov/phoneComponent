FROM node:alpine

ARG NODE_ENV
ENV NODE_ENV "$NODE_ENV"


# Installing dependencies:
WORKDIR /code
COPY package.json package-lock.json /code/

# We do not need to tweak this command, `$NODE_ENV` does it for us.
RUN npm install


# Creating folders, and files for a project:
COPY . /code


# Project initialization:
EXPOSE 4000
