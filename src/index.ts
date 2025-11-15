#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

function countPackages(dir: string): number {
	try {
		const files = fs.readdirSync(dir);
		return files.filter((file) => {
			const fullPath = path.join(dir, file);
			try {
				return fs.statSync(fullPath).isDirectory();
			} catch {
				return false;
			}
		}).length;
	} catch (error) {
		return 0;
	}
}

const nodeModulesPath = path.join(process.cwd(), 'node_modules');
const count = countPackages(nodeModulesPath);

console.log(`\n🎉 You have ${count} packages in node_modules! 🎉`);

if (count > 50000) {
	console.log(
		'🌋 APOCALYPTIC! Your node_modules has reached singularity. The universe is collapsing.'
	);
} else if (count > 30000) {
	console.log('💥 MIND-BLOWING! Your dependencies have transcended reality itself.');
} else if (count > 20000) {
	console.log("🚀 UNBELIEVABLE! You've entered the dependency dimension. Welcome to the void.");
} else if (count > 15000) {
	console.log('🎭 ABSURD! Your project is now a dependency black hole. Nothing can escape.');
} else if (count > 10000) {
	console.log(
		'😱 RIDICULOUS! Time to consider a dependency intervention. This is getting out of hand.'
	);
} else if (count > 7500) {
	console.log('🔥 INSANE! Your node_modules folder is now a separate ecosystem. Consider therapy.');
} else if (count > 5000) {
	console.log(
		"⚡ EXTREME! You've crossed the point of no return. The dependency gods are watching."
	);
} else if (count > 3000) {
	console.log('🏔️ ENORMOUS! Your node_modules is now a mountain range. Climbing gear recommended.');
} else if (count > 2000) {
	console.log('🌊 HUGE! The dependency ocean is deep. Make sure you have a life jacket.');
} else if (count > 1500) {
	console.log(
		'🗻 MASSIVE! Your dependencies have formed their own mountain. Impressive, but concerning.'
	);
} else if (count > 1000) {
	console.log(
		'💪 VERY HEAVY! Your project is carrying quite the load. Still manageable, but getting there.'
	);
} else if (count > 750) {
	console.log('📦 HEAVY! The dependency train is picking up speed. Hold on tight!');
} else if (count > 500) {
	console.log('⚖️ GETTING SERIOUS! Your node_modules is becoming a force to be reckoned with.');
} else if (count > 300) {
	console.log('📚 ACCUMULATING! The dependency library is growing. Knowledge is power, right?');
} else if (count > 200) {
	console.log('📈 BUILDING UP! Your dependencies are stacking up nicely. Keep an eye on it.');
} else if (count > 100) {
	console.log(
		'👍 NORMAL! This is pretty standard for a JavaScript project. Nothing to worry about.'
	);
} else if (count > 50) {
	console.log('🌱 GETTING THERE! Your project is growing. The dependency tree is sprouting.');
} else if (count > 25) {
	console.log('🌿 GROWING! A healthy amount of dependencies. Your project is maturing nicely.');
} else if (count > 10) {
	console.log('🌼 SMALL! A modest collection of packages. Clean and manageable.');
} else {
	console.log("✨ MINIMALIST! A beautifully lean project. You're a dependency zen master!");
}

console.log('');
