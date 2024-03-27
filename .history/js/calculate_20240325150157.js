const tipCalculate = () => {
    let amount = document.getElementById('tip_amount').value;
    console.tab(typeof amount);
    console.tab(amount);

    let persent = document.getElementById('tip_persent').value;
    console.tab(typeof persent);
    console.tab(persent);

    let tip = amount * (persent / 100);
    console.tab(typeof tip);
    console.tab(tip);

    document.getElementById('tip_total').value = Number(tip);

    let total = document.getElementById('total_billed').value = Number(amount) + Number(tip);
    console.tab(typeof total);
    console.tab(total);
}

