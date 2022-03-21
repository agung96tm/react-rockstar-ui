import React from "react";

export interface ButtonProps {
	label: string
}


const Button: React.FC<ButtonProps> = (props) => {
	return (
		<div>
			Button
		</div>
	)
}

export default Button;
