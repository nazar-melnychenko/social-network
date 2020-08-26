import React, {useState} from 'react'
import "./Paginator.sass"


let Paginator = ({totalItemsCount, pageSize, onSetCurrentPage, currentPage, positionSize = 10}) => {

	let pages = Math.ceil(totalItemsCount / pageSize)
	let totalPages = []
	for (let i = 1; i <= pages; i++) {
		totalPages.push(i)
	}

	const portionCount = Math.ceil(pages / positionSize)
	const [portionNumber, setPortionNumber] = useState(1)


	const leftNumber = (portionNumber - 1) * positionSize + 1
	const rightNumber = portionNumber * positionSize

	return (
		<div className="paginatorWrapper">
			{portionNumber > 1 && <span onClick={() => setPortionNumber(portionNumber - 1)}>&laquo;</span>}
			{totalPages
				.filter(p => p >= leftNumber && p <= rightNumber)
				.map((p, i) =>
					<span onClick={() => {
						onSetCurrentPage(p)
					}} className={currentPage === p ? 'currentPage' : null} key={i}>{p}</span>
				)}
			{portionCount > portionNumber && <span onClick={() => setPortionNumber(portionNumber + 1)}>&raquo;</span>}
		</div>
	)
}

export default Paginator