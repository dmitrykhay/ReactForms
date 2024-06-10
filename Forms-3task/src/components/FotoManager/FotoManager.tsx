import { useState } from "react";
import styles from "./FotoManager.module.css";

interface IDataFotos {
	urls: string[],
  files: File[],
}

export const FotoManager = () => {
	const  [dataFotos, setDataFotos]  = useState<IDataFotos>({
		urls: [],
		files: [],
	})
	
	const fileToDataUrl = (file: File): Promise<string> => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
		
			fileReader.addEventListener('load', (evt: ProgressEvent<FileReader>) => {
				if (evt.currentTarget) {
					resolve(evt.currentTarget.result);
				}				
			});
			
			fileReader.addEventListener('error', (evt: ProgressEvent<FileReader>) => {
				if (evt.currentTarget) {
					reject(new Error(evt.currentTarget.error));
				}				
			});
			
			fileReader.readAsDataURL(file);
		});
	}

	const handleSelect = async (evt: React.ChangeEvent<HTMLInputElement>) => {
		const files = evt.target.files ? [...evt.target.files] : [];
		const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
		
		setDataFotos((prevState) => ({
      urls: [...prevState.urls, ...urls],
      files: [...prevState.files, ...files],
    }));
		// У вас в массиве - dataUrl, можете использовать в качестве значения атрибута src тега img
	}
	
	const handleDelete = (index: number) => {
		setDataFotos((prevState) => ({
			urls: prevState.urls.filter((_, i) => i !== index),
			files: prevState.files.filter((_, i) => i !== index),
		}));
	};
	

	return (
		<div className={styles.wrap}>
			<div className={styles["file-input-wrapper"]}>
				<span className={styles["click-to-select"]}>Click to select</span>
				<input type="file" name="file" accept="image/*" multiple onChange={handleSelect} />
			</div>
			<div className={styles["wrap-img"]}>
				{dataFotos.urls.map((url, index) =>
					<div key={index} className={styles["image"]}>
						<span className={styles["image-span"]} onClick={() => handleDelete(index)}>X</span>
						<img src={url} alt="Image" />
					</div>
					)}
			</div>
		</div>
	)
}
