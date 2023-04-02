# FakeStore

---

***FakeStore - website that shows you the most insane cars!<br/>
Top G's trust us for over 20 years.<br/>
Stack: React, Node.js, Express, SCSS, PostgreSQL.<br/>
Rest Api<br/>
Figma: [Design](https://www.figma.com/file/NSWJ4okPtl5Sb1EZbLcjww/Untitled?node-id=0%3A1&t=aZPMt9jHaS0wDSBO-1)***

---

## Setup

1. Clone the package.
```
git clone https://github.com/Jazzes/FakeStore.git
```
2. Create .env file and set the settings
   -  PORT - listening port for server
   -  DB_NAME
   -  DB_USER
   -  DB_PASSWORD
   -  DB_HOST
   -  DB_PORT
   -  SECRET_KEY
   -  SECRET_WORD - word for create an admin user
3. Change the settings in `server/databaseSetup/setup.js` for connection to database.
   - URL
   - PORT
   - Secret word
4. Start the server
```
npm start
```
5. Go to `/databaseSetup` and run `setup.js`
```
node setup.js
```