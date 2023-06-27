#Build stage
FROM node:18-alpine AS base 


RUN npm i -g pnpm 

    

#Build stage
FROM base AS dependencies 

WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
RUN pnpm install
    

FROM base AS build 

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm build 
RUN pnpm prune --prod
    

#Prod stage
FROM base as deploy

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000 

CMD ["node", "dist/main"]