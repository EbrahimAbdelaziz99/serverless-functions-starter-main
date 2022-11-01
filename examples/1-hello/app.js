const result = document.querySelector('.result')

const fetchedData = async () => { 
    try {
        const {data} = await axios.get('/api/helloWorld')
        console.log(data)
        result.textContent= data
    } catch (error) {
        console.log(error.response.data)
    }
}
fetchedData()