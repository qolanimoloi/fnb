document.getElementById("calculateBtn").addEventListener("click", function () {
    let costPrice = parseFloat(document.getElementById("costPrice").value);
    let sellingPrice = parseFloat(document.getElementById("sellingPrice").value);
    let quantitySold = parseFloat(document.getElementById("quantitySold").value);
    let result = document.getElementById("result");

    if (isNaN(costPrice) || isNaN(sellingPrice) || isNaN(quantitySold)) {
        result.innerHTML = "⚠️ Please enter valid numbers.";
        return;
    }

    let profitPerItem = sellingPrice - costPrice;
    let totalProfit = profitPerItem * quantitySold;

    result.innerHTML = `💰 Total Profit: <strong>R${totalProfit.toFixed(2)}</strong> 
    <br> 📊 Profit per item: R${profitPerItem.toFixed(2)}`;
});
