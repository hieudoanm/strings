import { CallToAction } from '@strings/components/landing/CallToAction';
import { Features } from '@strings/components/landing/Features';
import { Footer } from '@strings/components/landing/Footer';
import { Hero } from '@strings/components/landing/Hero';
import { LinearBackground } from '@strings/components/shared/Linear';
import { Navbar } from '@strings/components/shared/Navbar';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<>
			<LinearBackground />
			<div className="relative z-10">
				<Navbar />
				<div className="w-full border-t border-neutral-800" />
				<Hero />
				<div className="w-full border-t border-neutral-800" />
				<Features />
				<div className="w-full border-t border-neutral-800" />
				<CallToAction />
				<div className="w-full border-t border-neutral-800" />
				<Footer />
			</div>
		</>
	);
};

export default HomePage;
