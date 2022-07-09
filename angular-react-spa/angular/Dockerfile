FROM node:14-alpine
RUN npm install -g @angular/cli
USER node
WORKDIR /app
EXPOSE 3002
CMD ["npm","run","serve:single-spa:angular"]