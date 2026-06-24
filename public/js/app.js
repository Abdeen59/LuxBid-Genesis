async function loadItems() {

    const products = document.getElementById("products");

    products.innerHTML = "<h3>جاري تحميل المزادات...</h3>";

    const { data, error } = await sb
        .from("items")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        products.innerHTML = `
            <p>خطأ في تحميل البيانات</p>
        `;
        console.error(error);
        return;
    }

    if (!data || data.length === 0) {
        products.innerHTML = `
            <p>لا توجد مزادات حالياً</p>
        `;
        return;
    }

    products.innerHTML = data.map(item => `
        <div style="
            background:#1e293b;
            padding:20px;
            border-radius:15px;
            text-align:center;
        ">
            <h3>${item.name}</h3>

            <p>${item.origin || ""}</p>

            <p>
                💎 ${item.current_price} π
            </p>

            <p>
                الحالة: ${item.status || "active"}
            </p>
        </div>
    `).join("");

}

loadItems();
