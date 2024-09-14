import { describe, it, expect } from 'vitest';
import { generateAvatar, getInitials, randomizeColor } from '../src/index';

describe('Avatar generator', () => {
	it('should return initials', () => {
		const initials = getInitials('Test', 'Test');
		expect(initials).toBe('TT');
	});

	it('should return random color', () => {
		const color = randomizeColor();
		expect(color).toBeDefined();
	});

	it('should return the same svg file', () => {
		const mockSvg = `
			<svg width='${128}' height='${128}' xmlns="http://www.w3.org/2000/svg">
				<circle 
					cx='${64}' 
					cy='${64}' 
					r='${62}' 
					stroke="black" 
					stroke-width="0.5" 
					fill='purple' 
				/>
				<text 
					x='50%'
					y='50%'
					text-anchor="middle"
					dominant-baseline="middle"
					fill="white"
					style="font: 62px sans-serif"
				>
					TT
				</text>
			</svg>
    `;

		const normalizeSVG = (svg: string) =>
			svg.replace(/\s+/g, '').replace(/>/g, '>\n').trim(); //Remove the tabulation etc.

		const svg = generateAvatar('Test', 'Test', 128, 'purple');
		expect(normalizeSVG(svg)).toBe(normalizeSVG(mockSvg));
	});
});
