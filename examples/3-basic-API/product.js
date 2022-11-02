const result = document.querySelector('.result')

const fetchedData = async () => { 
    try {
        const id = window.location.search;
        const {data} = await axios.get(`/api/basicAPI-2${id}`)
        const { image:{url},name, description ,price } = data;
        let product = `
            <h1 class="title">${name}</h1>
            <article class="product">
                <img class="product-img"
                src="${url}"
                alt="utopia sofa"
                />
                <div class="product-info">
                <h5 class="title">${name}</h5>
                <h5 class="price">${price}</h5>
                <p class="desc">${description}</p>
                </div>
            </article>
            `
        result.innerHTML= product;
    } catch (error) {
        console.log(error.response.data);
        result.innerHTML= `<h2>error happened</h2>`;
    }
}

fetchedData()