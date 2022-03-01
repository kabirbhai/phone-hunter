const loadPhone = () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data))
}
loadPhone()
const displayData = phones => {
    for (const phone of phones) {
        console.log(phone.brand)
        console.log(phone.phone_name)
        console.log(phone.slug)
        console.log(phone.image)
    }
}
