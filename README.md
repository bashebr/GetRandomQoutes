# A simple app that generates random quote

This simple app is based on the API provided from [Quotable.io](https://api.quotable.io/random)

The app demonstrates how to use `useState` and `useEffect`

The following two hooks are used:

### `useState`

`useState` is a hook that lets you add state to a functional component. It accepts an argument which is the initial value of the state property and returns the current value of state property and a method which is capable of updating that state property.

### `useEffect`


The `useEffect` Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. useEffect(<function>, <dependency>)

This app is bootstrapped using `create-react-app`

The app is deployed at vercel [RandomQuotes](random-quotes-pi.vercel.app)