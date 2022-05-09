Calculator front-end project is a simple html & JQuery based application created to demonstrate various openshift concepts. Front project invokes the Backend for Frontend component for results.

Local mode (``env=local``) serves data based on the json present in the ``test`` folder.

### Running this app on non-containerised env

copy the all the files to into any webserver's deployment folder and access the application
### Run Frontend app as container for local dev

  ```
  docker pull nginx

  docker run --name calc-fe -d -p 8080:80 -v $(pwd):/usr/share/nginx/html nginx
  ```

Change the files in local and see the changes on localhost:8080/

### Running the app on OCP
#### Build image using OCP build system
 
```
 oc new-project  calc-dev
 cat Containerfile |oc new-build -D - --docker-image docker.io/nginx:latest --name calc-fe
 oc start-build calc-fe --from-dir . --follow  
```
#### Deploy app on OCP deployment

```
oc new-app --name calc-fe calc-fe -l app=calc-fe
```

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