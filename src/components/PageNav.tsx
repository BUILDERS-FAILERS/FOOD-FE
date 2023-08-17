import Link from "next/link"
import { Button } from "./ui/button"

export default function PageNav() {
	return (
		<div className="flex w-full items-center justify-between">
			<div className="font-bold text-xl lg:text-2xl text-white"> wareg. </div>
			<nav className="hidden lg:block w-full text-white max-w-[500px] items-center justify-center bg-tabColor px-6 text-xs rounded-3xl py-2 h-12">
				<ul className="w-full flex items-center h-full justify-between list-none">
					<li>
						{" "}
						<Link href="/"> How it works </Link>{" "}
					</li>
					<li>
						{" "}
						<Link href="/"> Restaurants </Link>{" "}
					</li>
					<li>
						{" "}
						<Link href="/"> Support </Link>{" "}
					</li>
					<li>
						{" "}
						<Link href="/"> Products </Link>{" "}
					</li>
				</ul>
			</nav>
			<div className="hidden lg:flex items-center">
				<Button className="bg-white font-bold text-xs text-button rounded-3xl px-6 h-9">
					{" "}
					Download App{" "}
				</Button>
			</div>
		</div>
	)
}
