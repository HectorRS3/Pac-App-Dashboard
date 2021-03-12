# build environment
FROM node as build
WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
# RUN npm ci --silent
RUN npm install
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
RUN apk add bash
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE $PORT
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'