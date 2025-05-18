# epic-freegames-api
This API lists all free offers from Epic Games.

## Purpose
The function of this API is filter the official backend endpoint so you can use the information provided by it with no hassle.

## Usage
- ``/v1/get/``: Returns all free offers, incl. DLCs and other stuff in a compact way. This is what you should need most of the time.
- ``/v1/get/all``: Returns all free offers (same as above), but adds more information into the request. Can include useless or empty information.

## To-Do
* [ ] ``/v1/get/games``: Returns only free offers from games.
* [ ] ``/v1/get/misc``: Returns all other stuff (all except games).
* [ ] More info to ``/v1/get/`` (needs rework of remove items logic

# License
Backend Endpoints &copy; Epic Games\
API &copy; Lucas Gabriel (lucmsilva). Licensed under the [BSD 3-Clause license](LICENSE).