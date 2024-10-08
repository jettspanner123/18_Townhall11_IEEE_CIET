import React from "react";
import {SECONDARY_COLOR, TEXT_ACCENT} from "@/app/constants";

const Subscription = (): React.JSX.Element => {
    return (
        <section style={{background: SECONDARY_COLOR}} className={`w-screen h-screen flex flex-col justify-center items-center`}>
            <h1 className={`text-[15rem] text-white`}>10% off</h1>
            <h1 className={`text-white text-[5rem]`}>home order and newzletter subscription</h1>
            <p
                style={{
                    color: TEXT_ACCENT
                }}
                className={`font-light text-white leading-none text-[1.5rem] `}>newzletter made only for you. Chicken Leg Piece. Ye sab mat padh bhai, padhai kar.</p>
        </section>
    )
}

export default Subscription;