'use client'

import Image from "next/image"

export default function Tecs() {
    return (
        <div className="max-w-screen-2xl mx-auto text-center my-20">
            <h1 className="lg:text-3xl font-bold mb-8 text-white">
                MELHORAR E INOVAR COM AS TENDÊNCIAS <br />
                TECNOLÓGICAS
            </h1>
            <div className="flex justify-center">
                <div>
                    <div className="grid grid-cols-4 gap-10 pr-10 sm:gap-20 sm:pr-20 md:gap-30 md:pr-30 lg:gap-40 lg:pr-40">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 relative group">
                            <Image src="/tec1.png" layout="responsive" width={98} height={98} alt="tec1" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        </div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 relative group">
                            <Image src="/tec3.png" layout="responsive" width={98} height={98} alt="tec3" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        </div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 relative group">
                            <Image src="/tec5.png" layout="responsive" width={98} height={98} alt="tec5" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        </div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 relative group">
                            <Image src="/tec7.png" layout="responsive" width={98} height={98} alt="tec7" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 -mt-4 gap-10 pl-10 sm:gap-20 sm:pl-20 md:gap-30 md:pl-30 lg:gap-40 lg:pl-40">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 relative group">
                            <Image src="/tec2.png" layout="responsive" width={98} height={98} alt="tec2" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        </div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 relative group">
                            <Image src="/tec4.png" layout="responsive" width={98} height={98} alt="tec4" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        </div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 relative group">
                            <Image src="/tec6.png" layout="responsive" width={98} height={98} alt="tec6" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        </div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 relative group">
                            <Image src="/tec8.png" layout="responsive" width={98} height={98} alt="tec8" className="mx-auto transition-transform transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
