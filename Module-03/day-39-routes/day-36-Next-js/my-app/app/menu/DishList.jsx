import { notFound } from "next/navigation";

export default async function DishPage({ params }) {
            const dish = await getDish(params.id);
            if (!dish) notFound();        // renders not-found.js
            return <DishCard {...dish} />;
}
