FROM nginx:1.16.0-alpine
COPY nginx.conf etc/nginx/nginx.conf

RUN mkdir -p /var/log/app_engine
RUN mkdir -p /usr/share/nginx/www/_ah && echo "healthy" > /usr/share/nginx/www/_ah/health

ADD build/ /usr/share/nginx/www/
RUN chmod -R a+r /usr/share/nginx/www