FROM node:alpine

WORKDIR /usr/src/app

EXPOSE 3050

CMD ["node", "program.js"]
