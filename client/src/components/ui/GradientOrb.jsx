import React from "react";


const GradientOrb = ({
    className = ""
}) => {


    return (

        <div

            className={`
                absolute

                rounded-full

                blur-3xl

                opacity-40

                bg-gradient-to-r

                from-purple-500

                via-blue-500

                to-cyan-400

                ${className}
            `}
        />

    );

};


export default GradientOrb;