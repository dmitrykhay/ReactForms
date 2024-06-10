import React, { useEffect, useState } from 'react';

import styles from "./Steps.module.css";

import { IFormData } from "./models/IFormData";
import { IFormProps } from "./models/FormProps";

export const Form = ({ onSubmit, initialData = { date: '', passed: '', isEditing: false } }: IFormProps) => {
	const [formData, setFormData] = useState<IFormData>(initialData);

  useEffect(() => {
		setFormData(initialData);		
	}, [initialData]);
	
	const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		
		onSubmit(formData)
		
		console.log('Сохраненные данные:', formData);
	};
	

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles["wrap-input"]}>
				<label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
				<input
					className={styles["input-other"]}
					type="date"
					name="date"
					id="date"
          value={formData.date}
          onChange={handleInputChange}
					required
				/>
			</div>
			<div className={styles["wrap-input"]}>
				<label htmlFor="passed">Пройдено км</label>
				<input
					className={styles["input-other"]}
					type="number"
					name="passed"
					id="passed"
          value={formData.passed}
          onChange={handleInputChange}
					required
				/>
			</div>
			<input
				className={styles["input-submit"]}
				type="submit"
				// value="ОК"
				value={formData.isEditing ? 'Сохранить' : 'ОК'}
			/>
		</form>
	)
}
