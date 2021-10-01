import React from "react";

import Forma from "./Forma";
import FormaUI from "./FormUI";
function Header(props) {
    return (
        <div>
            {props.name.map((item, index) => <p key={index}>{item.a}</p>)}
            <Forma />
            <FormaUI />

        </div>
    )
}

export default Header;