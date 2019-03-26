FROM node:7
#RUN npm install system-sleep
RUN npm install --save rollbar
ADD app.js /app.js
ENTRYPOINT ["node", "app.js"]
