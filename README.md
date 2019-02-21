# Work & Co Web Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To start a development server:

```
npm start
```

## Tasks

Please publish your work to a fork of this repo. You're welcome (but not required) to add any libraries you think would be helpful.

Note: You're encouraged to show your work by including multiple commits - we'll be looking through your fork's git history.

1. [Implement Responsive Design](/tasks/01-responsive-design.md)
2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
3. [Hook Up Product API](/tasks/03-product-api.md)

Please also update this README file: we'd love to see notes on your decision-making process, links to the most exciting pieces of code, or anything else that will give us additional context when reviewing your assessment.

---
# Tricia Leach

## Notes

- This is my first time using React or Redux. I spent most of the first part of the week familarizing myself with the codebase, and learning online. Instead of pretending that I have something earth-shattering to share about React or Redux after a week, I'm going to give you some insight into my process of learning something new.
- I look for short overview tutorials or articles first, and then if I have time, I'll dig into something longer. I also like to learn by creating new Git branches and adjusting/breaking things until I understand them.
- The React/Redux sites have great documentation. The [Three Fundamental Principles](https://redux.js.org/introduction/three-principles) and [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) were a great start.
- The first thing I did with the codebase was take note of the directories (actions, constants, reducers, components). This gave me a place to start with my learning.
- I also took note of what I did know (ES6, React is component based, that Redux store manages state for the entire app), and what what conventions were being used so I could match it as much as possible.
- I took care of the cart enhancements first. After I got an action, reducer, action type hooked up and somewhat working, I inspected the actions or errors logged to console, previous state vs next state until I got the feature fully working. I also installed the React and Redux dev tools so I could utilize those.
- In retrospect it may have been easier to fetch the new product data first so I didn't have to fix bugs related to that change, but having to do that did give me some extra practice.

## Wrap up
- Things I would do if I have more time:
  - Fix or add to prop-types validation. I tried to do that when I noticed it, but I know it needs more.
  - More components.
  - Get rid of some container divs. I had trouble getting React.Fragment to work, and needed to move on, so I ended up with more divs than I usually do.
  - More finessing cart responsiveness.
  - Try CSS modules. I knew I would not have enough time to learn a new CSS method, so I made the choice to spend more time studying React/Redux and just import my CSS. I can see where modules would be helpful, particularly with some tricky spots where the Product component is shared between cart/product page.
- I'm very happy I was able to take care of the cart enhancements and fetching the product data. I also added a product counter to the cart link in the header. Overall, a successful experience personally, and while I have a lot more to learn about React and Redux, this was a great start.

Thanks so much for your time reviewing this! 👋

~ Tricia

## Todo
### Task #1 (Responsive Design)
- [x] Global styles
- [x] Update/add components as needed to match design
- [x] Style products
- [x] Style cart
- [x] Create cart popup
- [x] Import Chivo font
- [x] Add product photos
- [x] Check hover status
- [x] Style breakpoint 1
- [x] Style breakpoint 2

### Task #2 (Enhance Cart Functionality)
- [x] Add quantity
- [x] Add plus and minus buttons
- [x] Add "Remove" text
- [x] Add functionality for increment/decrement
- [x] Add functionality to remove item

### Task #3 (Hook Up Product API)
- [x] Fetch new product data
- [x] Hook up new action/reducer
- [x] Test/debug