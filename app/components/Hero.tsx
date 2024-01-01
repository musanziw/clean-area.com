'use client';
import hero from '@/public/hero.webp';

import Topbar from "@/app/shared/components/Topbar";
import Link from "next/link";

export default function Hero() {
    return (
        <main className={"relative bg-hero bg-center bg-cover"}>
            <Topbar/>
            <div
                className={"p-8 h-full py-28 flex flex-col items-center justify-center bg-slate-800/70 text-white mx-auto"}>
                <div className={"flex flex-col justify-center items-center gap-6 mx-auto md:max-w-screen-lg"}>
                    <h2 className={`text-2xl md:text-4xl text-gray-50 font-bold mt-6 md:w-2/3`}>
                        Clean area: où confiance et tranquillité rencontrent les meilleures baby-sitters et nounous.
                    </h2>
                    <div className={'md:w-2/3 mb-3'}>
                        <p className={"md:text-xl mb-6"}>
                            Offrez-vous du temps libre en toute confiance - réservez dès maintenant une garde
                            d&apos;exception
                            avec Clean Area et profitez de moments précieux en toute sérénité !
                        </p>
                        <Link href={'/search'} className={'inline-block bg-white px-6 py-2 rounded-md text-gray-950 font-medium hover:bg-gray-200'}>
                            Réserver un rendez-vous
                        </Link>
                    </div>
                </div>
            </div>

        </main>
    )
}