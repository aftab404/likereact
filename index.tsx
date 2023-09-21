// childrens are undefined because createElement is a recursive function and it will call itself until it reaches the base case and the basecase must return something.
let React = {
  createElement: (tag, props, ...children) => {
    if (typeof tag === "function") {
      return tag();
    }

    const element = {
      tag,
      props,
      children,
    };
  
    console.log(element)
    return element;
  },
};


const App = () => (
  <div className="title-div">
    <h1>Hello</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
  </div>
);

render(<App />, document.getElementById("root"));




function render(reactElement, container) {

    if(typeof reactElement === "string" || typeof reactElement === "number") {
        const textNode = document.createTextNode(String(reactElement))
        container.appendChild(textNode)
    }

    if(typeof reactElement === "object"){
        const domElement = document.createElement(reactElement.tag);

        reactElement.children.forEach(child => {
            render(child, domElement)
        })

        container.appendChild(domElement)
            
    }

}

