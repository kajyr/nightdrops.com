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
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Markers with accessible labels
    if (Array.isArray(locations) && locations.length > 0) {
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
  }

  function init() {
    if (typeof L === "undefined") {
      console.error("Leaflet library not loaded");
      return;
    }
    const list = document.querySelectorAll(".map");
    for (const element of list) {
      setup(element);
    }
  }

  // Wait for locations data to be fetched, then init
  const maxAttempts = 50; // 5 seconds (50 * 100ms)
  let attempts = 0;

  function waitForLocations() {
    if (Array.isArray(locations) && locations.length > 0) {
      init();
    } else if (attempts < maxAttempts) {
      attempts++;
      setTimeout(waitForLocations, 100);
    } else {
      // Timeout: locations never loaded
      console.warn("Dives data failed to load within timeout");
      init(); // Initialize anyway, map will be empty
    }
  }

  waitForLocations();
})();

