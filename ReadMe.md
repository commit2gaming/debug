# Emaily App


## Versions
* ### master - Most up to date functionning App
* ### v0.0.\*
	* 1 - Integration of BE NodeJS auth and FE React Redux boilerplate
	* 2 - First Redux boilerplate store added with React Router
	* 3 - Added Materialize

### v0.0.4

Axios for AJAX requests and thunk for async behaviours
`$ npm install axios redux-thunk`

```javascript
	// client/index.js
	import reduxThunk from 'redux-thunk';

	const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

```