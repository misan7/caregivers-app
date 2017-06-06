#1 Calm and Care - CRUD

## [GET] - getAll

To see all profiles: 

`curl localhost:3000/profiles/`


## [POST] - addProfile

To add a Profile, there are just 2 properties required: `name` and `location`. The rest are optional to fill the profile.

```bash
curl -X POST --data "name=Paulinato&location=Barcelona&description=Something about&experience=more things&education=studies&price=30&phone=123123123&availability=1&profileimage=http://www.gutelaunetv.de/mediafiles/e1315/640-Paola.jpg" localhost:3000/profiles/
```


