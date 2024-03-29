import { ReactNode } from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
interface CustomButtonProps extends ButtonProps {
	children: ReactNode;
	mx?: number | string;
	borderRadius?: number | string;
	bgColor?: string;
	textcolor?: string;
	px?: number | string;
	py?: number | string;
	width?: number | string;
	pl?: number | string;
	pr?: number | string;
	mt?: number | string;
	mb?: number | string;
	ml?: number | string;
	mr?: number | string;
	m?: number | string;
	active?: boolean;
	warning?: boolean;
	loadingButton?: boolean;
	loading?: boolean;
}
export const CustomButton = ({
	children,
	borderRadius,
	mx,
	px,
	width,
	pl,
	pr,
	mt,
	mb,
	m,
	ml,
	mr,
	active,
	py,
	warning = false,
	bgColor,
	textcolor,
	loadingButton = false,
	loading,
	...props
}: CustomButtonProps) => {
	return (
		<>
			{!loadingButton ? (
				<Button
					{...props}
					color="inherit"
					sx={{
						textTransform: 'none',
						textDecoration: 'none',
						mx,
						px,
						m,
						width,
						pl,
						pr,
						mt,
						mb,
						ml,
						mr,
						py,
						fontWeight: (active && 700) || 500,
						bgcolor:
							bgColor || (warning && '#d32f2f') || bgColor || 'primary.main',
						color: textcolor ? textcolor : 'white',
						fontSize: '20px',
						'&:hover': {
							bgcolor: (warning && '#e06d6d') || bgColor || 'secondary.main',
						},
						'&:disabled': {
							bgcolor: '#9e9e9e',
						},
						borderRadius: borderRadius ? borderRadius : '20px',
					}}
				>
					{children}
				</Button>
			) : (
				<LoadingButton
					loading={loading}
					loadingIndicator={
						<CircularProgress
							sx={{
								color: '#fff',
							}}
							size={24}
						/>
					}
					{...props}
					color="inherit"
					sx={{
						textTransform: 'none',
						textDecoration: 'none',
						mx,
						px,
						width,
						pl,
						pr,
						mt,
						mb,
						ml,
						mr,
						py,
						fontWeight: (active && 800) || 400,
						bgcolor: (warning && '#d32f2f') || bgColor || 'primary.main',
						color: 'white',
						fontSize: '20px',
						'&:hover': {
							bgcolor: (warning && '#e06d6d') || bgColor || 'secondary.main',
						},
						'&:disabled': {
							bgcolor: '#9e9e9e',
						},
						borderRadius: '20px',
					}}
				>
					{children}
				</LoadingButton>
			)}
		</>
	);
};
