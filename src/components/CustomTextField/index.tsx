import { TextField, TextFieldProps, Typography } from '@mui/material';

type CustomTextFieldProps = {
	id?: string;
	fullWidth?: boolean;
	withLabel?: boolean;
	label?: string;
	mx?: number;
	mt?: number;
	mb?: number;
	ml?: number;
	mr?: number;
	width?: number;
	placeholder?: string;
	bgcolor?: string;
	borderColor?: string;
} & TextFieldProps;

export const CustomTextField = ({
	withLabel,
	label,
	id,
	mb,
	mx,
	mt,
	ml,
	mr,
	width,
	placeholder,
	bgcolor,
	borderColor,
	...props
}: CustomTextFieldProps) => {
	return (
		<>
			{withLabel && (
				<Typography
					variant="subtitle1"
					mt={1}
					sx={{
						alignSelf: 'flex-start',
						fontWeight: 'bold',
						fontSize: '15px',
					}}
				>
					{label}
				</Typography>
			)}
			<TextField
				id={id}
				size="small"
				placeholder={placeholder ?? label}
				{...props}
				inputProps={{
					style: {
						fontSize: 19,
					},
				}}
				sx={{
					marginTop: '6px',
					bgcolor: bgcolor || 'white',
					border: borderColor && `3px solid ${borderColor}`,
					'& legend': { display: 'none' },
					'& fieldset': { top: 0 },
					mx,
					width,
					mt,
					mb,
					ml,
					mr,
					'&  .MuiFormHelperText-root.Mui-error': {
						fontSize: '13px',
					},
					'& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
						{
							display: 'none',
						},
					'& input[type=number]': {
						MozAppearance: 'textfield',
					},
				}}
				fullWidth
			/>
		</>
	);
};
