FROM mcr.microsoft.com/playwright:bionic
WORKDIR /app
COPY . . 
RUN npm -g i yarn
RUN yarn install
EXPOSE 3000
CMD ["yarn", "run", "start"]
