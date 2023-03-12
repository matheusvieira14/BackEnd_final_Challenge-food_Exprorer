import { prisma } from "../src/database/prisma";

const categories = [
    "Pratos Principais",
    "Sobremesas",
    "Bebidas"
]

async function createCategory(category: string) {
    await prisma.category.create({
        data: {
            name: category
        }
    })
}

async function main() {
    categories.map(category => {
        createCategory(category)
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })