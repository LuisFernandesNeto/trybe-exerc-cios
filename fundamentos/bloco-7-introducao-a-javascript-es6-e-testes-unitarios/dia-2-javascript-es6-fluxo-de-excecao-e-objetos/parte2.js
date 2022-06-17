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


  const customerInfo = (order) => {
    const name = order.name;
   const phone = order.phoneNumber;
   const deliveryPerson = order.order.delivery.deliveryPerson;
   const street = order.address.street;
   const number = order.address.number;
   const ap = order.address.apartment;

    console.log(`Olá ${deliveryPerson}, entrega para: ${name}, telefone ${phone}, ${street}, N${number}, AP:${ap}`);
  }
  
  customerInfo(order);

  const orderModifier = (order) => {
  

    console.log(`Olá ${name}`)
  }
  
  orderModifier(order);