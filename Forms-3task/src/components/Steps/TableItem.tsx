import styles from "./Steps.module.css";
import { IStateTable } from "./models/FormProps";

export const TableItem = (props: IStateTable) => {
	const { data, onDelete, onEdit } = props;
	
	if (data) {
		const { date, passed } = data;

		if (date && passed) {
			
			const handleClickDel = () => {
				onDelete(date);
			}

			const handleClickEdit = () => {
				const isEditing = true;
				onEdit({ date, passed, isEditing });
			}

			return (
				<tr>
					<td>{date}</td>
					<td>{passed}</td>
					<td>
						<button
							className={`${styles["btn"]} ${styles["btn-edit"]}`}
							onClick={handleClickEdit}
						></button>
						<button
							className={`${styles["btn"]} ${styles["btn-del"]}`}
							onClick={handleClickDel}
						></button>
					</td>
				</tr>
			)			
		}
	}
}
