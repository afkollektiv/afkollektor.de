# AfKollektor.de

AfKollektor.de git repository. This is where the magic happens.

## Building

- You will need the `discount` program for markdown generation. It should be available in your distros package db.
- For building the index file, run `make index` (this will create index.html in `build/`).
- The build server will run `make` on every push and copy everything from `build/` to the webroot of afkollektor.de. 
