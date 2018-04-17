# Draft
## Bootstrapping and Debugging
* [create-react-app](https://github.com/facebook/create-react-app)
```bash
npx create-react-app app-name  
cd app-name  
yarn start # you can also call npm run start
yarn run build # for making prod builds
```
* Browser dev tools
  * Javascript console
  * Inspector
  * Debugger (breakpoints)
  * Style Editor
  * Performance monitoring
  * **Network traffic monitoring**
* Console logging as method of debugging  
```javascript
console.log("yo, I'm alive")
```  
<https://medium.com/@baphemot/intro-to-debugging-reactjs-applications-67cf7a50b3dd>
## SCSS
* Why SCSS?
  * Inheritance
  * Imports
  * Loops
  * Variables
  * Nesting  

What looks like in CSS:
```css
p {
margin-bottom: 20px; font-size: 14px; line-height: 1.5;
}
footer {
	margin-bottom: 20px;
	font-size: 14px;
	line-height: 1.5;
}
```
In SCSS would look more like:
```scss
	@mixin default-type {
	margin-bottom: 20px;
	font-size: 14px;
	line-height: 1.5;
}
p {
@include default-type;
}
footer {
	@include default-type;
}
```