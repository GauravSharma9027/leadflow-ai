import React from "react";


const GlassCard = ({
    children,
    className = "",
    hover = true,
}) => {


    return (

        <div
            className={`
                glass
                rounded-3xl
                p-6

                ${hover
                    ? "glass-hover"
                    : ""
                }

                ${className}
            `}
        >

            {children}

        </div>

    );

};


export default GlassCard;