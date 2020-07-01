# PuntPortalen
### Goin to rebuild puntportalen from the ground up.
---

* [ ] Create server folder
    * [ ] Init npm
    * [ ] Add express morgan cors body-parser helmet?
    * [ ] Create 'Hello World' route
---
* [ ] Create client folder
    * [ ] Vue create clinet
    * [ ] Add a simple bootstrap theme
    * [ ] Create simple homepage layout
---
* [ ] Add DB to server
    * [ ] Add monk joi
    * [ ] Create documents model
        * [ ] Create route to POST document to db
            * [ ] Validate document with joi
                [ ] doc_name
                [ ] doc_type
            * [ ] Insert document to db and public/documents
            * [ ] Respond with inserted document
        * [ ] Create route to DELETE document
        * [ ] Create route to GET documents
    * [ ] Create Beerbet model
        * [ ] Create route to POST beerbet to db
            * [ ] Validate beerbet with joi
                * [ ] condition
                * [ ] author
                * [ ] type_of
                * [ ] completed
                * [ ] takers
                * [ ] secret
                * [ ] payed
                * [ ] win/lose
        * [ ] Create route to PUT beerbet
            * [ ] Validate beerbet with joi
                * [ ] condition
                * [ ] author
                * [ ] type_of
                * [ ] completed
                * [ ] takers
                * [ ] secret
                * [ ] payed
                * [ ] win/lose
        * [ ] Create route to DELETE beerbet
        * [ ] Create route to GET beerbets        
    * [ ] Create pickem model
        * [ ] Create route to POST matchups
            * [ ] Validate matchups with joi
                * [ ] home_team
                * [ ] visiting_team
                * [ ] date
                * [ ] time
        * [ ] Create route to POST pickem answers
        * [ ] Create route to PUT pickem answers
        * [ ] Create route to GET pickem answers

* [ ] Create new document form on client
    * [ ] Submit form - fetch POST to server
    * [ ] Display errors
    * [ ] Show new document on page
* [ ] Create new beerbet form on client
    * [ ] Submit form - fetch POST to server
    * [ ] Display errors
    * [ ] Show new beerbet on page
* [ ] Create update beerbet form on page
    * [ ] Submit from - fetch PUT to server
    * [ ] Display errors
    * [ ] Show updated beerbet on page
* [ ] Create delete button form on page
    * [ ] Submit form - fetch DELETE to server
    * [ ] Display errors
* [ ] The same for pickem 

* [ ] Make autorization
    
