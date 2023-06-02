function highlight(table) {
	const AVAILABLE = 'available';
	const UNAVALIABLE = 'unavailable';
	const MALE = 'male';
	const FEMALE = 'female';

	// Получаем массивы ячеек столбцов с соответсвующими заголовками
	const statusColumn = findTableColumn(table, 'Status');
	const genderColumn = findTableColumn(table, 'Gender');
	const ageColumn = findTableColumn(table, 'Age');

	// Обработка условий по статусам
	statusColumn.forEach(elem => {
		const row = elem.closest('tr');
		if (!('available' in elem.dataset)) {
			row.setAttribute('hidden', '');
		} else if (elem.dataset.available == 'true') {
			row.classList.add(AVAILABLE);
		} else if (elem.dataset.available == 'false') {
			row.classList.add(UNAVALIABLE);
		}
	});

	// Обработка условий по гендеру
	genderColumn.forEach(elem => {
		const row = elem.closest('tr');
		switch (elem.textContent) {
			case 'm':
				row.classList.add(MALE);
				break;

			case 'f':
				row.classList.add(FEMALE);
				break;
		}
	});

	// Обработка условий по возрасту
	ageColumn.forEach(elem => {
		const row = elem.closest('tr');
		console.log(elem.textContent);
		if (isFinite(elem.textContent) && Number(elem.textContent) < 18) {
			row.style = "text-decoration: line-through";
		}
	});
}

// Получаем номер колонки по ее заголовку
function findNumOfHeaderCell(table, text) {
	const cells = Array.from(table.tHead.querySelectorAll('td'));

	for (element of cells) {
		if (element.textContent.includes(text)) {
			return element.cellIndex;
		}
	}

	return false;
}

// Получаем массив ячеек столбца по его заголовку
function findTableColumn(table, text) {
	const columnIndex = findNumOfHeaderCell(table, text);

	let cellsList = [];
	Array.from(table.rows).forEach(row => {
		const cells = Array.from(row.cells);
		cellsList.push(cells[columnIndex]);
	})

	return cellsList;
}
