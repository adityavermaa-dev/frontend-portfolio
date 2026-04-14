import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "@/app/styles/globals.css";
import { Providers } from "./providers";

const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-sans",
});
export const metadata: Metadata = {
	title: "Aditya Verma | Backend Engineer | Node.js · AWS · Real-Time Systems",
	description:
		"Aditya Verma — Backend-focused Full Stack Engineer. Building production REST APIs, real-time WebSocket systems, and cloud-deployed applications with Node.js, Express, MongoDB, and AWS. 608 GitHub contributions, 230+ DSA problems solved.",
	keywords: [
		"Aditya Verma",
		"Backend Engineer",
		"Full Stack Developer",
		"Node.js",
		"Express.js",
		"REST API",
		"WebSocket",
		"Socket.io",
		"AWS EC2",
		"MongoDB",
		"System Design",
		"CI/CD",
		"Nginx",
		"PM2",
		"Real-Time Systems",
		"DSA",
		"Open Source",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={fontSans.variable}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
