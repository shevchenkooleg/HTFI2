import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {

    const lastPage = totalCount - Math.round(totalCount / itemsCountForPage) * itemsCountForPage <= 0
        ? Math.round(totalCount / itemsCountForPage)
        : Math.round(totalCount / itemsCountForPage) + 1

    const onChangeCallback = (event: any, newPage: number) => {
        onChange && onChange(newPage, itemsCountForPage)
    }

    const onChangeSelect = (newCount: any) => {
        onChange && onChange(page, newCount)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                   height: '30px'
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChangeOption={onChangeSelect}
                className={s.select}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
