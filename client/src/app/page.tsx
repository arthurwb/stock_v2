import Image from "next/image";
import React from "react";
import { Button } from "antd";

export default function Home() {
    return (
        <main>
            <div className="flex flex-col px-4 w-screen h-screen bg-black">
                <div className="flex flex-row basis-2/12 p-2">
                    <div className="basis-5/12 m-2"></div>
                    <div className="basis-2/12 m-2" style={{backgroundColor: "#FF0000FF"}}></div>
                    <div className="flex flex-col basis-5/12 m-2">
                        <div className="flex flex-row basis-6/12">
                            <div className="basis-6/12"></div>
                            <div className="basis-6/12 bg-grey"></div>
                        </div>
                        <div className="basis-6/12"></div>
                    </div>
                </div>
                <div className="flex flex-col basis-10/12 px-2 pt-2 bg-darkgrey">
                    <div className="flex flex-col basis-11/12 space-y-2">
                        <div className="basis-3/12 flex flex-row">  
                            <div className="basis-2/12 bg-grey"></div>
                            <div className="basis-10/12 p-2 bg-lightgrey">
                                <div className="w-full h-full bg-grey"></div>
                            </div>
                        </div>
                        <div className="basis-3/12 flex flex-row">  
                            <div className="basis-2/12 bg-grey"></div>
                            <div className="basis-10/12 p-2 bg-lightgrey">
                                <div className="w-full h-full bg-grey"></div>
                            </div>
                        </div>
                        <div className="basis-3/12 flex flex-row">  
                            <div className="basis-2/12 bg-grey"></div>
                            <div className="basis-10/12 p-2 bg-lightgrey">
                                <div className="w-full h-full bg-grey"></div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/12 bg-black">
                        <div className="flex flex-row items-center h-full w-full text-white font-extrabold text-3xl">
                            <span className="px-2 text-orange">test@RT-25-SW$~: </span>
                            <input className="flex-1 h-full focus:outline-none bg-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}