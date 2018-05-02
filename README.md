# Challenge - Question 3

**Run the project**

1. Install the dependencies
```
$ npm i
```

2. Run the project
```
$ npm start
```
if you want starting with `nodemon`, you must have to install it globally, and then run:
```
$ npm run dev
```

3. Open your browser with: http://127.0.0.1:3000
It will request the healthCheck route, and it should response with:
```
{
  status: "ok"
}
```

**Testing**
By default the server exposes port 3000.
To change this setting you can export environment var `PORT`

The post schema to access the route:
```
{
  "name": "ANY NAME",
  "type": "html" || "pdf"
}
```
The 2 types accepted are html and pdf.

the cURL example is:
```
curl -X POST \
  http://127.0.0.1:3000 \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "test",
  "type": "html"
}'
```

**Modules**
- body-parser: To parse middleware before handle the request;
- express: required by question 3 dscription;
- joi: library to validate schema JSONs. Used to validate schema request;
- require-all: module to require all files from a folder;

