// var heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "First React code!!😍"
// );

// console.log(heading); //OBJECT

// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement(
    "div",
    {id:"parent"},[
        React.createElement("div", { id: "firstChild" }, [
            React.createElement("h2", {}, " h1 tag"),
            React.createElement("h3", {}, " h2 tag")]),

        React.createElement("div", { id: "SecondChild" }, [
            React.createElement("h2", {}, "first h1 tag"),
            React.createElement("h3", {}, "first h2 tag")])
            
   

        
      ]);


console.log(parent);

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
