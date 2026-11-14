

export default async function SingleDishPage({ params }) {
    const { id } = params;
    
    const res = await fetch('/menu.js',
        {revalidate: 3000});

    const {data: dishes} = await res.json()

    const dish = dishes.find((selectedDish) => selectedDish.id === id)

    console.log(dishes)
}