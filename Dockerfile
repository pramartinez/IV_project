FROM node:10

# Create app directory
WORKDIR /vptournaments

# Bundle app source
COPY app ./app
COPY bin ./bin
COPY routes ./routes
COPY gulpfile.js ./

# Install dependencies
COPY package*.json ./
RUN npm install

# Install buildtool
RUN npm install -g gulp

ENV PORT 3000
EXPOSE 3000
CMD [ "gulp", "start" ]