import React from "react";
import {ACCENT_COLOR, BACKGROUND_COLOR, SECONDARY_COLOR, TEXT_ACCENT} from "@/app/constants";
import Image from "next/image";
import Img from "@/app/Homepage/pastaone.png";

const Ingredients = (): React.JSX.Element => {
    return (
        <section
            style={{background: "white"}}
            className={`h-screen w-screen flex p-10 px-[10rem]`}>

            <div className={`flex-1 h-full flex justify-center items-center`}>


                <div className={`flex-1 h-full flex flex-col justify-center items-start text-right`}>


                    <h1
                        style={{
                            color: TEXT_ACCENT
                        }}

                        className={`text-[1.5rem] text-left w-[80%] poppins`}
                    >
                        Fresh and filling ingredients
                        <br/>
                        at your doorsteps, Kha kha ke mota ho jaiga
                        <br/>
                        Gaurenty hai hamari.

                    </h1>
                    <h1
                        style={{
                            color: TEXT_ACCENT
                        }}
                        className={`text-[7rem]`}>Fresh</h1>
                    <h1
                        style={{
                            color: ACCENT_COLOR
                        }}
                        className={`text-[7rem] leading-[1px]`}>Ingredients</h1>

                </div>

                <div
                    style={{
                        border: `2rem solid ${SECONDARY_COLOR}`
                    }}
                    className={`h-[25rem] relative flex rounded-full overflow-hidden justify-center items-center w-[25rem] bg-gray-200`}>

                    <Image
                        style={{
                            scale: 1.8,
                            transform: `translate(-10rem)`,

                        }}
                        className={`absolute left-1/2 -translate-x-[45%]`}
                        src={Img} alt={""}/>

                </div>
            </div>


        </section>
    )
}

export default Ingredients;