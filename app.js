const Apples = {
    Name: "Apples",
    Group: "Fruit",
    Healthy: "Yes",
    Color: ["Red, Yellow, Green"],
    Taste: "Sweet",
    Grown: "trees",
};
const Strawberry = {
    Name: "Strawberry",
    Group: "Berry",
    Healthy: "Yes",
    Color: ["Red, Green"],
    Taste: "Sweet",
    Grown: "Vine",
};
const Pear = {
    Name: "Pear",
    Group: "Fruit",
    Healthy: "Yes",
    Color: "Green",
    Taste: "Sweet",
    Grown: "Tree",
};
const Grape = {
    Name: "Grape",
    Group: "Fruit",
    Healthy: "Yes",
    Color: [" Red, Purple, Green"],
    Taste: "Sweet",
    Grown: "Vine",
};
const Watermelon = {
    Name: "Watermelon",
    Group: "Fruit",
    Healthy: "Yes",
    Color: ["Red and Green"],
    Taste: "Sweet",
    Grown: "Vine",
};
let foods = [Apples, Strawberry, Pear, Grape, Watermelon];
foods.forEach((food) => console.log(food.Name));
foods.forEach((food) => console.log(food.Name, food.Group));
const Healthy = foods.filter(foods => {
    return foods.Grown.includes("Tree");
});
Healthy.forEach((Healthy) => console.log(Healthy.Name, Healthy.Grown));

