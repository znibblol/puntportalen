# PuntPortalen

### Rebuilding puntportalen from the ground up.

---

### How to install.

1. In server, make a copy of .env.example and rename it to .env
2. run docker-compose up --build
3. run docker exec pp_server npm run migrate

You are up and running...

### Todo:

- [ ] Update Beerbets when a new beerbet has been posted (wrong with the vuex mutations here)

---

- [x] Create server folder
  - [x] Init npm
  - [x] Add express morgan cors body-parser helmet?
  - [x] Add nodemon to dev-dependencies
  - [x] Create 'Hello World' route

---

- [x] Create client folder
  - [x] Vue create clinet
  - [x] Add a simple bootstrap theme
  - [x] Create simple homepage layout

---

- [x] Add DB to server

  - [x] Add knex perk joi
  - [ ] Create documents migration
  - [ ] Create documents model
    - [ ] Create route to POST document to db
      - [ ] Validate document with joi
            [ ] doc_name
            [ ] doc_type
      - [ ] Insert document to db and public/documents
      - [ ] Respond with inserted document
    - [ ] Create route to DELETE document
    - [ ] Create route to GET documents
  - [x] Create Beerbet migration and seeds
  - [ ] Create Beerbet model
    - [ ] Create route to POST beerbet to db
      - [ ] Validate beerbet with joi
        - [ ] condition
        - [ ] author
        - [ ] type_of
        - [ ] completed
        - [ ] takers
        - [ ] secret
        - [ ] payed
        - [ ] win/lose
    - [ ] Create route to PUT beerbet
      - [ ] Validate beerbet with joi
        - [ ] condition
        - [ ] author
        - [ ] type_of
        - [ ] completed
        - [ ] takers
        - [ ] secret
        - [ ] payed
        - [ ] win/lose
    - [ ] Create route to DELETE beerbet
    - [ ] Create route to GET beerbets
  - [ ] Create pickem model
    - [ ] Create route to POST matchups
      - [ ] Validate matchups with joi
        - [ ] home_team
        - [ ] visiting_team
        - [ ] date
        - [ ] time
    - [ ] Create route to POST pickem answers
    - [ ] Create route to PUT pickem answers
    - [ ] Create route to GET pickem answers

- [ ] Create new document form on client
  - [ ] Submit form - fetch POST to server
  - [ ] Display errors
  - [ ] Show new document on page
- [ ] Create new beerbet form on client
  - [ ] Submit form - fetch POST to server
  - [ ] Display errors
  - [ ] Show new beerbet on page
- [ ] Create update beerbet form on page
  - [ ] Submit from - fetch PUT to server
  - [ ] Display errors
  - [ ] Show updated beerbet on page
- [ ] Create delete button form on page
  - [ ] Submit form - fetch DELETE to server
  - [ ] Display errors
- [ ] The same for pickem

- [ ] Make autorization
