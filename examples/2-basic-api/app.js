const result = document.querySelector(".result");

const fetchedData = async () => { 
    try {
        const {data} = await axios.get('/api/basicAPI')
        const products = data.map((product) => {
            const { image:{url},name,price } = product;
            return `
            <article class="product">
                <img
                    src="${url}"
                    alt="utopia sofa"
                />
                <div class="info">
                    <h5>${name}</h5>
                    <h5 class="price">${price}</h5>
                </div>
            </article>
            `
        }).join('')
        result.innerHTML= products;
    } catch (error) {
        console.log(error.response.data);
        result.innerHTML= `<h2>error happened</h2>`;
    }
}

fetchedData()