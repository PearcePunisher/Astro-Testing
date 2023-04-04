import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Table from "../components/Table.jsx";
import ListTest from "../components/ListTest.jsx"
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e32421',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#272934',
      paper: '#1f2129',
    },
  },
});


const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const ListTest = React.memo(({ data }) => {
	return (
		<List data={data} />
	);
});

const Table = React.memo(({ data }) => {
	return (
		<Table data={data} />
	);
});

export default function BasicGrid() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				container
				spacing={2}>
				<Grid xs={4}>
					<ListTest />
				</Grid>
				<Grid xs={8}>
					<Table />
				</Grid>
			</Grid>
		</Box>
	);
}