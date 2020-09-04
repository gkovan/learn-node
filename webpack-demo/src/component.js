export default (text = "Hello webpack gk") => {
    const element = document.createElement("p");
  
    element.innerHTML = text;
  
    return element;
  };