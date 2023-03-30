import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				container
				spacing={2}>
				<Grid xs={8}>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio praesentium voluptate fugiat itaque beatae rem quod odio labore, sequi odit iste expedita id harum temporibus sunt ex eligendi modi quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, accusantium blanditiis. Officia voluptatum possimus maxime laborum omnis ipsum necessitatibus, enim iste at culpa veniam molestias inventore libero rem odio quas!</p>
				</Grid>
				<Grid xs={4}>
					<Item>xs=4</Item>
				</Grid>
			</Grid>
		</Box>
	);
}