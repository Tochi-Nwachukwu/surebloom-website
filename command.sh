sudo bash -c "mysqldump -h axios-mysql-main.c7mowm60a6zs.eu-north-1.rds.amazonaws.com \
  -u ikeja.joincci.org \
  -p \
  --set-gtid-purged=OFF \
  --no-tablespaces \
  --single-transaction \
  wp_ikeja > ./wp_ikeja_dump.sql"




  UPDATE wpe9_users 
SET user_pass = MD5('y7B6JLZNF8jGJSpz') 
WHERE ID = 2;


y7B6JLZNF8jGJSpz


INSERT INTO wpe9_users (user_login, user_pass, user_nicename, user_email, user_status, display_name)
VALUES ('ikejaadmin', MD5('y7B6JLZNF8jGJSpz'), 'ikejaadmin', 'admin@ikeja.joincci.org', 0, 'Ikeja Admin');


<IfModule mod_headers.c>
    Header always unset X-Frame-Options
    Header always set Content-Security-Policy "frame-ancestors 'self' https://joincci.org"
</IfModule>