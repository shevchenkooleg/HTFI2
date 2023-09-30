import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (newName: string) => void
}

export const pureAddUser = (
    name: string,
    setError: (newError: string)=>void,
    setName: (newName: string)=>void,
    addUserCallback: (name: string)=>void
) => {
    if (!name){
        setError('Ошибка! Введите имя!')
    } else {
        addUserCallback(name)
        setName('')
    }
}

export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
    if (!name) {
        setError('Ошибка! Введите имя!')
    }

}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
    if (e.key === 'Enter'){
        addUser()
    }
}





const GreetingContainer = (props: GreetingContainerPropsType) => {
    const { addUserCallback, users } = props
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
        setLastName(name)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length ?? 0

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastName}
        />
    )
}

export default GreetingContainer
