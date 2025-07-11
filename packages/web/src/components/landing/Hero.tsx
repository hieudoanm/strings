import { APP_NAME } from '@strings/constants';
import { LinearText } from '../shared/Linear';
import Link from 'next/link';

export const Hero = () => {
	return (
		<section className="w-full py-20">
			<div className="mx-auto flex max-w-3xl flex-col gap-y-4 text-center md:gap-y-8">
				<h2 className="text-4xl font-extrabold text-neutral-100 sm:text-5xl">
					<LinearText>{APP_NAME}</LinearText>
				</h2>
				<p className="text-lg text-neutral-100">
					A fast, clean, and reliable string formatter — right in your browser.
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
