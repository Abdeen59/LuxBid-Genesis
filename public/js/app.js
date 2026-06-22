document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("loginBtn");

    if(loginBtn){

        loginBtn.addEventListener("click", () =>{

            alert("🚀 Pi Login will be connected in the next step.");

        });

    }

    loadFeaturedProducts();

});

function loadFeaturedProducts(){

    const products=document.getElementById("products");

    products.innerHTML=`

        <div style="
            background:#1e293b;
            padding:20px;
            border-radius:15px;
            text-align:center;
        ">

            <h3>🏺 Ancient Artifact</h3>

            <p>Starting Price: 250 π</p>

        </div>

        <div style="
            background:#1e293b;
            padding:20px;
            border-radius:15px;
            text-align:center;
        ">

            <h3>💎 Luxury Diamond Ring</h3>

            <p>Current Bid: 980 π</p>

        </div>

        <div style="
            background:#1e293b;
            padding:20px;
            border-radius:15px;
            text-align:center;
        ">

            <h3>🎨 Rare Painting</h3>

            <p>Current Bid: 5300 π</p>

        </div>

    `;

}
