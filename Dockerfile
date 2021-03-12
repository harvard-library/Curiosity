#https://github.com/phusion/passenger-docker
FROM phusion/passenger-ruby27

# Set correct environment variables.
ENV DEBIAN_FRONTEND noninteractive

#From the docs: The image has an app user with UID 9999 and home directory
# /home/app. Your application is supposed to run as this user.
COPY --chown=app:app . /home/app/webapp
COPY --chown=app:app Gemfile /home/app/webapp/.
COPY --chown=app:app Gemfile.lock /home/app/webapp/.
COPY --chown=app:app Rakefile /home/app/webapp/.

# Update permissions for the gbladm user and group
COPY bin/change_id.sh /tmp/change_id.sh
RUN chmod 755 /tmp/change_id.sh && \
  /tmp/change_id.sh -u 55012 -g 199

RUN apt-get update && apt-get install -y --no-install-recommends \
  build-essential \
  mysql-client \
  bash \
  tzdata \
  openssl \
  wget \
  openjdk-11-jre-headless \
  imagemagick && \
  apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
  ldconfig /usr/local/lib && \
  cd .. && \
  gem update --system && \
  gem install bundler && \
  rm -f /etc/nginx/sites-enabled/default && \
  rm -f /etc/service/nginx/down && \
  chmod +x /home/app/webapp/bin/*.sh && \
  chown app /etc/ssl/certs && \
  chown app /etc/ssl/openssl.cnf && \
  chmod 755 /etc/container_environment && \
  chmod 644 /etc/container_environment.sh /etc/container_environment.json




RUN printf "[SAN]\nsubjectAltName=DNS:*.hul.harvard.edu,DNS:*.lts.harvard.edu" >> /etc/ssl/openssl.cnf && \
  openssl req -new -newkey rsa:4096 -days 3650 -nodes -x509 -subj "/C=US/ST=Massachusetts/L=Cambridge/O=Library Technology Services/CN=*.lib.harvard.edu" -extensions SAN -reqexts SAN -config /etc/ssl/openssl.cnf -keyout /etc/ssl/certs/server.key -out /etc/ssl/certs/server.crt


# Set working directory
WORKDIR /home/app/webapp

USER app

RUN bundle install

#Runs some important commands including chmod and migrations
ENTRYPOINT ["bin/entrypoint.sh"]

USER root

# Expose ports
EXPOSE 3001

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]
#CMD ["/sbin/my_init","--","setuser","app","bash"]


