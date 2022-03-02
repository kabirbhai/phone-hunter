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
    if (phones != !phones) {
        for (const phone of phones) {
            const div = document.createElement('div')
            div.innerHTML = `
        <div class="card">
            <img src="${phone.image}" alt="loading">
            <h3><span>Name:</span> ${phone.phone_name}</h3>
            <h3><span>Brand:</span> ${phone.brand}</h3>
            <button onclick="detailsPhone('${phone.slug}')">Detailes</button>
        </div>
        <div class="card">
            <img src="${phone.image}" alt="loading">
            <h3><span>Name:</span> ${phone.phone_name}</h3>
            <h3><span>Brand:</span> ${phone.brand}</h3>
            <button onclick="detailsPhone('${phone.slug}')">Detailes</button>
        </div>
        <div class="card">
            <img src="${phone.image}" alt="loading">
            <h3><span>Name:</span> ${phone.phone_name}</h3>
            <h3><span>Brand:</span> ${phone.brand}</h3>
            <button onclick="detailsPhone('${phone.slug}')">Detailes</button>
        </div>
        `
            displayField.appendChild(div)
        }
    }
    else {
        alert('not phone found')
    }

}

// DISPLAY SEARCH PHONE END ------------------------------

// details section start 
const detailsPhone = iD => {
    const url = `https://openapi.programming-hero.com/api/phone/${iD}`
    fetch(url)
        .then(res => res.json())
        .then(data => detailesInfo(data.data.releaseDate, data.data.image, data.data.mainFeatures.displaySize, data.data.mainFeatures.chipSet, data.data.mainFeatures.memory))
}

const detailesInfo = (a, b, c, d, e) => {
    const detailsField = document.getElementById('details-field');
    detailsField.textContent = '';
    const div = document.createElement('div')
    div.classList.add('details')
    div.innerHTML = `
    <img src="${b}" alt="loading">
    <h2><span>ReleaseDate:</span> ${a}</h2>
    <h2><span>displaySize:</span> ${c}</h2>
    <h2><span>chipSet:</span> ${d}</h2>
    <h2><span>mamory:</span> ${e}</h2>
    `
    detailsField.appendChild(div)
}
// DETAILE SECTION END 