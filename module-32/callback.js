function greeting(greetingHandler, name) {
  greetingHandler(name);
}

function greetingHandler(name) {
  console.log("goo omsd", name);
}

function greetingEvening(name) {
  console.log("good evening", name);
}
greeting(greetingHandler, "sohel");
greeting(greetingHandler, "Rana");
greeting(greetingEvening, "abir hasan");
