FROM webdevops/php-apache

RUN apt update
RUN apt install -y nodejs
RUN a2enmod proxy
RUN a2enmod proxy_http

WORKDIR /
RUN mkdir -p app/api
COPY . app/api
COPY nodejs.conf /opt/docker/etc/supervisor.d/

EXPOSE 443
EXPOSE 80

CMD ["supervisord"]