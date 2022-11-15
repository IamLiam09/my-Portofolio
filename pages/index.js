import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import wave from "../public/wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import emoji from "../public/emoji.png";
import { useState } from "react";
export default function Home() {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<div className={darkMode ? "dark" : ""}>
			<Head>
				<title>Ndubuisi William Portofolio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
				<section className="min-h-screen">
					{/* The nav section */}
					<nav className="py-10 mb-12 flex justify-between">
						<Image alt="mini me" src={emoji} className="w-20 h-20" />
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill
									onClick={() => setDarkMode(!darkMode)}
									className="cursor-pointer text-2xl"
								/>
							</li>
							<li>
								<a
									className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
									href="#"
								>
									Resume
								</a>
							</li>
						</ul>
					</nav>
					<div className="text-center p-10">
						<h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
							Ndubuisi William
						</h2>
						<h3 className="text-2xl py-2 md:text-3xl dark:text-white">Software Developer</h3>
						<p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
							Self taught developer, who's passionate about frontend
							development, building UI's and creating API
						</p>
					</div>
					<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
						<AiFillLinkedin />
						<AiFillGithub />
					</div>
					<div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
						<Image src={wave} className="object-cover fill-current" />
					</div>
				</section>
				<section>
					<div>
						<h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
							Since the beginning of my journey as a self taught developer, I've
							been building and
							<span className="text-teal-500"> developing </span>
							as much <span className="text-teal-500"> projects </span> as I
							can. And collaborated with talented people to create digital
							products for both business and consumer use.
						</p>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
							I offer from a wide range of services.
						</p>
					</div>
					{/* The section about designs and what I offer */}
					<div className="lg:flex gap-10">
						<div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
							<Image
								src={design}
								width={100}
								height={100}
								className="mx-auto"
							/>
							<h3 className="text-lg font-medium pt-8 pb-2">
								Beautiful Designs
							</h3>
							<p className="py-2">
								Creating elegant designs suited for you needs following design
								theory.
							</p>
							<h4 className="py-4 text-teal-600">Designs tools I use</h4>
							<p className="text-gray-800 py-1">Figma</p>
							<p className="text-gray-800 py-1">Gimp</p>
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
							<Image src={code} width={100} height={100} className="mx-auto" />
							<h3 className="text-lg font-medium pt-8 pb-2">Programming</h3>
							<p className="py-2">
								Bringing designs to life and problem solving
							</p>
							<h4 className="py-4 text-teal-600">
								Programming languages I use
							</h4>
							<p className="text-gray-800 py-1">HTML</p>
							<p className="text-gray-800 py-1">JavaScript</p>
							<p className="text-gray-800 py-1">Python</p>
							<p className="text-gray-800 py-1">SQL</p>
							<p className="text-gray-800 py-1">CSS</p>
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
							<Image
								src={consulting}
								width={100}
								height={100}
								className="mx-auto"
							/>
							<h3 className="text-lg font-medium pt-8 pb-2">Others</h3>
							<p className="py-2">Tools need to get the work done</p>
							<h4 className="py-4 text-teal-600">Developer tools I use</h4>
							<p className="text-gray-800 py-1">React</p>
							<p className="text-gray-800 py-1">Django</p>
							<p className="text-gray-800 py-1">Vscode</p>
							<p className="text-gray-800 py-1">GitHub</p>
							<p className="text-gray-800 py-1">Linux</p>
						</div>
					</div>
					<div>
						<h3 className="text-3xl py-1 dark:text-white">Portofolio</h3>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
							Since the beginning of my journey as a self taught developer, I've
							been building and
							<span className="text-teal-500"> developing </span>
							as much <span className="text-teal-500"> projects </span> as I
							can. And collaborated with talented people to create digital
							products for both business and consumer use.
						</p>
						<p className="text-md py-2 leading-8 text-gray-800">
							I offer from a wide range of services.
						</p>
					</div>
				</section>
			</main>
		</div>
	);
}
