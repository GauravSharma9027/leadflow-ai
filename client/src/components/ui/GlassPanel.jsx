import React from "react";


const GlassPanel = ({
    children,
    className = ""
}) => {


    return (

        <div

            className={`
                relative
                overflow-hidden

                rounded-3xl

                border
                border-white/10

                bg-white/5

                backdrop-blur-2xl

                shadow-2xl

                ${className}
            `}
        >

            {children}

        </div>

    );

};


export default GlassPanel;