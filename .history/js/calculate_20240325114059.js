const tipCalculate = () => {
    let amount = document.getElementById('tip_amount').value;
    let persent = document.getElementById('tip_persent').value;
    // alert(persent);

    let tip = amount * (persent / 100);
    console.log(tip);
    let total = tip + amount;
    console.log(total);
}