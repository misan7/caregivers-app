# CALM AND CARE

![Image](https://res.cloudinary.com/dk2mgboya/image/upload/v1497186627/banner_he8saa.png)

This repository contains a `Full Stack` project using **JavaScript**, **AngularJS**, **NodeJS**, **ES2015**, **ExpressJS**, **MongoDB**, **Bootstrap**, **jQuery**, **HTML5**, **CSS3**. The main purpose of this app is helping users to find a caregiver adapted to their specific needs.

## Installation

### .env File Configuration

You have to create a file `.env` in the main folder and write the environment vars to do a correct connection.

- Port:

```
PORT=3000
```

- MongoDB path & database:

```
DB_URL=mongodb://localhost:27017/keepcalm
```

- Secret word to seed your webtoken:

```
SECRET=THISISMYLITTLESECRET
```

### Run the Server:

`npm start` in your console to install **bower** and **npm packages**.


### The URL to start in localhost:

```
This project responds to localhost:3000/
```


## Available actions {CRUD}

### [**GET**] - `getAll`

See all profiles: 

`curl localhost:3000/api/profiles/`

### [**GET**] - `getProfile`

Search a profile by it's ID:

`curl localhost:3000/api/profile/593695db7ba89d0d08654d56`

### [**POST**] - `addProfile`

Add a Profile, there are just 2 properties required: `name` and `location`. The rest are optional to fill the profile.

```bash
curl -X POST --data "name=Sarah Connor&location=Barcelona&description=Something about&experience=more things&education=studies&price=30&phone=123123123&availability=1&profileimage=http://www.linkmesh.com/imagenes/temas3/the_sarah_connor_chronicles/a_cameron.jpg" localhost:3000/api/profiles/
```

And console will show the next message:

`{"msg":"profile added properly"}`

### [**DELETE**] - `deleteProfile`

To delete a Profile:

```bash
curl -X DELETE localhost:3000/api/profile/593692b67ba89d0d08654d54
```

And console will show the next message:

`{"msg":"profile with id: 593692b67ba89d0d08654d54 -> removed properly"}`

### [**PUT**] - `updateProfile`

Updating info from profile:

```bash
λ curl -X PUT --data "name=Paquita" localhost:3000/api/profile/59365a85fb017f87847d4020
```

And console will show the next message:

`{"msg":"profile with id 59365a85fb017f87847d4020 updated properly"}`

### Other Handlers:

`/auth` routes to login/register User.

## npm Packages, frameworks & tools:

    "bootstrap": "^3.3.7",
    "jquery": "^3.2.1",
    "font-awesome": "^4.7.0",
    "magnific-popup": "^1.1.0",
    "scrollreveal": "^3.3.5",
    "angular": "^1.6.4",
    "angular-route": "^1.6.4",
    "angular-jwt": "^0.1.9",
    "angular-toastr": "^2.1.1",
    "body-parser": "^1.17.2",
    "bower": "^1.8.0",
    "express": "^4.15.3",
    "mongoose": "^4.10.4",
    "dotenv": "^4.0.0",
    "express-jwt": "^5.3.0",
    "jsonwebtoken": "^7.4.1",
    "passport": "^0.3.2",
    "passport-jwt": "^2.2.1",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^4.0.0".

## Other Tools:

Cloudinary: https://cloudinary.com

Lorem Ipsum: http://www.pirateipsum.me

Sublime Text 3: http://www.sublimetext.com

Heroku: https://www.heroku.com

mLab: https://mlab.com

## Future Implementations:

- I want to use `ng-map` for a better localization of centers; and add a radius on the map for knowing where the profesionalslive.
- Filter searchs for price, journey and if it's a center or not.
- Improve the Responsive Design

## Author

[Sergio Morales](https://github.com/misan7)

## Acknowledgments

- [Juanma](https://github.com/juanmaguitar)
- [Alex](https://github.com/agandia9)
- Manuel
- Albert

...And the best mates from Skylab Coders!

- [Bernat](https://github.com/picapoll)
- [Carles](https://github.com/sernalab)
- [José Ángel](https://github.com/joseangelbarrera)
- [Leonel](https://github.com/LeonelAV)
- [Luis Alberto](https://github.com/lfernandezcall)
- [Mario](https://github.com/MarioTerron)
- [Nuria](https://github.com/nuriaescude)
- [Simón](https://github.com/sgarmendia)
- [Toni](https://github.com/tonimg)
- [Wally](https://github.com/studiosally)
- [Yair](https://github.com/Riay)
- [Jaume](https://github.com/jaumereg)
- [Jordi](https://github.com/tsatsan)
- [Gus](https://github.com/gusblacknails)