export interface IFormData {
	date: string;
  passed: string;
  isEditing?: boolean; // Добавлен новый параметр
}

export interface IFormDataArr {
	data: IFormData[];
}
