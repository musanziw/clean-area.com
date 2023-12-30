import type {Metadata} from "next";
import {DM_Sans} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const dmSans = DM_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Clean Area | Trouvez des nounous et des baby-sitters près de chez vous",
    description: "Une plateforme de mise en relation entre parents et baby-sitters, pour trouver la personne idéale pour garder vos enfants et votre maison.",
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className={dmSans.className}>
            {children}
        </body>
        </html>
    );
}
