import { useState } from "react";

const Dropdown =  () => {
    const DropdownItems = ['Home', 'About', 'Main', 'Story'];
    const [open, setOpen] = useState(false);
    return(
        <div className="dropdownMenu"
            tabIndex={0}
            onBlur={() => {setOpen(false)}}
            onClick={() => setOpen(!open)}>
            <p>Parts</p>
            {open && (
                <ul>
                {
                DropdownItems.map((item, index) => (
                    <li onClick={() => setOpen(!open)} key={index}>{item}</li>
                ))
                }
            </ul>
            )}
            
        </div>
);
};

export default Dropdown; 