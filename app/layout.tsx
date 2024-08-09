import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Noto_Sans_JP } from "next/font/google";
import { NprogressProvider } from "@/provider/nProgress";
import { Root } from "@/components/root";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
const notosans = Noto_Sans_JP({ subsets : ["latin"]})

export const metadata: Metadata = {
	title: "Yuranubot Dashboard",
	description: "ゆらぬぼっとのだっしゅぼーど",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={`${inter.className} ${notosans.className}`}>
				<NprogressProvider>
					<Root>
						<Navbar />
						<div className="pt-16" />
						{children}
					</Root>
				</NprogressProvider>
			</body>
		</html>
	);
}
