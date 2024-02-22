# HOW TO USE

```json
PORT="3000"
```

## Endpoints

List of availables endpoints:

- `POST /login`
- `GET /news`

&nbsp;

## 1. POST /Login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (201 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Email and password are required"
}

```json
+
Response (401 - Unauthorized)
{
   "message": "Invalit email/password"
}
```

