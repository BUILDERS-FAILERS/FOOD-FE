import Link from "next/link"
import { Button } from "./ui/button"

export default function PageNav() {
	return (
		<div className="flex w-full items-center justify-between">
			<div className="font-semibold text-xl"> wareg. </div>
			<nav className="w-full text-white max-w-[450px] items-center justify-center bg-tab-color px-6 text-xs rounded-3xl py-2 h-12">
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
			<div className="flex space-x-3 items-center">
				<Button className="bg-primary text-xs text-white rounded-3xl px-6 h-9">
					{" "}
					Download App{" "}
				</Button>
			</div>
		</div>
	)
}
