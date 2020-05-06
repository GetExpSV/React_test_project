import React, {useEffect, useState} from 'react'
import style from './Pagination.module.css'

let Pagination = ({currentPage, setCurrentPage, totalPage}) => {
    let [toBegin, setToBegin] = useState(1);
    let [toEnd, setToEnd] = useState(totalPage);
    useEffect(() => {
        setToEnd(totalPage)
    }, [totalPage])


    let ChangeCurrentPage = (value) => {
        setCurrentPage(value)
    }

    let toFirstPage = () => {
        setCurrentPage(toBegin)
    }
    let toLastPage = () => {
        setCurrentPage(toEnd)
    }
    let toBefore = () => {
        setCurrentPage(currentPage - 1)
    }
    let toAfter = () => {
        setCurrentPage(currentPage + 1)
    }

    let page = [];
    for (let i = 1; i <= totalPage; i++) {
        page.push(i);
    }

    let arrayPage;
    if (currentPage <= 2) {
        arrayPage = page.filter(value => value <= 5).map(v => <button onClick={() => ChangeCurrentPage(v)}
                                                                      className={currentPage === v ? style.activePage :
                                                                          style.pagination__button}>{v}</button>)
    }
    if (currentPage > 2) {
        arrayPage = page.filter(value => value >= currentPage - 2 && value <= currentPage + 2)
            .map(v => <button onClick={() => ChangeCurrentPage(v)} className={currentPage === v ? style.activePage :
                style.pagination__button}>{v}</button>)
    }


    return (<div className={style.pagination__container}>
        <button onClick={toFirstPage} className={style.pagination__button}
                disabled={currentPage === toBegin}>{"<<"}</button>
        <button onClick={toBefore} className={style.pagination__button}
                disabled={currentPage === toBegin}>{"<"}</button>
        {arrayPage}
        <button onClick={toAfter} className={style.pagination__button} disabled={currentPage === toEnd}>{">"}</button>
        <button onClick={toLastPage} className={style.pagination__button}
                disabled={currentPage === toEnd}>{">>"}</button>
    </div>);
}

export default Pagination;