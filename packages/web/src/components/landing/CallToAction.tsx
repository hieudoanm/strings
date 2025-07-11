import Link from 'next/link';
import { FC } from 'react';

export const CallToAction: FC = () => {
	return (
		<section className="w-full py-16">
			<div className="mx-auto flex max-w-3xl flex-col gap-y-4 text-center md:gap-y-8">
				<h3 className="text-2xl font-bold sm:text-3xl">Format Your Text Instantly</h3>
				<p className="text-neutral-500">
					Clean, transform, and style your strings with ease — all in your browser. No setup needed, just paste and
					format!
				</p>
				<div>
					<Link href="/uuid">
						<button
							type="button"
							className="cursor-pointer rounded-full border border-neutral-700 bg-neutral-900 px-6 py-3">
							Generate UUID
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};
