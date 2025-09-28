const products = [
    {
        id: 1,
        name: "Computadores",
        category: "computers",
        items: [
            "Computador 1",
            "Computador 2",
            "Computador 3"
        ]
    },
    {
        id: 2,
        name: "Eletrônicos",
        category: "electronics",
        items: [
            "Eletrônico 1",
            "Eletrônico 2",
            "Eletrônico 3"
        ]
    },
    {
        id: 3,
        name: "Livros",
        category: "books",
        items: [
            "Livro 1",
            "Livro 2",
            "Livro 3"
        ]
    }
];

export function getProducts() {
  return products;
}

export function getProductsByCategory(category: string | undefined) {
    const products = getProducts();

    const productItems = products
        .filter(product => product.category === category)
        ?.flatMap(product => product.items);

    return productItems;
}