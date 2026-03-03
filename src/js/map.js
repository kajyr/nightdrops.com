(function () {
  const maxZoom = 15;

  function setup(element) {
    const lat = Number(element.dataset.lat);
    const lng = Number(element.dataset.lng);
    const zoom = Number(element.dataset.startZoom);

    const map = L.map(element, { maxZoom, minZoom: 3 }).setView(
      [lat, lng],
      zoom
    );

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Markers with accessible labels
    for (const loc of locations) {
      const markerLabel = `${loc.site}, ${loc.place}, ${loc.country}`;
      const marker = L.marker([loc.lat, loc.lng], {
        title: markerLabel,
        alt: markerLabel,
      }).addTo(map);
      // Bind tooltip for hover/focus
      marker.bindTooltip(markerLabel, { permanent: false });
    }
  }

  function init() {
    if (typeof L === "undefined") {
      throw new Error("L is undefined");
    }
    const list = document.querySelectorAll(".map");
    for (const element of list) {
      setup(element);
    }
  }
  init();
})();
