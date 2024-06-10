import styles from "./Steps.module.css";
import { Form } from "./Form";
import { Table } from "./Table";

import { IFormData } from "./models/IFormData";
import { useState } from "react";

export const Steps = () => {
	const [formData, setFormData] = useState<IFormData>({
    date: '',
		passed: '',
		isEditing: false
	});

	const [arr, setArr] = useState<IFormData[]>([]);

	const sortedArr = arr.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateB.getTime() - dateA.getTime();
	});
	
	const handleFormSubmit = (data: IFormData) => {
		const existingItem = arr.find((item) => item.date === data.date);
		if (existingItem) {
			setArr((prevArr) => {
				const updatedArr = prevArr.map((item) => {
					if (item.date === data.date) {
						if (!data.isEditing) {
							return {
							...item,
							passed: (parseFloat(item.passed) + parseFloat(data.passed)).toFixed(1),
						};
						} else {
							return {
								...item,
								passed: parseFloat(data.passed).toFixed(1),
							};
						}						
					}
					return item;
				});
				return updatedArr;
			});
		} else {
			setArr((prevArr) => [...prevArr, { ...data, passed: parseFloat(data.passed).toFixed(1) }]);
		}
		setFormData({ date: '', passed: '', isEditing: false });
	};
	
	const handleDelete = (dateToDelete: string) => {
		setArr((prevArr) => prevArr.filter((item) => item.date !== dateToDelete));
	}

	const handleEdit = (editData: IFormData) => {
		setFormData(editData);
	};


	return (
		<div className={styles.wrap}>
			<Form
				onSubmit={handleFormSubmit}
				initialData={formData}
			/>
			<Table
				initialData={sortedArr}
				onDelete={handleDelete}
				onEdit={handleEdit}
			/>
		</div>
	)
}
