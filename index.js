const container = document.getElementById('root');

const reactElement = React.createElement('h1', {title:"Helloreact!!!", className:'heading,'}, "Hello React.js!");

console.log(reactElement);

ReactDOM.render(reactElement, container);
