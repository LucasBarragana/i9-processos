'use client'

import Image from "next/image"

export default function Tecs() {
    return (
        <div className="max-w-screen-2xl mx-auto text-center my-20">
            <h1 className="text-3xl font-bold mb-8 text-white">
                MELHORAR E INOVAR COM AS TENDÊNCIAS <br />
                TECNOLÓGICAS
            </h1>
            <div className="flex justify-center">
                <div>
                    <div className="grid grid-cols-4 gap-40 pr-40">
                        <Image src="/tec1.png" width={98} height={98} alt="tec1" className="mx-auto" />
                        <Image src="/tec3.png" width={98} height={98} alt="tec3" className="mx-auto" />
                        <Image src="/tec5.png" width={98} height={98} alt="tec5" className="mx-auto" />
                        <Image src="/tec7.png" width={98} height={98} alt="tec7" className="mx-auto" />
                    </div>
                    <div className="grid grid-cols-4 gap-40 -mt-4 pl-40">
                        <Image src="/tec2.png" width={98} height={98} alt="tec2" className="mx-auto" />
                        <Image src="/tec4.png" width={98} height={98} alt="tec4" className="mx-auto" />
                        <Image src="/tec6.png" width={98} height={98} alt="tec6" className="mx-auto" />
                        <Image src="/tec8.png" width={98} height={98} alt="tec8" className="mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}
