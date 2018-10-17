# Context Lab

## Set Up
- Ensure you have the `context-lab` branch checked out
- `npm install` to ensure all required dependencies are present
- Run `npm run watch-css & npm run start` to start the app locally (with SASS hot-reload)

## Instructions
The objective of this exercise is to use React's Context API to set up and manage a small piece of global state. You will be adding "authentication" state to the `react-shopping-cart` example. The code on the `context-lab` branch has the basic setup needed to get started with a simple sign in page at `/login` and the rest of the application at `/`.  

The steps to take are:
1. Create a Context, a Provider component, and (optionally) a higher-order Consumer component for storing and accessing authentication state
1. Render the Provider component at the root of the application (`index.js`) to allow the entire component tree to access authentication state
1. Capture the value of the entered `username` at the sign in page and store it in global state (the Provider component) via the Context
1. Access the same `username` value via the Context in the main application page (at `/`) and display it in place of the "Sign In" link
    - When a user is signed in, show the username, otherwise show the "Sign In" link
1. (Bonus) Add functionality to "Sign Out"

### Step 1
First, you need to create the Context that the application will use to share the global authentication state throughout the component tree. Use the [createContext](https://reactjs.org/docs/context.html#reactcreatecontext) method to create it. You do not need to provide a default value at this point as you can provide it when rendering the Provider.

<details>
<summary>Solution</summary>

```js
// src/contexts/auth.js

const AuthContext = React.createContext()
```
</details>

---

Next, create a component that will wrap a passed `children` component in the `Provider` component from the Context you created before. This is the component you will render at the root of the application to provide access to authentication state. 

<details>
<summary>Solution</summary>

```js
// src/contexts/auth.js

export class AuthProvider extends Component {
  render() {
    return (
      <AuthContext.Provider>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
```
</details>

---

Then, build into this component the state and API for managing authentication:

<details>
<summary>Solution</summary>

```js
// src/contexts/auth.js

export class AuthProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      username: null
    }
  }

  logIn = (username) => {
    this.setState({
      authenticated: true,
      username: username
    })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          logIn: this.logIn,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
```
</details>  

---

Finally, to make it easier to access the values and methods passed by the Provider, define a [Higher-Order Component](https://reactjs.org/docs/higher-order-components.html) that uses the Context's `Consumer` component to unpackage these values and methods and add them as `props` to a passed component. While you could use the Context's `Consumer` component directly in our other components to do this, this abstraction will make the code more readable and DRY.

<details>
<summary>Solution</summary>

```js
// src/contexts/auth.js

export const withAuth = (Component) => {
  return (props) => (
    <AuthContext.Consumer>
      {(auth) => <Component auth={auth} {...props} />}
    </AuthContext.Consumer>
  )
}

// `auth` is the object literal passed as `value` to `AuthContext.Provider`
```
</details>  



### Step 2
Now render your custom Provider component at the root of the application (`index.js`) to allow the entire component tree to access the passed values. You could render the Provider anywhere in the component tree, but only components rendered beneath it in the tree will be able to access its values.

<details>
<summary>Solution</summary>

```js
// src/index.js

// ...

import { AuthProvider } from './contexts/auth'

const Routes = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

// ...
```
</details>  



### Step 3
Now connect the `Login` component via the Context and use the passed login functionality to set the `username` in global state (in the custom Provider component) when the user submits the form.
> Optionally use React Router's `history.push` to redirect to the main app on login.

<details>
<summary>Solution</summary>

```js
// src/containers/Login/Login.js

import { withAuth } from '../../contexts/auth'

// ...

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.auth.logIn(this.state.username)
    this.props.history.push('/')
  }

// ...

export default withAuth(Login);
```
</details>  



### Step 4
Finally, update the `Header` component to retrieve authentication state via the Context and conditionally show the username instead of the "Sign In" link.

<details>
<summary>Solution</summary>

```js
// src/components/Header.js

import { withAuth } from '../contexts/auth';

// ...

const navLinks = (props) => {
  const { authenticated, username } = props.auth

  if (authenticated) {
    return (
      <div className="header-nav-item">
        <span>{username}</span>
      </div>
    )
  } else {
    return <Link to="/login" className="header-nav-item">Sign In</Link>
  }
}

const Header = (props) => {
  return (
    <header className="header">
      <nav>
        {navLinks(props)}      
      </nav>
    </header>
  )
}

export default withAuth(Header);
```
</details>  



### Bonus
In the `Header`, next to the username, provide a button to "Log Out" when there is a user logged in. Update the custom Provider component with a method to log out, pass this method via the Context, and call it in the `Header`. Check out the `context-lab-solution` branch for the full solution. 


## Useful Resources
- [Context Documentation](https://reactjs.org/docs/context.html)
- [React's Context API explained: Provider and Consumer](https://www.robinwieruch.de/react-context-api/)
