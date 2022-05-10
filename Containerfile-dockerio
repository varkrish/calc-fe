#Image optimized to run on k8s clsiters
FROM docker.io/nginx:latest

ENV NGINX_USER="frontend-app" \
    NGINXR_UID="8987" \
    NGINX_GROUP="frontend-app" \
    NGINX_GID="8987"     

RUN set -ex; \
  groupadd -r --gid "$NGINX_GID" "$NGINX_GROUP"; \
  useradd -r --uid "$NGINXR_UID" --gid "$NGINX_GID" "$NGINX_USER" 


RUN mkdir -p /var/lib/nginx/tmp /var/log/nginx \
    && chown -R frontend-app:frontend-app /var/lib/nginx /var/log/nginx \
    && chmod -R 755 /var/lib/nginx /var/log/nginx \
    && touch /var/run/nginx.pid && chmod 777 /var/run/nginx.pid \
     && chown -R frontend-app:frontend-app /var/run/nginx.pid /var/cache/nginx

#dont use this for production
RUN chmod -R 777 /var
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf
RUN sed -i 's/listen  [::]:80;/listen  [::]:8080;/g' /etc/nginx/conf.d/default.conf

USER frontendapp
COPY . /usr/share/nginx/html
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
EXPOSE 8080