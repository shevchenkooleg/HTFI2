import React from 'react'
import DownIcon from '../Down.svg'
import UpIcon from '../Up.svg'
import NoneIcon from '../UpDown.svg'

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

    console.log('sort ', sort)
    console.log('down ', down)
    console.log('up ', up)
    if (sort === down){
        return up
    }
    if (sort === up){
        return ''
    }
    return down
    // return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? DownIcon
        : sort === up
            ? UpIcon
            : NoneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{marginLeft: '15px'}}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt={'sort-order-icon'}
            />
        </span>
    )
}

export default SuperSort
