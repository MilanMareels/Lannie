# ==========================================
# Stap 1: Build de app met Node.js
# ==========================================
FROM node:24-alpine AS build

WORKDIR /app

# Kopieer de package bestanden en installeer dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Kopieer de rest van je code (jouw lokale 'dist' wordt hier genegeerd dankzij .dockerignore)
COPY . .

# Geef de environment variabelen door (bij Vite beginnen deze met VITE_)
ARG VITE_COMPANY_NAME
ARG VITE_CONTACT_FORM_KEY

ENV VITE_COMPANY_NAME=$VITE_COMPANY_NAME
ENV VITE_CONTACT_FORM_KEY=$VITE_CONTACT_FORM_KEY

# Laat Docker de app bouwen (dit genereert de map /app/dist IN de container)
RUN npm run build

# ==========================================
# Stap 2: Serveer de app met Nginx
# ==========================================
FROM nginx:alpine

# Verwijder de standaard startpagina van Nginx
RUN rm -rf /usr/share/nginx/html/*

# Kopieer de gecompileerde app vanuit stap 1 naar de Nginx server
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]