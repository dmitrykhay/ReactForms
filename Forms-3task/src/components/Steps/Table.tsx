import { TableItem } from "./TableItem";
import { IPropsTable } from "./models/FormProps";

export const Table = (props:IPropsTable) => {
	const { initialData, onDelete, onEdit } = props;
	
	return (
		<table>
			<thead>
				<tr>
					<th>Дата</th> 
					<th>Пройдено км</th>
					<th>Действия</th>
				</tr>
			</thead>
			<tbody>
				{initialData.map((data, index) => (
					<TableItem
						key={index}
						data={data}
						onDelete={onDelete}
						onEdit={onEdit}
					/>
				))}
			</tbody>
		</table>			
	)
}
