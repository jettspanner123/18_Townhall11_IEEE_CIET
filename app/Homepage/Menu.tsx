import React from "react";
import {ACCENT_COLOR, TEXT_ACCENT} from "@/app/constants";

const Menu = (): React.JSX.Element => {
    return (
        <section className={`h-screen w-screen bg-white`}>
            <h1
                style={{
                    color: ACCENT_COLOR
                }}
                className={`text-[4rem] text-center pt-10`}>
                MEnu
                <span
                    style={{
                        color: TEXT_ACCENT
                    }}
                    className={'ml-5'}>
                    speacility
                </span>
            </h1>


            <div className={`flex w-full h-[80%] mt-10`}>
                <div className={`flex-1 h-full`}>
                    <h1 style={{color: ACCENT_COLOR}} className={`text-[3rem] text-center`}>Italian Traditional
                        Dishes</h1>
                    <MenuItem name={"Lorem ipsum dolor sit amet............10%"} desc={"lorem ipsum dolor sit amet"}/>
                    <MenuItem name={"Lorem ipsum dolor sit amet............10%"} desc={"lorem ipsum dolor sit amet"}/>
                    <MenuItem name={"Lorem ipsum dolor sit amet............10%"} desc={"lorem ipsum dolor sit amet"}/>
                    <MenuItem name={"Lorem ipsum dolor sit amet............10%"} desc={"lorem ipsum dolor sit amet"}/>
                    <MenuItem name={"Lorem ipsum dolor sit amet............10%"} desc={"lorem ipsum dolor sit amet"}/>
                    <MenuItem name={"Lorem ipsum dolor sit amet............10%"} desc={"lorem ipsum dolor sit amet"}/>
                </div>

                <div className={`flex-1 h-full`}>
                    <h1 style={{color: ACCENT_COLOR}} className={`text-[3rem] text-center`}>Traditional
                        Dishes
                    </h1>


                    <MenuItem name={"Lorem ipsum dolor sit amet............10%"} desc={"lorem ipsum dolor sit amet"}/>
                    <MenuItem name={"Lorem ipsum dolor sit amet............10%"} desc={"lorem ipsum dolor sit amet"}/>
                    <MenuItem name={"Lorem ipsum dolor sit amet............10%"} desc={"lorem ipsum dolor sit amet"}/>


                    <h1 style={{color: ACCENT_COLOR}} className={`text-[3rem] text-center`}>Drinks
                    </h1>


                    <MenuItem name={"Lorem ipsum dolor sit amet............10%"} desc={"lorem ipsum dolor sit amet"}/>
                    <MenuItem name={"Lorem ipsum dolor sit amet............10%"} desc={"lorem ipsum dolor sit amet"}/>


                </div>
            </div>
        </section>
    )
}

const MenuItem = ({name, desc}: { name: string, desc: string }): React.JSX.Element => {
    return (
        <div className={`text-center poppins`}>
            <h1 className={`text-[2rem] `}>{name}</h1>
            <h1 className={`text-[1rem] leading-none text-gray-300`}>{desc}</h1>
        </div>
    )
}

export default Menu;