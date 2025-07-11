import { APP_NAME } from '@strings/constants';
import Link from 'next/link';

export const Navbar = () => {
	return (
		<header className="w-full">
			<div className="container mx-auto flex items-center justify-between px-4 py-2 md:px-8 md:py-4">
				<Link href="/">
					<h1 className="text-xl font-bold">{APP_NAME}</h1>
				</Link>
				<nav className="space-x-4 font-medium text-neutral-500">
					{[
						{ id: 'convert', href: '/convert', label: 'Convert' },
						{ id: 'format', href: '/format', label: 'Format' },
						{ id: 'uuid', href: '/uuid', label: 'UUID' },
					].map(({ id = '', href = '', label = '' }) => {
						return (
							<Link key={id} href={href}>
								{label}
							</Link>
						);
					})}
				</nav>
			</div>
		</header>
	);
};
