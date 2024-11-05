interface NicoProps {
	firstName: string;
	lastName: string;
	age: number;
	adress: string;
}

export default function Nico({ firstName, lastName, age, adress }: NicoProps) {
	return (
		<>
			<h2>
				{firstName} {lastName} {age} {adress}
			</h2>
		</>
	);
}
