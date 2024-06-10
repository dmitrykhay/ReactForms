import React, { useState } from "react";
import stylesConvertor from "./Convertor.module.css";

interface IColorComponent {
	hex: string,
	rgb: string,
	error: string
}

export const Convertor = () => {
	const [color, setColor] = useState<IColorComponent>({
    hex: "#000000",
    rgb: "rgb(0, 0, 0)",
    error: "Ошибка"
	})
	
	const handleColorChange = (evt:React.ChangeEvent<HTMLInputElement>) => {
		evt.preventDefault();
		
		const HEX_COLOR_PATTERN = /^#([A-Fa-f0-9]{6})$/;

		if (evt.target.value.length === 7) {

			const rRGB = parseInt(evt.target.value.substring(1, 3), 16);
			const gRGB = parseInt(evt.target.value.substring(3, 5), 16);
			const bRGB = parseInt(evt.target.value.substring(5), 16);

			setColor((prevColor) => ({
				...prevColor,
				hex: HEX_COLOR_PATTERN.test(evt.target.value) ? evt.target.value : "red",
				rgb: HEX_COLOR_PATTERN.test(evt.target.value) ? `rgb(${rRGB}, ${gRGB}, ${bRGB})` : color.error,
			}))
		}
	}

	return (
		<div className={stylesConvertor.wrap} style={{"--wrap-bg-color": color.hex} as React.CSSProperties}>
			<input
				className={stylesConvertor.input}
				type="text"
				onChange={handleColorChange}
				maxLength={7}
				autoFocus
			/>
			<p
				className={stylesConvertor.rgb}
				style={{color: color.rgb === "rgb(255, 255, 255)"	? "black"	: "white"}}
			>
				{color.rgb}
			</p>
		</div>
	)
}
