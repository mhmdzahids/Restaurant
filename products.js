const products = [
    {
        "id": 1,
        "name":" Nasi Goreng Ayam",
        "price": 15000,
        "image": "menu/ANEKA MAKANAN/nasigoreng.jpg",
        "description": "Nasi goreng yang disajikan dengan potongan ayam lezat, dipadukan dengan bumbu rempah khas Indonesia."
    },
    {
        "id": 2,
        "name":" Nasi Goreng Teri",
        "price": 15000,
        "image": "menu/ANEKA MAKANAN/nasi goreng teri.jpg",
        "description": "Nasi goreng gurih dengan taburan ikan teri renyah yang memberikan cita rasa khas."
    },
    {
        "id": 3,
        "name":" Nasi Goreng Pete",
        "price": 15000,
        "image": "menu/ANEKA MAKANAN/nasi goreng pete.jpg",
        "description": "Nasi goreng dengan tambahan pete segar, memberikan aroma dan rasa yang menggugah selera."
    },
    {
        "id": 4,
        "name":" Nasi Bakar",
        "price": 10000,
        "image": "menu/ANEKA MAKANAN/IMG-20241024-WA0070.jpg",
        "description": "Nasi berbumbu yang dibungkus daun pisang, kemudian dibakar hingga harum."
    },
    {
        "id": 5,
        "name":" Nasi Goreng Seafood",
        "price": 25000,
        "image": "menu/ANEKA MAKANAN/Nasi Goreng Seafood.jpg",
        "description": "Nasi goreng spesial dengan tambahan aneka seafood segar seperti udang dan cumi."
    },
    {
        "id": 6,
        "name":" Pakcoy",
        "price": 7000,
        "image": "menu/ANEKA MAKANAN/IMG-20241024-WA0067.jpg",
        "description": "Tumis pakcoy segar dengan bawang putih yang kaya akan cita rasa alami."
    },
    {
        "id": 7,
        "name":" Cah Toge",
        "price": 5000,
        "image": "menu/ANEKA MAKANAN/IMG-20241024-WA0066.jpg",
        "description": "Tumis toge segar dengan tambahan bumbu sederhana untuk cita rasa yang nikmat."
    },
    {
        "id": 8,
        "name":" Cah Kangkung",
        "price": 5000,
        "image": "menu/ANEKA MAKANAN/IMG-20241024-WA0065.jpg",
        "description": "Tumis kangkung dengan tambahan bawang putih dan cabai untuk rasa pedas gurih."
    },
    {
        "id": 9,
        "name":" Sop Daging Iga",
        "price": 25000,
        "image": "menu/ANEKA MAKANAN/IMG-20241024-WA0064.jpg",
        "description": "Sup iga sapi dengan kuah bening yang kaya akan rasa kaldu alami."
    },
    {
        "id": 10,
        "name":" Soto Daging Iga",
        "price": 25000,
        "image": "menu/ANEKA MAKANAN/IMG-20241024-WA0063.jpg",
        "description": "Soto dengan potongan daging iga, dilengkapi dengan kuah rempah yang menggoda."
    },
    {
        "id": 11,
        "name":" Soto Ayam",
        "price": 10000,
        "image": "menu/ANEKA MAKANAN/IMG-20241024-WA0062.jpg",
        "description": "Soto ayam tradisional dengan kuah kuning yang kaya rempah dan isian ayam empuk."
    },
    {
        "id": 12,
        "name":" Sop Ayam",
        "price": 10000,
        "image": "menu/ANEKA MAKANAN/IMG-20241024-WA0061.jpg",
        "description": "Sup ayam dengan kuah bening yang segar, cocok untuk dinikmati kapan saja."
    },
    {
        "id": 13,
        "name":" Sapo Tahu",
        "price": 10000,
        "image": "menu/ANEKA MAKANAN/IMG-20241024-WA0068.jpg",
        "description": "Tahu lembut yang dimasak dengan sayuran dan saus kental gurih."
    },
    {
        "id": 14,
        "name":" Tongseng Daging",
        "price": 15000,
        "image": "menu/ANEKA MAKANAN/tongseng.jpg",
        "description": "Tongseng daging sapi dengan kuah kental dan bumbu khas yang memanjakan lidah."
    },
    {
        "id": 15,
        "name":" Chicken Katsu",
        "price": 15000,
        "image": "menu/ANEKA MAKANAN/Chicken Katsu.jpeg",
        "description": "Ayam goreng tepung ala Jepang yang renyah di luar dan juicy di dalam."
    },
    {
        "id": 16,
        "name":" Nasi Putih",
        "price": 5000,
        "image": "menu/ANEKA MAKANAN/IMG-20241024-WA0069.jpg",
        "description": "Nasi putih pulen yang menjadi pelengkap sempurna untuk hidangan apapun."
    },
    {
        "id": 17,
        "name":" 1 Ekor Ayam Biasa",
        "price": 55000,
        "image": "menu/ANEKA MAKANAN/1 Ekor Ayam Biasa.jpg",
        "description": "Satu ekor ayam yang siap disajikan untuk acara keluarga atau pesta."
    },
    {
        "id": 18,
        "name":" 1 Ekor Ayam Kampung",
        "price": 80000,
        "image": "menu/ANEKA MAKANAN/1 Ekor Ayam Kampung.jpg",
        "description": "Ayam kampung utuh yang memiliki tekstur daging lebih padat dan rasa yang khas."
    },
    {
        "id": 19,
        "name":" 1 Ekor Bebek",
        "price": 80000,
        "image": "menu/ANEKA MAKANAN/1 ekor bebek.jpe",
        "description": "Satu ekor bebek utuh yang cocok untuk sajian spesial bersama keluarga."
    },
    {
        "id": 20,
        "name":" Jus Durian",
        "price": 10000,
        "image": "menu/MINUMAN/1.jpg",
        "description": "Jus buah durian yang creamy dan memiliki aroma khas yang menggoda."
    },
    {
        "id": 21,
        "name":" Jus Mangga",
        "price": 10000,
        "image": "menu/MINUMAN/2.jpg",
        "description": "Jus mangga segar yang manis dan menyegarkan untuk dinikmati kapan saja."
    },
    {
        "id": 22,
        "name":" Jus Strawberry",
        "price": 10000,
        "image": "menu/MINUMAN/3.jpg",
        "description": "Jus strawberry segar dengan rasa manis asam yang pas."
    },
    {
        "id": 23,
        "name":" Jus Buah Naga ",
        "price": 10000,
        "image": "menu/MINUMAN/4.jpg",
        "description": "Jus buah naga segar dengan warna merah mencolok dan rasa yang lezat."
    },
    {
        "id": 24,
        "name":" Jus Melon",
        "price": 10000,
        "image": "menu/MINUMAN/5.jpg",
        "description": "Jus melon yang segar dan manis, cocok untuk menemani hari Anda."
    },
    {
        "id": 25,
        "name":" Jus Tomat",
        "price": 10000,
        "image": "menu/MINUMAN/6.jpg",
        "description": "Jus tomat yang segar dan kaya akan nutrisi untuk menjaga kesehatan."
    },
    {
        "id": 26,
        "name":" Jus Sirsak",
        "price": 10000,
        "image": "menu/MINUMAN/7.jpg",
        "description": "Jus sirsak dengan rasa asam manis yang menyegarkan."
    },
    {
        "id": 27,
        "name":" Jus Jambu",
        "price": 10000,
        "image": "menu/MINUMAN/8.jpg",
        "description": "Jus jambu biji segar dengan rasa manis alami."
    },
    {
        "id": 28,
        "name":" Jus Buah Pir",
        "price": 10000,
        "image": "menu/MINUMAN/9.jpg",
        "description": "Jus buah pir segar yang ringan dan menyegarkan."
    },
    {
        "id": 29,
        "name":" Jus Apel",
        "price": 10000,
        "image": "menu/MINUMAN/10.jpg",
        "description": "Jus apel segar dengan rasa manis dan sedikit asam yang alami."
    },
    {
        "id": 30,
        "name":" Jus Semangka",
        "price": 10000,
        "image": "menu/MINUMAN/11.jpg",
        "description": "Jus semangka segar yang menyegarkan di hari yang panas."
    },
    {
        "id": 31,
        "name":" Es Teh Manis",
        "price": 4000,
        "image": "menu/MINUMAN/12.jpg",
        "description": "Es teh manis yang menyegarkan, sempurna untuk menghilangkan dahaga."
    },
    {
        "id": 32,
        "name": "Teh Manis Hangat",
        "price": 4000,
        "image": "menu/MINUMAN/13.jpg",
        "description": "Nikmati kehangatan dan manisnya Teh Manis Hangat yang menyegarkan. Sempurna untuk menemani waktu santai Anda di pagi atau sore hari. Racikan teh pilihan dengan sentuhan gula yang pas, memberikan rasa yang lembut dan menenangkan."
    }
];

export default products;