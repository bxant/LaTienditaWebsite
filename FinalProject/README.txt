** Make sure to have these dependencies installed **

npm install

- Also have angular installed.

TO RUN THIS PROJECT:
1. cd into this folder
2. cd into FinalProject
3. run npm install in that directory
4. run ng serve --open
5. your browser should open to 'localhost:4200'

Sources used:

- https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
- https://www.freakyjolly.com/how-to-get-multiple-checkbox-value-in-angular/#.X9V7a9hKg2w
- w3schools.com
- https://getbootstrap.com/docs/4.0/components/navbar/
- https://scotch.io/courses/build-your-first-angular-website/adding-an-imagelogo-in-angular
- https://www.youtube.com/watch?v=I317BhehZKM
- https://stackoverflow.com/questions/60526060/error-tried-to-overwrite-package-path-ivy-ngcc-bak-with-an-ngcc-back-up-fil/62371576
- https://www.w3schools.com/css/css_rwd_intro.asp 

Details about our project:

The information displayed on this website/project are not at all accurate to a real retail/e-commerce site.
This information is mock information made from Pablo Ramirez. This data is all mock data, and not at all
real. This is only to present users with the ability to make purchases in a store.

The pages on our website should also be response to screen layout as to accommodate for different
devices.

Pages in our project:

SHOP:

Shop page is the dedicated home page of our mock website. This page is mainly for users to add items
to their cart. Users are able to filter by price, type of item, and number of items displayed.


STATISTICS:

STATISTICS page is dedicated to displaying information related to the mock data in our shop.
A user can choose to filter by the type of product they want to view. The viewing of this information
is only number of items in stock. And the amount of sales they have made.

My CART:

Make purchase page is dedicated to the "cart" that a user filled up when adding to their cart.
They can remove items from their cart as well as finalizing their purchases.
Once these purchases are made, the STATISTICS page is updated with stock number decrease, and sales
increase.

Changes made to our page:
- originally had a "near me" page that would be dedicated to finding stores near you according to the
retailer information. But since our information is now mock data from our own personal site, we decided
to have the ability to make a purchase and view cart. This person can just buy willy nilly.
Theoritically user can purchase everything in our store since there is no paywall to enter card information.
Of course we believe in user privacy so this is only a representation.


** A WALK THROUGH OF OUR PROJECT **

Steps:

- user sees home screen of "la tiendita"
- user adds items to their cart from default data displayed.
- user filters to find electronics, and adds a TV to cart.
- user goes to stats page and filters for electronics and toys
- sees soccer ball and TV have stock:20 and some number of sales
- user goes to my cart page. Buys a soccer ball and a TV.
- user sees stats page and filters by electronics and toys.
- user sees that soccer ball and TV have decremented in stock by 1 and their sale increased by 1.
- user goes to secret page.
- user sees a cat image and presses "random cat"
- cats keep spawning and user is happy.
- even though cats are AI generated, cats are nice.
