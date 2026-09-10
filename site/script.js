const container = document.getElementById("dates");

for (const { label, photos } of SITE_DATA) {
  const section = document.createElement("section");
  section.className = "date-section";

  const heading = document.createElement("h2");
  heading.textContent = label;
  section.appendChild(heading);

  const row = document.createElement("div");
  row.className = "photo-row";
  for (const { date, name } of photos) {
    const img = document.createElement("img");
    img.src = `../labeled/${date}/${name}`;
    img.alt = name;
    img.loading = "lazy";
    row.appendChild(img);
  }
  section.appendChild(row);

  container.appendChild(section);
}
