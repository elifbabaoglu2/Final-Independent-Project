# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `yarn start`

### `yarn test`

### `yarn build`

### `yarn eject`


### Development 
The organization of the react application is simple. We have an App.js component which takes in FilteredList component (FilteredList.js) and FilteredList takes in DisplayList Component (DisplayList.js).

App.js is our main component, we pass in FilteredList component and we declare our list here and pass in the list we create in App.js to the FilteredList component. This main component renders the web application.  Filtered.js file has two components inside one of them is the filteredList component and the other one is the headerBar component. FilteredList component includes the filtering and sorting functions. When we click a button on the main page, depending on which filtering or sorting option we clicked on the header, one of these functions inside FiltereList component gets fired. HeaderBar component is essentialy a NavBar from BootStrap and this component displays all the options for filtering and sorting. FilteredList.js file also takes in DisplayList component so that we can display the products and that the headerbar and the filteredlist components can interact with the products with the following properties(price, popularity, name, img etc..). DisplayList.js file has three components inside. One of them is DisplayList component and the other one is CartComponent, display list component displays and organizes the products and CardComponent organizes one product display. The last component is the checkout button which is responsible for displaying totalSpending and keep a track of the items that are added to the card. 

### How data is passed down through components
App component has a list of the lipsticks with the following properties: price, popularity, name, img. The state is kept in the FilteredList component. The main component is the parent of the FilteredList component. So the list data is passed down to its children which is FilteredList copmonent. Since state is kept in the filteredComponent the data passes to the state. And DisplayList is FiltereList component's children so the data passes from FilteredList to DisplayList and the HeaderBar component. Since DisplayList component has all the information necessary, displayList class passes down the information to checkout button and cardComponent.

### User Interactions 
Whenever user clicks a button the state which is kept in the FilteredList component changes. Whenever we the user click to filter or sort the items, the state changes and FilteredList component transfers this information to its children. 



