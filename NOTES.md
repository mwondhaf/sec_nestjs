<!-- auth flow  -->

<!-- urls  -->

a destination email is supplied in the body with a destination field

a magic link is sent to the destination email... the link contains the url of the frontend

a user clicks on the magic link and is redirected to the main app/site

the main app/site makes a get request to the site and obtains a token that it then stores in the cookies

##2. user can have many profiles

profile should have id of user

- should have property/organisation of user
