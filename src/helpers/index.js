const formatMoney = (valor) => {
    const formatter = new Intl.NumberFormat('en-CA', {
        style: 'currency',
        currency: 'CAD'
    })
    return formatter.format(valor)
}

const calculateTotalPay = (quantity, term) => {
    let total;

    // Mientras mayor es la cantidad solicitada menor es el interes
    if(quantity < 25000){
        total = quantity * 1.5;
    } else if(quantity >= 25000 && quantity < 30000){
        total = quantity * 1.4;
    } else if(quantity >= 30000 && quantity < 40000){
        total = quantity * 1.3;
    }else{
        total = quantity * 1.2;
    }

    // Mayor plazo mayor interes

    if(term === 6){
        total *= 1.1;
    }else if(term === 12){
        total *= 1.2;
    }else{
        total *= 1.3;
    }
    return total;
}

export {
    formatMoney,
    calculateTotalPay
}