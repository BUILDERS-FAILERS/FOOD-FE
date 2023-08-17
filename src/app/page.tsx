import PageNav from "@/components/PageNav"

export default function Home() {
	return (
		<main className="p-3 bg-background">
			<div className="flex min-h-screen flex-col items-center justify-between md:px-20 md:py-8 bg-theme rounded-3xl">
				<PageNav />
			</div>
		</main>
	)
}
