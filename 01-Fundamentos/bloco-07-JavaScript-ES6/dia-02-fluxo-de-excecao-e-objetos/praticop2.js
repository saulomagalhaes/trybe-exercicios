const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const orderModifier = (order) => {
  order['name'] = 'Saulo Alves Magalhães'
  order['payment']['total'] = '100'
  return order
}

orderModifier(order);

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;
  const newOrder = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  console.log(`Olá ${deliveryPerson}, entrega de uma pizza sabor ${newOrder[0]} e ${newOrder[1]} com uma bebida:${drinks} para: ${name}, telefone:${phoneNumber},${street}, Número:${number}, AP:${apartment} Valor total: ${order.payment.total}`)
}

customerInfo(order);