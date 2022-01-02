import { useState } from "react";
import data from "./data";

function App() {
	const [number, setNumber] = useState("");
	const [info, setInfo] = useState([]);

	const errorMessage = ["Please enter value between 0 to 8"];

	const handleChange = (e) => {
		setNumber(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (number >= 0 && number <= 8) {
			setInfo(data.slice(0, number));
		} else {
			setInfo([errorMessage]);
		}
	};

	return (
		<>
			<h2 className='heading'>Want Something Else Than Age Old Lorem Ipsum?</h2>
			<form className='form'>
				<label htmlFor='number'>Number Of Paragraphs: </label>
				<input
					type='number'
					name='number'
					id='number'
					onChange={handleChange}
					value={number}
				/>
				<button type='submit' className='btn' onClick={handleSubmit}>
					Generate
				</button>
			</form>
			<section className='data'>
				{info.map((paragraph) => (
					<p>{paragraph}</p>
				))}
			</section>
		</>
	);
}

export default App;
