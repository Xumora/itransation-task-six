import axios from 'axios'

const getUsers = async (setUsers, country, seed, page) => {
    try {
        await axios.get('https://fakedatatask.herokuapp.com/api/user/getUsers', {
            headers: {
                'Content-Type': 'application/json'
            },
            params: { country, seed, page }
        })
            .then(res => {
                if (res?.data) {
                    setUsers((prev) => [...prev, ...res?.data])
                }
            })
    } catch (error) {
        console.log(error);
    }
}

export {
    getUsers
}