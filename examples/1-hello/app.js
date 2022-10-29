const result = document.querySelector('.result')

const fetchedData = async () => { 
    try {
        const data = await axios.get('/.netlify/functions/helloWorld')
        console.log(data)
        result.textContent= `${data.data}`
    } catch (error) {
        console.log(error.response)
    }
}
fetchedData()