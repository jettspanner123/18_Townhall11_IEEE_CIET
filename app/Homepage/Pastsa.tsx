import React from "react";
import {ACCENT_COLOR, BACKGROUND_COLOR, SECONDARY_COLOR, TEXT_ACCENT} from "@/app/constants";
import Image from "next/image";
import Img from "@/app/Homepage/pastatwo.png";

const Pasta = (): React.JSX.Element => {
    return (

        <section
            style={{background: BACKGROUND_COLOR}}
            className={`h-screen w-screen flex p-10 px-[10rem]`}>

            <div className={`flex-1 h-full flex justify-center items-center`}>

                <div

                    style={{
                        border: `2rem solid ${SECONDARY_COLOR}`
                    }}

                    className={`h-[25rem] relative flex rounded-full overflow-hidden justify-center items-center w-[25rem] bg-red-300`}>


                    <Image
                        style={{
                            scale: 1.5
                        }}
                        className={`absolute left-1/2 -translate-x-[45%]`}
                        src={Img} alt={""}/>

                </div>
            </div>

            <div className={`flex-1 h-full flex flex-col justify-center items-end text-right`}>
                <h1
                    style={{
                        color: TEXT_ACCENT
                    }}
                    className={`text-[10rem]`}>It's time</h1>
                <h1
                    style={{
                        color: ACCENT_COLOR
                    }}
                    className={`text-[10rem] leading-[1px]`}>For pasta</h1>

                <h1
                    style={{
                        color: TEXT_ACCENT
                    }}

                    className={`leading-[10rem] text-[3rem]`}
                >
                    best italian food in town
                </h1>

                <h1
                    style={{
                        color: TEXT_ACCENT
                    }}

                    className={`text-[1.5rem] leading-none text-left w-[80%] poppins`}
                >
                    Hello my name is Uddeshya singh,
                    <br/>
                    i am here with my gay friends like utsav and tushar.
                </h1>
            </div>
        </section>
    )
}

export default Pasta;