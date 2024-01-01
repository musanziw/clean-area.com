import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata: Metadata = {
    title: "Clean Area | Trouvez des nounous et des baby-sitters près de chez vous",
    description: "Une plateforme de mise en relation entre parents et baby-sitters, pour trouver la personne idéale pour garder vos enfants et votre maison.",
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className={roboto.className}>
        {children}
        </body>
        </html>
    );
}
