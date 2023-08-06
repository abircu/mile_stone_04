function ticketPrice(ticketQuintity) {
  const firt100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;
  if (ticketQuintity <= 100) {
    const price = ticketQuintity * firt100Rate;
    return price;
  } else if (ticketQuintity <= 200) {
    const firt100price = 100 * firt100Rate;
    const restTicketQuintity = ticketQuintity - 100;
    const restTicketPrice = restTicketQuintity * second100Rate;
    const totalPrice = restTicketPrice + firt100price;
    return totalPrice;
  } else {
    const first100 = 100 * firt100Rate;
    const second100 = 100 * second100Rate;
    const restTicket = ticketQuintity - 200;
    const restTicketPrice = restTicket * restTicketRate;
    const totalTicketPrice = first100 + second100 + restTicketPrice;
    // console.log(first100);
    // console.log(second100);
    // console.log(restTicketPrice);
    return totalTicketPrice;
  }
}
const ticketNumber = 220;
const price = ticketPrice(ticketNumber);
console.log("Total price =", price);
