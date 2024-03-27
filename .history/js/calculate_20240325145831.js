const tipCalculate = () => {
    let amount = document.getElementById('tip_amount').value;
    console.table(typeof amount);
    console.table(amount);

    let persent = document.getElementById('tip_persent').value;
    console.table(typeof persent);
    console.table(persent);

    let tip = amount * (persent / 100);
    console.table(typeof tip);
    console.table(tip);

    document.getElementById('tip_total').value = Number(tip);

    let total = document.getElementById('total_billed').value = Number(amount) + Number(tip);
    console.table(typeof total);
    console.table(total);
}

