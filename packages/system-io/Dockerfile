FROM node:12

WORKDIR /usr/src/app


COPY package*.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 6000

CMD ["yarn", "start"]