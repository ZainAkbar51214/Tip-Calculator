const tipCalculate = () => {
    let amount = document.getElementById('tip_amount').value;
    console.log(typeof amount);
    console.log(amount);

    let persent = document.getElementById('tip_persent').value;
    console.log(typeof persent);
    console.log(persent);

    let tip = amount * (persent / 100);
    console.log(typeof tip);
    console.log(tip);

    let tip_total = document.getElementById('tip_total').value = tip;

    let total = document.getElementById('total_billed').value = Number(amount) + tip;
    console.log(typeof total);
    console.log(total);
}
