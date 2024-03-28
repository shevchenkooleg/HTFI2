import React from 'react';

type MyPaginationPropsType = {
    id: string
    page: number
    count: number
    onChange: (event: any, newPage: number)=>void
}

const MyPagination = (props: MyPaginationPropsType) => {

    const {page, onChange, id, count} = props
    const pageCountNumbers = []
    for (let i = 1; i <= count; i++){
        pageCountNumbers.push(i)
    }

    return (
        <nav id={id} style={{display: "flex", width: '100px', justifyContent: 'space-between'}}>
            {pageCountNumbers.map((el)=>{
                return (
                    <button
                        onClick={(event)=>onChange(event,el)}
                    >
                        {String(el)}
                    </button>
                )
            })}
        </nav>
    );
};

export default MyPagination;