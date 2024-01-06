async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    const map = new YMap(
        document.getElementById('app'),
        {
            location: {
                center: [position.coords.latitude, position.coords.longitude],
                zoom: 10
            }
        }
    );

    map.addChild(new YMapDefaultSchemeLayer());
}

initMap();
