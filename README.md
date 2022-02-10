# mobilist-guide-program

Mobilist-guide-program is a node.js app which users can add-delete-update-list and search persons in their guides. 

## Installation

Go to app folder and use npm for installing requirements.

```bash

  npm install

```

## Usage with node.js
Go to app folder and type "npm run start"

## After running app
API routes : "localhost:8000/Add","localhost:8000/Delete","localhost:8000/Search","localhost:8000/Update","localhost:8000/List".
JSON requests for those API endpoints are all same ; 
```bash
{
	"company_user_first_name":"melikşah",
	"company_user_last_name":"gürcü",
	"company_user_cell_number":"05316994512",
	"company_name":"mobilist",
	"user_email":"meliksah.tg@hotmail.com"
}

```
user_email is there for users to distinguish their guides from each other.

## Optional
"localhost:8000/Register" and "localhost:8000/login" are two API endpoints for authentication and authorization. JSON requests for those API endpoints are all same ;
```bash
{
	"first_name":"melikşah",
  	"last_name":"gürcü",
	"email":"meliksah.tg@hotmail.com",
	"password":"123456"
}.
```
Login API returns a token. To access other API endpoints you must use that token in request header for authorization. But first you must remove comment lines in HomeControllerRouter.ts file.
