"use client";
import { SectionWrapper } from "@/app/components/HigherOrderComponents";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const principles = [
	{
		icon: "🚀",
		title: "Ship to Production",
		description:
			"My projects run on AWS EC2 with Nginx, PM2, and CI/CD — not just localhost. I deal with SSL certs, process restarts, and deployment failures.",
	},
	{
		icon: "📡",
		title: "Design APIs First",
		description:
			"Backend and frontend are separate repos with clean REST contracts. Any client — web, mobile, or third-party — can consume the same API.",
	},
	{
		icon: "🔐",
		title: "Handle Auth Properly",
		description:
			"JWT access/refresh rotation, OAuth flows (Google, GitHub), email verification, OTP — not just isLoggedIn: true.",
	},
	{
		icon: "🧠",
		title: "Solve Real Problems",
		description:
			"230+ DSA problems in Java. I use aggregation pipelines, not N+1 queries. I think about data modeling before writing controllers.",
	},
];

const EngineeringPrinciples = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText text-center">How I Think</p>
				<h2 className="sectionHeadText text-center">
					Engineering Principles.
				</h2>
			</motion.div>

			<div className="w-full flex justify-center">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
				>
					Not just what I build, but how I approach building it.
				</motion.p>
			</div>

			<div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
				{principles.map((principle, index) => (
					<motion.div
						key={principle.title}
						variants={fadeIn("up", "spring", index * 0.15, 0.75)}
						className="group bg-tertiary/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-[#915EFF]/40 hover:shadow-lg hover:shadow-[#915EFF]/5 hover:-translate-y-1"
					>
						<div className="flex items-start gap-4">
							<span className="text-3xl shrink-0 mt-1">{principle.icon}</span>
							<div>
								<h3 className="text-white font-bold text-[18px] mb-2">
									{principle.title}
								</h3>
								<p className="text-secondary text-[14px] leading-[22px]">
									{principle.description}
								</p>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(EngineeringPrinciples, "principles");
