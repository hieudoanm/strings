import { APP_NAME } from '@strings/constants';
import Link from 'next/link';

export const Navbar = () => {
	return (
		<header className="w-full">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
				<h1 className="text-xl font-bold">{APP_NAME}</h1>
				<nav className="space-x-4 font-medium text-neutral-500">
					<Link href="/convert">Convert</Link>
					<Link href="/format">Format</Link>
					<Link href="https://github.com/hieudoanm/numbers" target="_blank" className="hover:text-black">
						GitHub
					</Link>
				</nav>
			</div>
		</header>
	);
};
