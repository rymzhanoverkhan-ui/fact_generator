const facts = {
    space: [
        "На Юпитере идёт буря, которая длится уже более 300 лет.",
        "Солнце составляет 99.8% массы всей Солнечной системы.",
        "На Венере сутки длиннее, чем год."
    ],
    animals: [
        "Осьминоги имеют три сердца.",
        "Коты могут издавать более 100 различных звуков.",
        "Слоны — единственные животные, которые не умеют прыгать."
    ],
    history: [
        "Первые города появились около 7000 лет назад.",
        "В Древнем Египте кошек почитали как священных животных.",
        "Викинги использовали кристаллы для навигации по солнцу."
    ],
    tech: [
        "Первый компьютер весил более 27 тонн.",
        "Wi-Fi был случайно изобретён во время экспериментов с радиоволнами.",
        "Первый смартфон появился в 1992 году."
    ]
};

function generateFact() {
    const category = document.getElementById("categorySelect").value;
    let allFacts = [];

    if (category === "all") {
        Object.values(facts).forEach(arr => allFacts.push(...arr));
    } else {
        allFacts = facts[category];
    }

    const randomFact = allFacts[Math.floor(Math.random() * allFacts.length)];
    document.getElementById("factBox").textContent = randomFact;
}
