var shoppingCart = {
  books: 3,
  sunglass: 5,
  keyboard: 5,
  mouse: 1,
  pen: 25,
};

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// basic way to declear property name and values
for (var i = 0; i < keys.length; i++) {
  var propertyName = keys[i];
  var propertyValues = shoppingCart[propertyName];
  console.log(propertyName, propertyValues);
}

// easy to declear property name and value using for in loop

for (var propertyName in shoppingCart) {
  const value = shoppingCart[propertyName];
  console.log(propertyName, value);
}
