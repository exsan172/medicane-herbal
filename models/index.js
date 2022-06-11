const sick = [
    {
        "id" : 1,
        "sick" : "Batuk"
    },
    {
        "id" : 2,
        "sick" : "Mual"
    },
    {
        "id" : 3,
        "sick" : "Mencret"
    }
]

const ingredient = [
    {
        "id" : 1,
        "sickName" : "Batuk",
        "ingredient" : [
            {
                "id" : "1",
                "ingredientName" : "Jahe"
            },
            {
                "id" : "2",
                "ingredientName" : "Jeruk"
            },
        ]
    },
    {
        "id" : 2,
        "sickName" : "Mual",
        "ingredient" : [
            {
                "id" : "1",
                "ingredientName" : "Jahe"
            },
            {
                "id" : "2",
                "ingredientName" : "Jeruk"
            },
        ]
    }
]

const detailIngredient = [
    {
        "id" : 1,
        "ingredientName" : "Jahe",
        "desc" : "Jahe (Zingiber officinale), adalah tumbuhan yang rimpangnya sering digunakan sebagai rempah-rempah dan bahan baku pengobatan tradisional. Rimpangnya berbentuk jemari yang menggembung di ruas-ruas tengah. Rasa dominan pedas yang dirasakan dari jahe disebabkan oleh senyawa keton bernama zingeron.",
        "processingMethod" : [
            "diputar",
            "dijilat",
            "dicelupin"
        ],
        "writer" : "(coli enak 3 kali sehari)",
        "source" : "https://id.wikipedia.org/wiki/Jahe"
    },
    {
        "id" : 2,
        "ingredientName" : "Jeruk",
        "desc" : "Jeruk atau limau adalah semua tumbuhan berbunga anggota marga Citrus dari suku Rutaceae (suku jeruk-jerukan). Anggotanya berbentuk pohon dengan buah yang berdaging dengan rasa masam yang segar, meskipun banyak di antara anggotanya yang memiliki rasa manis. Rasa masam berasal dari kandungan asam sitrat yang memang menjadi terkandung pada semua anggotanya.",
        "processingMethod" : [
            "diputar",
            "dijilat",
            "dicelupin"
        ],
        "writer" : "(coli enak 3 kali sehari)",
        "source" : "https://id.wikipedia.org/wiki/Jeruk"
    }
]

module.exports = {
    sick : sick,
    ingredient : ingredient,
    detailIngredient : detailIngredient
}