import React from "react";


const Button3D = ({

    children,

    variant = "primary",

    className = "",

    ...props

}) => {


    const variants = {


        primary:

            `
        bg-gradient-to-br
        from-purple-500
        to-indigo-600

        shadow-[0_8px_0_#312e81]

        hover:translate-y-1

        hover:shadow-[0_4px_0_#312e81]
        `,


        secondary:

            `
        bg-white/10

        border
        border-white/20

        shadow-[0_8px_0_rgba(255,255,255,0.1)]

        hover:translate-y-1
        `

    };




    return (

        <button

            {...props}

            className={`
            
                px-6
                py-3

                rounded-2xl

                text-white

                font-semibold

                transition-all
                duration-200

                active:translate-y-2

                ${variants[variant]}

                ${className}

            `}
        >

            {children}

        </button>

    );

};


export default Button3D;