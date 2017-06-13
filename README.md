# CALM AND CARE

![Image](https://res.cloudinary.com/dk2mgboya/image/upload/v1497186627/banner_he8saa.png)

This repository contains a `Full Stack` project using **JavaScript**, **AngularJS**, **NodeJS**, **ES2015**, **ExpressJS**, **MongoDB**, **Bootstrap**, **jQuery**, **HTML5**, **CSS3**. The main purpose of this app is helping users to find a caregiver adapted to their specific needs.

This project responds to localhost:3000/

You have to create a file `.env` and type the environment vars to do a correct connection:

```
DB_URL=mongodb://localhost:27017/keepcalm
PORT=3000
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


## Other Tools:

Cloudinary: https://cloudinary.com

Lorem Ipsum: http://www.pirateipsum.me

Sublime Text 3: http://www.sublimetext.com

Heroku: https://www.heroku.com

mLab: https://mlab.com

## Thanks To...

Juanma, Alex, Manuel, Yair, David, Àngels, Manuela, Skylab Coders, friends...