Calculator front-end project is a simple html & JQuery based application created to demonstrate various openshift concepts. Front project invokes the Backend for Frontend component for results.

Local mode (``env=local``) serves data based on the json present in the ``test`` folder.

### Running this app on non-containerised env

copy the all the files to into any webserver's deployment folder and access the application

### Container based development

### Pull RH NGINX UBI or docker.io nginx image
  ```
  docker pull docker tag registry.access.redhat.com/ubi8/nginx-118:latest nginx
  docker tag   registry.access.redhat.com/ubi8/nginx-118:latest rh-nginx
    OR
  
  docker pull nginx
  ```
### Bind the local file system to the container for instant refresh
  
#### Dev using RH UBI

```
  export REMOTE_PATH=/opt/app-root/src
  docker run --name calc-fe -d -p 8080:80 -v $(pwd):$REMOTE_PATH rh-nginx nginx -g "daemon off;"
```
#### Devs using docker nginx UBI

```
    export REMOTE_PATH=/usr/share/nginx/html
    docker run --name calc-fe -d -p 8080:80 -v $(pwd):$REMOTE_PATH nginx nginx -g "daemon off;"
```

Make changes to the file locally and refresh the browser on http://localhost:8080

### Run Frontend app as container

  ```
  docker build -f Containerfile -t calc-fe:latest

  docker run --name calc-fe -d -p 8080:80 -v $(pwd):/usr/share/nginx/html nginx nginx -g "daemon off;"
  ```

Change the files in local and see the changes on localhost:8080/

### Running the app on OCP
#### Build image using OCP build system
 
```
 oc new-project  calc-dev
 cat Containerfile |oc new-build -D - --docker-image registry.access.redhat.com/ubi8/nginx-118:latest --name calc-fe
 oc start-build calc-fe --from-dir . --follow  
```
#### Deploy app on OCP deployment

```
oc new-app --name calc-fe calc-fe -l app=calc-fe
```
#### Port-forward and test
```
  oc port-forward svc/calc-fe 8080:8080 -n calc-dev
```

Access http://localhost:8080/ in browser

#### Update environment
```
 create config map using env.js 
 add config map as volume to the deployment
```
 ### Run the whole stack locally

  ``
  docker-composer up
  ``

### Screenshot