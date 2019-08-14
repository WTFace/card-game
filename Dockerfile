FROM python:3-stretch

ENV DEBIAN_FRONTEND=noninteractive
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y git \zip \unzip \vim \ 
    mariadb-server \mariadb-client \
    nginx \
    python \
    python-dev \
    python-setuptools \
    supervisor \
    && rm -rf /var/lib/apt/lists/*

RUN pip3 install Django \uwsgi

RUN apt-get update

COPY nginx.conf /etc/nginx/sites-available/default
COPY supervisor.conf /etc/supervisor/conf.d/

ADD . /home/bac
WORKDIR /home/bac

# RUN python manage.py collectstatic

EXPOSE 80
CMD ["supervisord", "-n"]

# docker run -p8080:80 -dt -v /Users/root1/GoogleD/phaser:/home/bac --name bac bac
