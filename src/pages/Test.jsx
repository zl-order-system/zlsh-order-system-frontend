import { useState } from "react";

function Test() {
    const [className, change] = useState("");

    const handleClick = () => {
        console.log("s")
        change("animate-spin");
    };

    return <div className={"fixed top-[50%] left-[50%] bg-black w-28 h-28 " + className} onClick={handleClick}></div>;
}

export default MyComponent;
// animate-slideIn


function MyComponent() {
    const [divList, setDivList] = useState([
      { id: 1, content: 'Div 1' },
      { id: 2, content: 'Div 2' },
      { id: 3, content: 'Div 3' },
    ]);
  
    const updateDivContent = (key, newContent) => {
      setDivList((prevList) =>
        prevList.map((item) =>
          item.id === key ? { ...item, content: newContent } : item
        )
      );
    };
  
    return (
      <div>
        {divList.map((item) => (
          <div key={item.id}>
            {item.content}
            <button onClick={() => updateDivContent(item.id, 'New Content')}>
              Update
            </button>
          </div>
        ))}
      </div>
    );
  }