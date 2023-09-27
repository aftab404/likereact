// childrens are undefined because createElement is a recursive function and it will call itself until it reaches the base case and the basecase must return something.


let state;


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

    return element;
  },

  

  useState: (initialValue) => {
    state = state || initialValue;
    
   
    const setState = (newValue) => {
      state = newValue;
      console.log(state)
      rerender();
      
    };
   
    console.log(state)
    return [state, setState];
  },
};

const App = () => {
  const [name, setName] = React.useState("John");

  return (
    <div>
      <h1 className="hello">Hello, {name}</h1>
      <input
        value={name}
        type="text"
        placeholder="enter ur name"
        onchange={(e) => setName(e.target.value)}
      />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
    </div>
  );
};

function render(reactElement, container) {
  if (typeof reactElement === "string" || typeof reactElement === "number") {
    const textNode = document.createTextNode(String(reactElement));
    container.appendChild(textNode);
  }

  if (typeof reactElement === "object") {
    const domElement = document.createElement(reactElement.tag);

    if (reactElement.props) {
      Object.keys(reactElement.props).forEach((propName) => {
        domElement[propName] = reactElement.props[propName];
      });
    }

    reactElement.children.forEach((child) => {
      render(child, domElement);
    });

    container.appendChild(domElement);
  }
}

render(<App />, document.getElementById("root"));

const rerender = () => {
  document.getElementById("root").innerHTML = "";
  render(<App />, document.getElementById("root"));
};
