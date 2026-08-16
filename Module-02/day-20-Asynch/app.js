async function getList() {

    const dish = await fetch("http://localhost:3000/dishes");

    if(!dish.ok){
        throw new Error('Can not retrieve the data')
    }

    const result = dish.json()
    return result
}

const lists = document.getElementById('list')

async function load() {
    lists.innerHTML = 'Loading...'

    try {
        const dishes = await getList()
        lists.innerText = ''

        dishes.forEach(list => {
            const li = document.createElement('li')
            li.textContent = `${list.name} -- ${list.price} ETB`
            lists.append(li)
        });
    } catch (error) {
        lists.innerHTML = `Error occured ${error}`
    }
}

load()