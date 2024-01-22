import React from "react"
import ReactDOM from "react-dom/client"

//core REACT

// var heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "First React code!!😍"
// );

// console.log(heading); //OBJECT

// JSX is not react , similar to react with xml like syntax
// JSX => react.createElement =>  react.createElement - JS object - HtmlElement(render)

// const JSXheading= <h1 className="head">React using JSX</h1>

const Title = ()=>{
    return <h1 className="title">React Component</h1>
}

console.log(Title);

//composition component
const HeadingComponent =()=>{
    return(
        <div className="container">
        <Title />
        <h1 className="heading">React Composition component</h1>
    </div>
    );
    
}

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

