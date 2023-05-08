// change readme about portofolio
import Head from "next/head";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
	AiFillLinkedin,
	AiFillGithub,
	AiFillTwitterCircle,
} from "react-icons/ai";
import { FaFileCode, FaLink } from "react-icons/fa";
import { IconContext } from "react-icons";
import Image from "next/image";
import wave from "../public/wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import emoji from "../public/emoji.png";
import web1 from "../public/lambocard.png";
import web2 from "../public/cvbuilder.png";
import blog from "../public/Business_master.jpg";
import web6 from "../public/restaurantPage.png";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
// import Script from "next/script";
import { useState, useRef } from "react";
export default function Home() {
	const [darkMode, setDarkMode] = useState(false);
	const tawkMessengerRef = useRef();
	const handleMinimize = () => {
		tawkMessengerRef.current.minimize();
	};
	return (
		<div className={darkMode ? "dark" : ""}>
			<Head>
				<title>Ndubuisi William Portfolio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
				<section className="min-h-screen" id="nav">
					{/* The nav section */}
					<nav className="py-10 mb-12 flex justify-between">
						<Image alt="mini me" src={emoji} className="w-20 h-20" />
						<ul className="flex items-center ">
							<li>
								{darkMode === false ? (
									<BsFillMoonStarsFill
										onClick={() => setDarkMode(!darkMode)}
										className="cursor-pointer text-2xl"
									/>
								) : (
									<IconContext.Provider value={{ color: "white" }}>
										<BsFillSunFill
											onClick={() => setDarkMode(!darkMode)}
											className="cursor-pointer text-2xl"
										/>
									</IconContext.Provider>
								)}
							</li>
							<li>
								<a
									className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
									href="https://drive.google.com/file/d/1Fsa_xawLpAq_QVUB0-UbTnG-nG2dkKGf/view?usp=sharing"
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
						<h3 className="text-2xl py-2 md:text-3xl dark:text-white">
							Software Developer
						</h3>
						<p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
							Self taught developer, who's passionate about frontend development
							and backend development, building UI's and creating API
						</p>
					</div>
					<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 cursor-pointer">
						<a href="http://linkedin.com/in/william-ndubuisi-wd">
							<AiFillLinkedin />
						</a>
						<a href="https://github.com/IamLiam09">
							<AiFillGithub />
						</a>
						<a href="https://twitter.com/williamdev01">
							<AiFillTwitterCircle />
						</a>
					</div>
					<div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
						<Image
							src={wave}
							className="object-cover"
							layout="fill"
							alt="3d-me"
						/>
					</div>
				</section>
				<section>
					<div>
						<h3 className="text-3xl py-1 dark:text-white">Skills I offer</h3>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
							Since the beginning of my journey as a self taught developer, I've
							been building and
							<span className="text-teal-500"> developing </span>
							as much <span className="text-teal-500"> projects </span> as I
							can. And collaborated with talented people to create digital
							products for both businesses and personal use.
						</p>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
							I offer from a wide range of skill set.
						</p>
					</div>
					{/* The section about designs and what I offer */}
					<div className="lg:flex gap-5">
						<div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white basis-0 grow">
							<Image
								src={design}
								width={100}
								height={100}
								className="mx-auto"
								alt="design"
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
						<div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white basis-0 grow">
							<Image
								src={code}
								width={100}
								height={100}
								className="mx-auto"
								alt="languages"
							/>
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
							<p className="text-gray-800 py-1">PHP</p>
							<p className="text-gray-800 py-1">CSS</p>
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white basis-0 grow">
							<Image
								src={consulting}
								width={100}
								height={100}
								className="mx-auto"
								alt="other"
							/>
							<h3 className="text-lg font-medium pt-8 pb-2">Others</h3>
							<p className="py-2">Tools needed to get the work done</p>
							<h4 className="py-4 text-teal-600">Developer tools I use</h4>
							<p className="text-gray-800 py-1">React</p>
							<p className="text-gray-800 py-1">Django</p>
							<p className="text-gray-800 py-1">Vscode</p>
							<p className="text-gray-800 py-1">GitHub</p>
							<p className="text-gray-800 py-1">Linux</p>
						</div>
					</div>
					<div>
						<h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
							My Portfolio consist of a wide range of projects some personal,
							task based, team based, freelance.
							<span className="text-teal-500"> Developing </span>
							as much <span className="text-teal-500"> projects </span> as I
							can, has been my goal since I Started my journey.
						</p>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
							I hope you find my projects/portfolio to your liking
						</p>
					</div>
					<div className="relative flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
						<div className="relative basis-1/3 flex-1 cursor-pointer hover:-translate-y-4 hover:ease-in hover:delay-150 hover:drop-shadow-[10px_5px_5px_rgb(0,0,0)]">
							<div className="inset-0 z-10 overflow-hidden bg-amber-400 text-left flex flex-col items-start justify-start opacity-0 hover:opacity-100 rounded-lg bg-opacity-100 duration-300 h-54 absolute">
								<p className="text-sm py-4 px-6 lg:text-base">
									React, SCSS, HTML, Git
								</p>
								<p className="text-sm py-2 px-6 lg:text-base">
									A card game built to check one's retentiveness, I added audio
									and animation to the game to give it a more stimulating effect
								</p>
								<div className="absolute bottom-2 flex right-2 gap-1">
									<a href="https://lambocard.netlify.app/">
										<FaLink className="lg:h-10 lg:w-10 md:h-6 md:w-6" />
									</a>
									<a href="https://github.com/IamLiam09/Memory-card">
										<FaFileCode className="lg:h-10 lg:w-10 md:h-6 md:w-6" />
									</a>
								</div>
							</div>
							<div className="h-54 flex flex-wrap content-center lg:h-54">
								<Image
									src={web1}
									className="rounded-lg object-cover"
									width={"100%"}
									height={"100%"}
									alt="Lambocard"
									layout="responsive"
								/>
							</div>
						</div>
						<div className="relative basis-1/3 cursor-pointer flex-1 hover:-translate-y-4 hover:ease-in hover:delay-150 hover:drop-shadow-[10px_5px_5px_rgb(0,0,0)]">
							<div className="inset-0 z-10 overflow-hidden bg-amber-400 text-left flex flex-col items-start justify-start opacity-0 hover:opacity-100 rounded-lg bg-opacity-100 duration-300 h-54 absolute">
								<p className="text-sm py-2 px-6 lg:text-base">
									React, Bootstrap, HTML, Git
								</p>
								<p className="text-sm py-2 px-6 lg:text-base">
									Website that builds resumes. Asks for all the required details
									needed to build one
								</p>
								<div className="absolute bottom-2 flex right-2 gap-1">
									<a href="https://cvbywill.netlify.app/">
										<FaLink className="lg:h-10 lg:w-10 md:h-6 md:w-6" />
									</a>
									<a href="https://github.com/IamLiam09/cv-project">
										<FaFileCode className="lg:h-10 lg:w-10 md:h-6 md:w-6" />
									</a>
								</div>
							</div>
							<div className="h-54 flex flex-wrap content-center lg:h-54">
								<Image
									src={web2}
									className="rounded-lg object-cover"
									width={"100%"}
									height={"100%"}
									layout="responsive"
								/>
							</div>
						</div>
						<div className="relative basis-1/3 cursor-pointer flex-1 hover:-translate-y-4 hover:ease-in hover:delay-150 hover:drop-shadow-[10px_5px_5px_rgb(0,0,0)]">
							<div className="inset-0 z-10 overflow-hidden bg-amber-400 text-left flex flex-col items-start justify-start opacity-0 hover:opacity-100 rounded-lg bg-opacity-100 duration-300 h-54 absolute">
								<p className="text-sm py-2 px-6 lg:text-base">
									Laravel, PHP, HTML, tailwind, MySQL
								</p>
								<p className="text-sm py-2 px-6 lg:text-base">
									Online Library is a content management app created to help
									course creators manage content effectively and help them
									establish it as a business.
								</p>
								<div className="absolute bottom-2 flex right-2 gap-1">
									<a href="http://www.businessinflowlms.online/store/my-store">
										<FaLink className="lg:h-10 lg:w-10 md:h-6 md:w-6" />
									</a>
									<a href="https://github.com/IamLiam09/Online_library/tree/master">
										<FaFileCode className="lg:h-10 lg:w-10 md:h-6 md:w-6" />
									</a>
								</div>
							</div>
							<div className="h-54 flex flex-wrap content-center lg:h-54">
								<Image
									src={blog}
									className="rounded-lg object-cover"
									width={"100%"}
									height={"100%"}
									layout="responsive"
								/>
							</div>
						</div>
						<div className="relative basis-1/3 cursor-pointer flex-1 hover:-translate-y-4 hover:ease-in hover:delay-150 hover:drop-shadow-[10px_5px_5px_rgb(0,0,0)]">
							<div className="inset-0 z-10 overflow-hidden bg-amber-400 text-sm text-left flex flex-col items-start justify-start opacity-0 hover:opacity-100 rounded-lg bg-opacity-100 duration-300 h-54 absolute ">
								<p className="text-sm py-2 px-6 lg:text-base">
									JavaScript, SCSS, HTML, Git
								</p>
								<p className="text-sm py-2 px-6 lg:text-base">
									Responsive restaurant page with feature like swipe for mobile.
								</p>
								<div className="absolute bottom-2 flex right-2 gap-1">
									<a href="https://afrirokitchen.netlify.app/">
										<FaLink className="lg:h-10 lg:w-10 md:h-6 md:w-6" />
									</a>
									<a href="https://github.com/IamLiam09/Restaurant">
										<FaFileCode className="lg:h-10 lg:w-10 md:h-6 md:w-6" />
									</a>
								</div>
							</div>
							<div className="h-54 flex flex-wrap content-center lg:h-54">
								<Image
									src={web6}
									className="rounded-lg object-cover"
									width={"100%"}
									height={"100%"}
									layout="responsive"
								/>
							</div>
						</div>
					</div>
				</section>
				{/* <button onClick={handleMinimize}> Minimize chat </button> */}
				<TawkMessengerReact
					propertyId={process.env.NEXT_PUBLIC_637461badaff0e1306d79f6a}
					widgetId={process.env.NEXT_PUBLIC_1ghv9rh25}
					useRef={tawkMessengerRef}
				/>
			</main>
		</div>
	);
}
