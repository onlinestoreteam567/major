import React, { useState } from "react";

const Dropdown =  () => {
    const DropdownItems = ["Карл", "У", "Клари", "Вкрав", "Корали"];
    const [open, setOpen] = useState(false);
    return( 
        <div className="dropdownMenu">
            <p
            onClick={() => setOpen(!open)}
            >Скоромовка</p>
            {open && (
                <ul>

                {
                DropdownItems.map((drditems) => (
                    <li onClick={() => setOpen(!open)} key={drditems}>{drditems}</li>
                ))
                }
            </ul>
            )}
            
        </div>
);
};

export default Dropdown; 