"use client";
import { SectionWrapper } from "@/app/components/HigherOrderComponents";
import { textVariant, fadeIn } from "@/app/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const Stats = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText text-center">Open Source & Production</p>
				<h2 className="sectionHeadText text-center">GitHub & LeetCode Stats.</h2>
			</motion.div>

			<div className="mt-20 flex flex-col gap-10">
				{/* Production Traffic Card */}
				<motion.div variants={fadeIn("up", "spring", 0.1, 0.75)} className="w-full">
					<h3 className="text-white text-[24px] font-bold mb-8 text-center">Production Traffic</h3>
					<div className="flex flex-wrap justify-center gap-6">
						<div className="w-full sm:w-[48%] lg:w-[32%] bg-tertiary rounded-2xl p-6 flex flex-col justify-center items-center transform transition-all hover:scale-105 duration-300 shadow-card border border-white/5">
							<h4 className="text-[#915EFF] text-[16px] font-bold mb-2">Weekly Requests</h4>
							<span className="text-white text-[42px] font-black leading-none">17.1K+</span>
							<p className="text-secondary text-[13px] mt-2">Across all deployed services</p>
							<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />
							<div className="flex justify-between w-full px-2">
								<div className="flex flex-col items-center">
									<span className="text-green-400 font-bold text-[15px]">↑ 46%</span>
									<span className="text-secondary text-[11px]">Growth</span>
								</div>
								<div className="w-[1px] bg-white/10 h-8" />
								<div className="flex flex-col items-center">
									<span className="text-[#915EFF] font-bold text-[15px]">8+</span>
									<span className="text-secondary text-[11px]">Countries</span>
								</div>
								<div className="w-[1px] bg-white/10 h-8" />
								<div className="flex flex-col items-center">
									<span className="text-[#915EFF] font-bold text-[15px]">2.16K</span>
									<span className="text-secondary text-[11px]">Visits/Week</span>
								</div>
							</div>
						</div>

						<div className="w-full sm:w-[48%] lg:w-[32%] bg-tertiary rounded-2xl p-6 flex flex-col justify-center items-center transform transition-all hover:scale-105 duration-300 shadow-card border border-white/5">
							<h4 className="text-[#915EFF] text-[16px] font-bold mb-2">DevSync Live</h4>
							<span className="text-white text-[42px] font-black leading-none">178ms</span>
							<p className="text-secondary text-[13px] mt-2">Page load time (Cloudflare)</p>
							<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />
							<div className="flex justify-between w-full px-4">
								<div className="flex flex-col items-center">
									<span className="text-[#915EFF] font-bold text-[15px]">280</span>
									<span className="text-secondary text-[11px]">Page Views/mo</span>
								</div>
								<div className="w-[1px] bg-white/10 h-8" />
								<div className="flex flex-col items-center">
									<span className="text-green-400 font-bold text-[15px]">Live</span>
									<span className="text-secondary text-[11px]">devsyncapp.in</span>
								</div>
							</div>
						</div>

						<div className="w-full sm:w-[48%] lg:w-[32%] bg-tertiary rounded-2xl p-6 flex flex-col justify-center items-center transform transition-all hover:scale-105 duration-300 shadow-card border border-white/5">
							<h4 className="text-[#915EFF] text-[16px] font-bold mb-2">Global Reach</h4>
							<div className="flex flex-wrap justify-center gap-2 mt-2">
								{["India", "France", "Netherlands", "USA", "Singapore", "UK", "Germany", "Romania"].map((country) => (
									<span key={country} className="px-3 py-1 bg-[#915EFF]/10 text-[#915EFF] rounded-full text-xs font-medium border border-[#915EFF]/20">
										{country}
									</span>
								))}
							</div>
							<p className="text-secondary text-[13px] mt-4">Traffic sources (Cloudflare verified)</p>
						</div>
					</div>
				</motion.div>

				{/* GitHub Stats */}
				<motion.div variants={fadeIn("up", "spring", 0.2, 0.75)} className="w-full">
					<h3 className="text-white text-[24px] font-bold mb-8 text-center">GitHub — 608 Contributions</h3>
					<div className="flex flex-wrap justify-center gap-6">
						{/* GitHub Stats Card */}
						<div className="w-full sm:w-[48%] lg:w-[32%] bg-tertiary rounded-2xl p-1">
							<img
								src="https://github-readme-stats-sigma-five.vercel.app/api?username=adityavermaa-dev&show_icons=true&hide_border=true&bg_color=151030&title_color=915EFF&icon_color=915EFF&text_color=ffffff"
								alt="GitHub Stats"
								className="w-full h-auto rounded-2xl"
							/>
						</div>

						{/* Most Commit Language */}
						<div className="w-full sm:w-[48%] lg:w-[32%] bg-tertiary rounded-2xl p-1">
							<img
								src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=adityavermaa-dev&theme=tokyonight"
								alt="Most Commit Language"
								className="w-full h-auto rounded-2xl"
							/>
						</div>

						{/* Repos Per Language */}
						<div className="w-full sm:w-[48%] lg:w-[32%] bg-tertiary rounded-2xl p-1">
							<img
								src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=adityavermaa-dev&theme=tokyonight"
								alt="Repos Per Language"
								className="w-full h-auto rounded-2xl"
							/>
						</div>
					</div>
				</motion.div>

				{/* LeetCode Stats */}
				<motion.div variants={fadeIn("up", "spring", 0.3, 0.75)} className="w-full">
					<h3 className="text-white text-[24px] font-bold mb-8 text-center">LeetCode — 230+ Problems Solved</h3>
					<div className="flex justify-center">
						{/* LeetCode Stats Card */}
						<div className="w-full max-w-[600px] bg-tertiary rounded-2xl p-1">
							<img
								src="https://leetcard.jacoblin.cool/adityaverma-dev?theme=dark&font=Ubuntu&ext=activity"
								alt="LeetCode Stats"
								className="w-full h-auto rounded-2xl"
							/>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default SectionWrapper(Stats, "stats");
