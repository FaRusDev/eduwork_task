const loadingText = document.getElementById('loading')
const API_KEY = '8533aefa02d7472c9016654acd4709cd';




//ambil data
const ambilData = async (api_key) => {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?` + `country=id` + `&apiKey=${api_key}`);
            const data = await response.json();
            if(response){
                loadingText.style.display = 'none';
            }
            const card = document.getElementById('card')
            let x = ''
           
            data.articles.map((article) => {
                x += `
                <div class="card ">
                <img class="card-img-top" src="${article.urlToImage}" alt="Card image cap"><div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                  <p class="card-text">${article.description}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`
            //    console.log(article)
            })

        card.innerHTML = x
            
        } catch (error) {
            console.log(error)
        }
    
}


const cariData = async (param,api_key) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?` + `q=${param}` + `&apiKey=${api_key}`);
        const data = await response.json();
        if(response){
            loadingText.style.display = 'none';
        }

        const card = document.getElementById('card')
        let x = ''           
        data.articles.map((article) => {
            x += `
            <div class="card ">
            <img class="card-img-top" src="${article.urlToImage}" alt="Card image cap"><div class="card-body">
            <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
        //    console.log(article)
        })

    card.innerHTML = x
    }catch(error){
        console.log(error)
    }
}



//fungsi tombol diklik
function searchNews(e){
    e.preventDefault()
    function dataToVar(d){
        x.push(d)
    }    
   

    //ambil data dari input search
    const formData = new FormData(e.target);

    const input_search = formData.get("search");

    if(input_search == ''){
        ambilData(api_key=API_KEY);
    }else{
        cariData(input_search, API_KEY)

    }

}


//jalankan fungsi ambil data untuk awal masuk
ambilData(api_key=API_KEY);