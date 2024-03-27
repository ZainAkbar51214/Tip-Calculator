const tipCalculate = () => {
    let amount = document.getElementById('tip_amount').value;
    let persent = document.getElementById('tip_persent').value;
    alert(typeof persent);
    alert(persent);

    let tip = amount * (persent / 100);
    console.log(typeof tip);
    console.log(tip);
    let total = tip + amount;
    console.log(typeof total);
    console.log(total);
}