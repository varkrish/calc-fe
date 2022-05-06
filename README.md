Calculator front-end project is a simple html & JQuery based application created to demonstrate various openshift concepts. Front project invokes the Backend for Frontend component for results.

### Run Frontend app

  ```
  docker pull nginx

  docker run --name calc-fe -d -p 8080:80 -v $(pwd):/usr/share/nginx/html nginx
  ```

 ### Run the whole stack

  ``
  docker-composer up
  ``

### Screenshot