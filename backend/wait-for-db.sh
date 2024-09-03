#!/bin/sh

# wait-for-db.sh

set -e

host="$DB_HOST"
user="$DB_USER"
password="$DB_PASSWORD"

echo "Waiting for MariaDB at $host..."

until mariadb -h "$host" -u"$user" -p"$password" -e "select 1" > /dev/null 2>&1; do
  >&2 echo "MariaDB is unavailable - sleeping"
  sleep 1
done

>&2 echo "MariaDB is up - executing command"

python manage.py migrate

exec python manage.py runserver 0.0.0.0:8000
