import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as Mui from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		marginTop: theme.spacing(3),
		overflowX: "auto",
	},
	table: {
		minWidth: 650,
	},
	selectTableCell: {
		width: 60,
	},
	tableCell: {
		width: 130,
		height: 40,
	},
	input: {
		width: 130,
		height: 40,
	},
}));

const createData = (name, pros, cons) => ({
	id: name.replace(" ", "_"),
	name,
	pros,
	cons,
});

const CustomTableCell = ({ row, name, onChange }) => {
	const classes = useStyles();
	const { isEditMode } = row;
	return (
		<Mui.TableCell align="left" className={classes.tableCell}>
			{isEditMode ? (
				<Mui.Input
					value={row[name]}
					name={name}
					onChange={(e) => onChange(e, row)}
					className={classes.input}
				/>
			) : (
				row[name]
			)}
		</Mui.TableCell>
	);
};

export default function ManageProsCons() {
	const [rows, setRows] = React.useState([
		createData("Docker", "Rapid Deployment", "Missing features"),
		createData("React", "Reusable Components", "Poor documentation"),
		createData(
			"Node JS",
			"Share the same piece of code with both server and client side",
			"Node.js doesnt provide scalability"
		),
		createData(
			"Postgresql",
			"Largely compliant with SQL standard",
			"Comparatively low reading speed"
		),
	]);
	const [previous, setPrevious] = React.useState({});

	const classes = useStyles();

	const onToggleEditMode = (id) => {
		setRows((state) => {
			return rows.map((row) => {
				if (row.id === id) {
					return { ...row, isEditMode: !row.isEditMode };
				}
				return row;
			});
		});
	};

	const onChange = (e, row) => {
		if (!previous[row.id]) {
			setPrevious((state) => ({ ...state, [row.id]: row }));
		}
		const value = e.target.value;
		const name = e.target.name;
		const { id } = row;
		const newRows = rows.map((row) => {
			if (row.id === id) {
				return { ...row, [name]: value };
			}
			return row;
		});
		setRows(newRows);
	};

	const onRevert = (id) => {
		const newRows = rows.map((row) => {
			if (row.id === id) {
				return previous[id] ? previous[id] : row;
			}
			return row;
		});
		setRows(newRows);
		setPrevious((state) => {
			delete state[id];
			return state;
		});
		onToggleEditMode(id);
	};
	console.log(previous);
	return (
		<Mui.Paper className={classes.root}>
			<Mui.Table className={classes.table} aria-label="caption table">
				<Mui.TableHead>
					<Mui.TableRow>
						<Mui.TableCell align="left" />
						<Mui.TableCell align="left">Manage (Pros and Cons)</Mui.TableCell>
						<Mui.TableCell align="left">Pros</Mui.TableCell>
						<Mui.TableCell align="left">Cons</Mui.TableCell>
					</Mui.TableRow>
				</Mui.TableHead>
				<Mui.TableBody>
					{rows.map((row) => (
						<Mui.TableRow key={row.id}>
							<Mui.TableCell className={classes.selectTableCell}>
								{row.isEditMode ? (
									<>
										<Mui.IconButton
											aria-label="done"
											onClick={() => onToggleEditMode(row.id)}
										>
											<DoneAllIcon />
										</Mui.IconButton>
										<Mui.IconButton
											aria-label="revert"
											onClick={() => onRevert(row.id)}
										></Mui.IconButton>
									</>
								) : (
									<Mui.IconButton
										aria-label="delete"
										onClick={() => onToggleEditMode(row.id)}
									>
										<EditIcon />
									</Mui.IconButton>
								)}
							</Mui.TableCell>

							<CustomTableCell {...{ row, name: "name", onChange }} />
							<CustomTableCell {...{ row, name: "pros", onChange }} />
							<CustomTableCell {...{ row, name: "cons", onChange }} />
						</Mui.TableRow>
					))}
				</Mui.TableBody>
			</Mui.Table>
		</Mui.Paper>
	);
}
