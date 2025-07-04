import { FC } from 'react';

export const Features: FC = () => {
	return (
		<section className="py-16">
			<div className="mx-auto max-w-6xl px-6 text-center">
				<h3 className="text-3xl font-semibold sm:text-4xl">Why Use Our String Formatter?</h3>
				<p className="mx-auto mt-4 max-w-2xl text-neutral-500">
					Transform your text effortlessly. Format, clean, and style strings in seconds — all in your browser.
				</p>
				<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">⚡ Instant Formatting</h4>
						<p className="mt-2 text-sm text-neutral-500">
							See your changes in real-time — from casing to spacing, no lag, no reloads.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">🔒 100% Local</h4>
						<p className="mt-2 text-sm text-neutral-500">
							All processing happens right in your browser. No uploads, no tracking.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">🛠 Rich Formatting Tools</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Convert case, trim whitespace, escape characters, and more — all in one tool.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
