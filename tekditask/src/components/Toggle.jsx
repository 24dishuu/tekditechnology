import React,{useState} from "react";


function Toggle(){
const [Visible, setVisible] = useState(false);

const toggleVisibility = () => {
  setVisible(!Visible);
};

return (
  <div>
    <h1>Toggle</h1>
    <button onClick={toggleVisibility}>
      {Visible ? 'Hide Content' : 'Show Content'}
    </button>
    {Visible && <p>This is the hidden content.</p>}

                </div>
            
        )
    }

export default Toggle;


