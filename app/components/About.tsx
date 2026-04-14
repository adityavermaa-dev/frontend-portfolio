"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { fetchServices } from "@/lib/api";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { useState, useEffect } from "react";

type Service = {
	id: string;
	title: string;
	icon: string;
};

type ServiceCardProps = {
	index: number;
	title: string;
	icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
	return (
		<>
			<Tilt
				options={{ max: 45, scale: 1, speed: 450 }}
				className="xs:w-[250px] w-full"
			>
				<motion.div
					variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
					className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
				>
					<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
						<Image
							src={icon}
							width={64}
							height={64}
							alt={title}
							className="w-16 h-16 object-contain"
						/>
						<h3 className="text-white text-[20px] font-bold text-center">
							{title}
						</h3>
					</div>
				</motion.div>
			</Tilt>
		</>
	);
};

const About = ({ services }: { services: Service[] }) => {

	// Removed internal fetching logic as data is now passed from parent

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">What I Build</p>
				<h2 className="sectionHeadText">Overview.</h2>
			</motion.div>

			<motion.div
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[16px] sm:text-[17px] lg:text-[19px] max-w-3xl leading-relaxed"
			>
				<p className="mb-5">
					I&apos;m <span className="text-white font-semibold">Aditya Verma</span> &mdash; I build backend systems and ship them to production. Instead of tutorial clones, I focus on building infrastructure that works in the real world:
				</p>
				<ul className="list-disc ml-5 md:ml-8 space-y-4 mb-5">
					<li>
						Designing with <strong className="text-white font-semibold">Node.js, Express, and MongoDB</strong> &mdash; engineering REST APIs, WebSocket servers, and secure authentication flows.
					</li>
					<li>
						Deploying on <strong className="text-white font-semibold">AWS EC2 with Nginx and PM2</strong> &mdash; setting up CI/CD and dealing with the messy parts like CORS, OAuth callbacks, and process crashes.
					</li>
					<li>
						Building <strong className="text-white font-semibold">DevSync</strong> &mdash; a production-ready WebSockets engine handling live messaging and user presence.
					</li>
					<li>
						Building <strong className="text-white font-semibold">VideoTube</strong> &mdash; a micro-services style backend with 50+ endpoints executing complex multi-collection aggregations.
					</li>
				</ul>
				<p>
					They are deployed, they have real traffic, and they break in ways that teach you more than any course. Currently looking for <strong className="text-white font-semibold">backend or full stack roles</strong> where I can build systems that matter.
				</p>
			</motion.div>
			<div className="mt-20 flex flex-wrap gap-10 justify-center">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
