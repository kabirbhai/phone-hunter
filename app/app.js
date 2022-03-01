const searchPhone = () => {
    const inputValue = document.getElementById('input').value;
    document.getElementById('input').value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}
const displayPhone = phones => {
    const displayField = document.getElementById('display-field')
    displayField.textContent = '';
    for (const phone of phones) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card">
            <img src="${phone.image}" alt="loading">
            <h3>Name: ${phone.phone_name}</h3>
            <h3>Brand: ${phone.brand}</h3>
            <button>Detailes</button>
        </div>
        <div class="card">
            <img src="${phone.image}" alt="loading">
            <h3>Name: ${phone.phone_name}</h3>
            <h3>Brand: ${phone.brand}</h3>
            <button>Detailes</button>
        </div>
        <div class="card">
            <img src="${phone.image}" alt="loading">
            <h3>Name: ${phone.phone_name}</h3>
            <h3>Brand: ${phone.brand}</h3>
            <button>Detailes</button>
        </div>
        `
        displayField.appendChild(div)
    }
}

// DISPLAY SEARCH PHONE END ------------------------------

// details section start 
