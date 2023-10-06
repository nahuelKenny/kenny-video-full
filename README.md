# Dockerized templates Backend with Laravel 10 and Frontend with Nuxtjs

## 📜 Introduction
This project is to show frontend with a little of backend, for that there are 2 dockerized containers,
one for backend with laravel/mysql and other with frontend in nuxtjs, so it can be deployed or managed separately.

I was curious about to use Sanctum with laravel and manage tokens and sensible data in a ssr with cookies, instead of
jwt with localstorage but time was running out, so the integration still need some adjustment.
the api integrtion of OMDB is working fine.
## ⚙ Installation

Clone or download the repository:

```bash
git clone https://github.com/nahuelKenny/kenny-video-full.git app
```

#### Quick installation

you will see 2 main folders, for frontend:

```bash
cd frontend
docker-compose up --build
```
after docker is builded and up u can check in browser at: http://localhost:8080/

note: time was running out and i was asked to help another team, so api rest to OMDB is working as it should,
but backend integration need some adjustment i can made at weekend.

for backend u can do the same

```bash
cd backend
docker-compose up --build
```

This will run new Laravel app which will be available on `http://localhost:8000`.


But if some error occur u can always do a fresh laravel project as it used breeze api for user entity management.
like this:

```bash
cd backend
curl -s "https://laravel.build/api" | bash
```

"/api" will be the name of the folder project

after it finish run container with sail

```bash
cd api
./vendor/bin/sail up -d
```

then u can start working inside container (laravel)
go to the laravel opened container and run:
```bash
cd api
./vendor/bin/sail composer require laravel/breeze --dev
```

then scaffold the template by running:
```bash
./vendor/bin/sail artisan breeze:install api
./vendor/bin/sail artisan migrate
```
and then u can check localhost:8000 for the backend

and thats all

BUT

if u cant reach that url u can try adding ports to docker-compose.yml

u will see something like:
ports:
            - '${APP_PORT:-80}:80'
            - '${VITE_PORT:-5173}:${VITE_PORT:-5173}'
            - '8000:80' <---this needs to be added (or the port u need)

