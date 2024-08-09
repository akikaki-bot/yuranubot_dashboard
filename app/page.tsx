import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex flex-col items-center justify-center gap-4 h-80 transform-gpu transition-all">
				<Image
					className="rounded-full w-40 h-40 shadow-md"
					src="/zundacord.png"
					alt="ZundaCord"
					width={100}
					height={100}
				/>
				<h1 className="text-4xl font-bold">ZundaCord</h1>
				<p className="text-xl"> Webダッシュボードサービス </p>
			</div>
		</main>
	);
}
