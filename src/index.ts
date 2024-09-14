type Size = 16 | 24 | 32 | 48 | 64 | 96 | 128 | 256;
type Color = 'blue' | 'green' | 'red' | 'violet' | 'purple' | 'orange' | 'pink';

const getInitials = (name: string, surname: string) => {
	const nameInitial = name.slice(0, 1).toUpperCase();
	const surnameInitial = surname.slice(0, 1).toUpperCase();

	return `${nameInitial}${surnameInitial}`;
};

const randomizeColor = () => {
	const colors: Color[] = [
		'blue',
		'green',
		'red',
		'violet',
		'purple',
		'orange',
		'pink',
	];

	return colors[Math.floor(Math.random() * colors.length)];
};

const generateAvatar = (
	name: string,
	surname: string,
	size: Size,
	color?: Color
) => {
	const cpos = size / 2;
	const r = size / 2 - 2;
	const textSize = r;

	const initials = getInitials(name, surname);

	const svg = `
		<svg width='${size}' height='${size}' xmlns="http://www.w3.org/2000/svg">
			<circle 
				cx='${cpos}' 
				cy='${cpos}' 
				r='${r}' 
				stroke="black" 
				stroke-width="0.5" 
				fill='${color ? color : randomizeColor()}' 
			/>
			<text 
				x='50%'
				y='50%'
				text-anchor="middle"
				dominant-baseline="middle"
				fill="white"
				style="font: ${textSize}px sans-serif"
			>
				${initials}
			</text>
		</svg>
	`;

	return svg;
};

export { generateAvatar, getInitials, randomizeColor };
