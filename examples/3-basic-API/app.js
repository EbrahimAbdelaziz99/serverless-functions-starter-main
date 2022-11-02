const result = document.querySelector('.result')

const fetchedData = async () => { 
    try {
        const {data} = await axios.get('/api/basicAPI-2')
        const products = data.map((product) => {
            const { id,image:{url},name,price } = product;
            return `
            <article class="product">
                <a href="product.html?id=${id}">
                    <img src="${url}" alt="utopia sofa" />
                </a>
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