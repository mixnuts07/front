import React, { useState } from "react"

export default function CleanerReactArticle() {
    return (
        <div>
            <h2>これは <a href="https://zenn.dev/t_keshi/books/you-and-cleaner-react/viewer/preface">You and 120% Cleaner React</a>という記事の内容の写経。Reactの14のアンチパターンと改善案について書いていく。</h2>
            <Chapter2 />
            <Chapter3 />
        </div>
    )
}

function Chapter2() {
    const [todoListQuery, setTodoListQuery] = useState({
        data: undefined,
        isLoading: false,
        error: null
    })
    const [todoForm, setTodoForm] = useState({
        todoTitle: '',
        description: '',
        estimatedTime: 0,
        status: '',
        deadline: ''
    })
    const [createTodoModalIsOpen, setCreateTodoModalIsOpen] = useState()
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [inputName, setInputName] = useState({
        first: '',
        last: ''
    })
    function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value)
    }
    function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value)
    }
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputName({
            ...inputName,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="bg-slate-300">
            <h4>UseStateを多様しすぎて可読性が低くなる問題。これはたくさんのStateがどんな時に変更されるのか？が分かりづらいことが問題。</h4>
            <h5>まずはStateをジャンル分けする。例えば、TODOのデータ取得に関するState/新しいTODOの入力/モーダルの開閉など。</h5>
            <h5>Stateを構造化することに向くケースは、同じタイミングで更新される場合。タイミングが別なら別にした方が良いかも。</h5>
            <div> 
            <label>
                First Name is : {firstName}
                <input type="text" value={firstName} onChange={handleFirstNameChange}/>
            </label>
            <label>
                Last Name is : {lastName}
                <input type="text" value={lastName} onChange={handleLastNameChange}/>
            </label>
            <label>
                first Name is : {inputName.first}
                <input type="text" name='first' value={inputName.first} onChange={handleChange}/>
            </label>
            <label>
                Last Name is : {inputName.last}
                <input type="text" name='last' value={inputName.last} onChange={handleChange}/>
            </label>
            </div>
        </div>
    )
}

function Chapter3() {
    return (
        <div>
            <h5>コンポーネントの分割を適切に行わず、巨大なコンポーネントを作ってしまうこと。変更容易性の天敵。</h5>

        </div>
    )
}