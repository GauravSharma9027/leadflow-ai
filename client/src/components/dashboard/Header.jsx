import React from "react";

import {
    Bell,
    Search
} from "lucide-react";


const Header = () => {


    return (

        <header

            className="

lg:ml-80

mx-5
mt-5

glass

rounded-3xl

px-6
py-4

flex

items-center

justify-between

"

        >



            {/* Search */}

            <div

                className="
flex
items-center
gap-3

bg-white/5

border
border-white/10

rounded-2xl

px-4
py-2

"

            >


                <Search
                    size={20}
                    className="text-zinc-400"
                />


                <input

                    placeholder="Search leads, campaigns..."

                    className="
bg-transparent
outline-none
text-sm
w-60

text-white

placeholder:text-zinc-500

"

                />


            </div>





            {/* Right */}

            <div

                className="
flex
items-center
gap-4
"

            >


                <button

                    className="
w-11
h-11

rounded-2xl

glass

flex
items-center
justify-center

hover:scale-105

transition

"

                >

                    <Bell size={20} />

                </button>



                <div

                    className="
w-11
h-11

rounded-2xl

bg-gradient-to-br
from-purple-500
to-cyan-500

flex
items-center
justify-center

font-bold

"

                >

                    S

                </div>


            </div>


        </header>


    )


}


export default Header;