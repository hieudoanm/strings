import { CallToAction } from '@strings/components/CallToAction';
import { Features } from '@strings/components/Features';
import { Footer } from '@strings/components/Footer';
import { Hero } from '@strings/components/Hero';
import { Navbar } from '@strings/components/Navbar';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<>
			<Navbar />
			<div className="w-full border-t border-neutral-800" />
			<Hero />
			<div className="w-full border-t border-neutral-800" />
			<Features />
			<div className="w-full border-t border-neutral-800" />
			<CallToAction />
			<div className="w-full border-t border-neutral-800" />
			<Footer />
		</>
	);
};

export default HomePage;
