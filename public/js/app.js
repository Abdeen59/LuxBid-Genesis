async function loadItems() {
  const { data, error } = await sb
    .from("items")
    .select("*");

  if (error) {
    console.error(error);
    return;
  }

  console.log("Items:", data);
}

loadItems();
