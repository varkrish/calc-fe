#Image optimized to run on k8s clsiters
FROM registry.access.redhat.com/ubi8/nginx-118:latest
ADD ./src/ .
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
