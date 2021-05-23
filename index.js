const container = document.getElementById('root');

/*const reactElement = React.createElement('h1', {title:"Helloreact!!!", className:'heading,'}, "Hello React.js!");

console.log(reactElement);

ReactDOM.render(reactElement, container); */

// создаем компонент

class Heading extends React.Component {
  render() {
    console.log(this);
    const{name, classNameForHeading, titleForHeading, children} = this.props;
    return React.createElement(
      "h1",
    {
      title: titleForHeading,
      className: classNameForHeading,
    }, 
    `Hello ${name}!`,
    ...children,
    );
  }
}

const reactElement = React.createElement(Heading, {
  name:'React',
  titleForHeading: "Hello Everyone!",
  classNameForHeading: "heading test",
},
"test",
"lorem",
"something"
  );

ReactDOM.render(reactElement, container);

// создаем счетчик 

class Counter extends React.Component{
  constructor(props){
    super(props);
  }
  decrement (){

  }
  increment(){

  }
  render(){
    return React.createElement(
      'div', 
      null, 
      React.createElement("button", {onClick:this.decrement}, '+'),
      React.createElement("button", {onClick:this.increment}, '-') 
    )
  }
};

ReactDOM.render(React.createElement(Counter, {counter:0}), container);

