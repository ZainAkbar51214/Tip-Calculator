const tipCalculate = () => {
    let amount = document.getElementById('tip_amount').value;
    console.log(typeof amount);
    console.log(amount);

    let persent = document.getElementById('tip_persent').value;
    alert(typeof persent);
    alert(persent);

    let tip = amount * (persent / 100);
    console.log(typeof tip);
    console.log(tip);

    let total = tip + Number(amount) = document.getElementById("total_billed");
    console.log(typeof total);
    console.log(total);
}