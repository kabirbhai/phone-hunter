const searchPhone = () => {
    const inputValue = document.getElementById('input').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}
const displayPhone = phones => {
    for (const phone of phones) {
        console.log(phone)
    }
}
