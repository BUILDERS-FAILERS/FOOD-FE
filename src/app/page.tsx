import Image from "next/image"
import PageNav from "@/components/PageNav"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import pizzaImage from "./pizza.jpg"
import testImage from "./testImage.jpg"

export default function Home() {
	return (
		<main className="bg-background">
			<section className="flex min-h-screen flex-col items-center justify-between px-4 pt-8 md:px-20 md:pt-8 bg-theme rounded-b-3xl">
				<PageNav />
				<div className="mx-auto max-w-[500px] flex flex-col items-center text-center text-white space-y-5 mt-0 lg:mt-20">
					<h1 className="text-5xl lg:text-6xl leading-[50px] lg:leading-[60px] font-semibold lg:font-extrabold">
						No eating without Wareg.
					</h1>
					<p>
						Order different delicacies and have them delivered to your at
						lightning-fast speed. With wareg you can indulge your tastebuds
						without hurting your pocket.{" "}
					</p>
					<Button size="lg" className="bg-button w-full lg:w-fit rounded-3xl">
						Get started
					</Button>
				</div>
				<div className="w-full md:hidden">
					<Image
						src={testImage}
						alt="Photo by Drew Beamer"
						className="rounded-md object-contain"
					/>
				</div>
				<div className="w-full hidden lg:block">
					<AspectRatio ratio={16 / 8} className="mt-14 hidden lg:block">
						<Image
							src={testImage}
							alt="Photo by Drew Beamer"
							fill
							className="object-cover"
						/>
					</AspectRatio>
				</div>
			</section>
			<section className="bg-hero mx-2 py-10 md:py-16 space-y-10 flex flex-col  justify-between px-3  md:px-20 text-center rounded-[20px] my-6">
				<h1 className="text-3xl lg:text-5xl leading-none lg:leading-[60px] text-heroText font-bold">
					We&apos;re easing the path to get your cravings and making sure you
					get your fill for the price
				</h1>
				<div>
					<Button size="lg" className="rounded-3xl bg-button text-white">
						{" "}
						How it works{" "}
					</Button>
				</div>
			</section>
			<section className="p-2 py-8 lg:p-28">
				<div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-10 w-full">
					<div className="w-full rounded-md mb-6">
						<Image
							src={pizzaImage}
							height={800}
							className="rounded-md object-cover"
							alt="Pizza Image for Wareg"
						/>
					</div>
					<div className="w-full">
						<h3 className="text-4xl text-button font-semibold">
							{" "}
							Tap. Grab. Eat.{" "}
						</h3>
						<p className="mt-2 text-subtitle font-medium">
							Using wareg is as simple as these three steps, you can satisfy
							your cravings from the comfort of your home through the wareg app
							by tapping to open the app, grabbing your most preferred meal and
							with the superfast delivery, you get your food to eat before you
							drop your phone.
						</p>
						<Button className="w-full mt-6" size="lg">
							{" "}
							Get Started{" "}
						</Button>
					</div>
				</div>
				<div className="flex flex-col mt-12 lg:flex-row items-center space-x-0 lg:space-x-10 w-full">
					<div className="w-full rounded-md mb-6">
						<Image
							src={pizzaImage}
							height={800}
							className="rounded-md object-cover"
							alt="Pizza Image for Wareg"
						/>
					</div>
					<div className="w-full">
						<h3 className="text-4xl text-button font-semibold">
							{" "}
							Tap. Grab. Eat.{" "}
						</h3>
						<p className="mt-6 text-subtitle font-medium">
							With top-of-the-line delivery services, you can be sure to get
							your orders in time and in the best condition. Our delivery
							services are top-notch and we ensure that your orders are
							delivered in the best condition.
						</p>
						<Button className="w-full mt-6" size="lg">
							{" "}
							Get Started{" "}
						</Button>
					</div>
				</div>
			</section>
		</main>
	)
}
