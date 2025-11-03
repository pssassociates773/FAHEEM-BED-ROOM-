var APP_DATA = {
  "scenes": [
    {
      "id": "0-dressing",
      "name": "DRESSING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.018057510394299925,
        "pitch": 0.010351530535373854,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 3.010535749142093,
          "pitch": 0.2859567959878859,
          "rotation": 5.497787143782138,
          "target": "1-bed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bed",
      "name": "BED",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.02102143512852095,
        "pitch": 0.020216471505698053,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.596198184705889,
          "pitch": 0.17795628777763994,
          "rotation": 1.5707963267948966,
          "target": "0-dressing"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "FAHEEM BED ROOM (NAD)",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
