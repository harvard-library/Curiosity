#!/bin/bash
#This script forces the db migrate to run on the database

set -e

chown app:app /etc/nginx/sites-enabled/webapp.conf
chown -R app:app /home/app/webapp/log

mkdir -p /home/app/webapp/tmp/pids
chown -R app:app /home/app/webapp/tmp/pids
chmod 755 /home/app/webapp/tmp/pids

exec "$@"