"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	const [isMobile, setIsMobile] = useState<boolean | null>(null);

	useEffect(() => {
		// Detect mobile screens where navbar collapses (below 640px / sm breakpoint)
		const mq = window.matchMedia("(max-width: 639px)");
		const apply = () => setIsMobile(mq.matches);
		apply();

		// Some browsers (older mobile webviews) don't implement
		// MediaQueryList.addEventListener/removeEventListener. Fallback to
		// addListener/removeListener when necessary.
		if (typeof mq.addEventListener === "function") {
			mq.addEventListener("change", apply);
			return () => mq.removeEventListener("change", apply);
		} else if (typeof (mq as any).addListener === "function") {
			(mq as any).addListener(apply);
			return () => (mq as any).removeListener(apply);
		}
	}, []);

	return (
		<section className="relative w-full h-[calc(100svh-0px)] mx-auto">
			<div className={`paddingX absolute inset-0 top-24 sm:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`}>
				<div className="flex flex-col justify-center items-center mt-5 pointer-events-auto">
					<div className="w-5 h-5 rounded-full bg-[#915EFF] " />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div className="pointer-events-auto z-10 w-full sm:w-auto">
					<div className="flex items-center gap-6 flex-wrap">
						<Image
							src="https://avatars.githubusercontent.com/u/209531231?v=4"
							alt="Aditya Verma"
							width={96}
							height={96}
							priority
							className="rounded-full ring-2 ring-[#915EFF] shadow-lg shadow-[#915EFF]/40"
						/>
						<div>
							<h1 className="heroHeadText text-white leading-tight">
								Hi, I&apos;m <span className="text-[#915EFF] ">Aditya Verma</span>
							</h1>
							<p className="heroSubText mt-2">
								Backend Engineer · Full Stack Systems · Real-Time Architecture
							</p>
						</div>
					</div>
					<div className="mt-6 sm:ml-[120px] flex flex-col gap-3 max-w-[90vw] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]">
						<p className="text-secondary text-[13px] sm:text-[15px] flex items-center gap-3">
							<span className="w-2 h-2 rounded-full bg-green-400 inline-block shrink-0 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
							Production systems deployed on AWS EC2 with Nginx, PM2, and CI/CD
						</p>
						<p className="text-secondary text-[13px] sm:text-[15px] flex items-center gap-3">
							<span className="w-2 h-2 rounded-full bg-green-400 inline-block shrink-0 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
							Real-time architecture using WebSockets with presence and low-latency updates
						</p>
						<p className="text-secondary text-[13px] sm:text-[15px] flex items-center gap-3">
							<span className="w-2 h-2 rounded-full bg-green-400 inline-block shrink-0 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
							608 GitHub contributions · 230+ DSA problems · Open-source contributor
						</p>
					</div>
				</div>
			</div>
			{/* Only render 3D on medium screens and up for better mobile performance */}
			{isMobile === false && <ComputersCanvas />}
			{isMobile === true && (
				<div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-32 sm:pt-40">
					<div className="relative w-full h-full max-w-[90%] max-h-[70%] mt-80">
						<Image
							src="/hero-mobile.png"
							alt="Hero Mobile"
							fill
							priority
							className="object-contain drop-shadow-xl"
						/>
					</div>
				</div>
			)}
			<div className="absolute xs:bottom-3 bottom-24 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
