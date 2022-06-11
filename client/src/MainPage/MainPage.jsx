import React, { useEffect, useState } from 'react'
import { getUsers } from '../api/getUsers'
import CountrySelect from './components/CountrySelect/CountrySelect'
import ErrorBox from './components/ErrorBox/ErrorBox'
import SeedBox from './components/SeedBox/SeedBox'
import UsersTable from './components/UsersTable/UsersTable'
import { CSVLink } from "react-csv";
import './MainPage.scss'


const MainPage = () => {
    const [users, setUsers] = useState([])
    const [country, setCountry] = useState('')
    const [seed, setSeed] = useState(undefined)
    const [page, setPage] = useState(1)
    const [errors, setErrors] = useState(0)

    useEffect(() => {
        if (country !== "" && seed) {
            getUsers(setUsers, country, seed, page)
        }
    }, [country, seed, page])

    const changeCountry = (event) => {
        if (event.target.value === country) {
            return
        }
        setUsers([])
        setPage(1)
        setCountry(event.target.value)
    }

    return (
        <div className='mainPage'>
            <div className="mainPage-top d-flex align-items-center justify-content-between bg-light border-bottom py-3 px-5">
                <div className="mainPage-top-country w-25">
                    <CountrySelect country={country} setCountry={changeCountry} />
                </div>
                <div className="mainPage-top-error w-25">
                    <ErrorBox defaultValue={errors} setErrors={setErrors} />
                </div>
                <div className="mainPage-top-seed w-25">
                    <SeedBox changeSeed={setSeed} defaultValue={seed} setUsers={setUsers} setPage={setPage} />
                </div>
                {
                    users?.length > 0 ? <CSVLink
                        data={users}
                        filename={"users.csv"}
                        className="btn btn-primary"
                        target="_blank"
                        headers={[
                            { label: 'ID', key: 'id' },
                            { label: 'Name', key: 'name' },
                            { label: 'Phone', key: 'phone' },
                            { label: 'City', key: 'address.city' },
                            { label: 'Street', key: 'address.street' },
                        ]}
                    >
                        Download
                    </CSVLink> : ''
                }
            </div>
            <div className="mainPage-main p-5">
                {
                    users?.length > 0 ? <UsersTable users={users} setPage={setPage} /> : ''
                }
            </div>
        </div >
    )
}

export default MainPage