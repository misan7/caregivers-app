# Calm and Care - CRUD

This repository contains a `Full Stack` project. The main theme is a caregivers profile searcher.

This project responds to localhost:3000/


## Available actions

### [**GET**] - `getAll`

To see all profiles: 

`curl localhost:3000/profiles/`


### [**POST**] - `addProfile`

To add a Profile, there are just 2 properties required: `name` and `location`. The rest are optional to fill the profile.

```bash
curl -X POST --data "name=Paulinato&location=Barcelona&description=Something about&experience=more things&education=studies&price=30&phone=123123123&availability=1&profileimage=http://www.gutelaunetv.de/mediafiles/e1315/640-Paola.jpg" localhost:3000/profiles/
```

### [**DELETE**] - `deleteProfile`

To delete a Profile:

```bash
curl -X DELETE localhost:3000/profile/593692b67ba89d0d08654d54
```

And console will send you next message:

`{"msg":"profile with id: 593692b67ba89d0d08654d54 -> removed properly"}`

### [**PUT**] - `updateProfile`

Updating info from profile:

```bash
λ curl -X PUT --data "name=Paquita" localhost:3000/profile/59365a85fb017f87847d4020
```

And console will send you next message:

`{"msg":"profile with id 59365a85fb017f87847d4020 updated properly"}`

