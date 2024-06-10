import { IFormData } from "./IFormData";

export interface IFormProps {
  onSubmit: (formData: IFormData) => void;
  initialData?: IFormData;
}

export interface IPropsTable {
	initialData: IFormData[],
	onDelete: (dateToDelete: string) => void
	onEdit: (editData: IFormData) => void;
}

export interface IStateTable {
	data: IFormData;
	onDelete: (dateToDelete: string) => void;
	onEdit: (editData: IFormData) => void;
}