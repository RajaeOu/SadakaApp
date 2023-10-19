require(["esri/config", "esri/Map", "esri/views/MapView","esri/widgets/Zoom","esri/widgets/Search", "esri/layers/FeatureLayer","esri/renderers/UniqueValueRenderer","esri/renderers/ClassBreaksRenderer","esri/symbols/FillSymbol","esri/symbols/SimpleFillSymbol","esri/renderers/SimpleRenderer","esri/renderers/PieChartRenderer","esri/widgets/Editor","esri/widgets/BasemapGallery","esri/widgets/DistanceMeasurement2D","esri/widgets/AreaMeasurement2D","esri/widgets/Legend", "esri/widgets/Expand","esri/PopupTemplate","esri/widgets/FeatureTable", "https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js", "esri/Graphic",
"esri/geometry/Point","esri/layers/CSVLayer","esri/layers/GraphicsLayer","esri/rest/support/PrintTemplate","esri/widgets/Print","esri/widgets/LayerList"
], function(esriConfig, Map, MapView,Zoom, Search,FeatureLayer,UniqueValueRenderer, ClassBreaksRenderer, FillSymbol,SimpleFillSymbol,SimpleRenderer,PieChartRenderer,Editor,BasemapGallery,DistanceMeasurement2D, AreaMeasurement2D,Legend, Expand,PopupTemplate,FeatureTable,Papa, Graphic,
Point,CSVLayer,GraphicsLayer,PrintTemplate,Print,LayerList){
    esriConfig.apiKey = "AAPK4616b20e599b4a619614ba3cae27c0caYcvLCeFOFAuTJMwLYTKKx4jIGWObkY-XYbhcqXovJS4hPSLsftS6WlSDWN3nCK9V";
    let activeWidget = null;
    const map = new Map({
        basemap: "arcgis-topographic" ,
      
        });
      
        const divf=document.getElementById("ff");
        const view = new MapView({
        map: map,
        center: [-7.62, 33.59], // Longitude, latitude
        zoom: 10, // Zoom level
        container: "viewDiv" // Div element
        });
        
        view.ui.add(divf)
       
        document.getElementById("distanceButton").addEventListener("click", function() {
          setActiveWidget(null);
          if (!this.classList.contains("active")) {
            setActiveWidget("distance");
          } else {
            setActiveButton(null);
          }
        });

        document.getElementById("areaButton").addEventListener("click", function() {
          setActiveWidget(null);
          if (!this.classList.contains("active")) {
            setActiveWidget("area");
          } else {
            setActiveButton(null);
          }
        });

        function setActiveWidget(type) {
          switch (type) {
            case "distance":
              activeWidget = new DistanceMeasurement2D({
                view: view
              });

              // skip the initial 'new measurement' button
              activeWidget.viewModel.start();

              view.ui.add(activeWidget, "top-right");
              setActiveButton(document.getElementById("distanceButton"));
              break;
            case "area":
              activeWidget = new AreaMeasurement2D({
                view: view
              });

              // skip the initial 'new measurement' button
              activeWidget.viewModel.start();

              view.ui.add(activeWidget, "top-right");
              setActiveButton(document.getElementById("areaButton"));
              break;
            case null:
              if (activeWidget) {
                view.ui.remove(activeWidget);
                activeWidget.destroy();
                activeWidget = null;
              }
              break;
          }
        }

        function setActiveButton(selectedButton) {
          // focus the view to activate keyboard shortcuts for sketching
          view.focus();
          let elements = document.getElementsByClassName("active");
          for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("active");
          }
          if (selectedButton) {
            selectedButton.classList.add("active");
          }
        }

        let typeRenderer = {
          type: "simple", // autocasts as new SimpleRenderer()
          symbol: {
            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
            size: 9,
            color: "red",
            outline: { // autocasts as new SimpleLineSymbol()
              width: 0.5,
              color: "white"
            }
          },
          
        };
      
    
    
      let popRenderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
          type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
          size: 9,
          color: "green",
          outline: { // autocasts as new SimpleLineSymbol()
            width: 0.5,
            color: "white"
          }
        },
        
      };
      
var popregion = new PopupTemplate({
  title: "<b> {NOM_REG} </br>" }) ;
        var popsupportligne = new PopupTemplate({
          title: "<b>Support ligne : </br>",
          content: "<p > <span style='color: blue;font-weight: bold'>Ligne 60 KV n 261 KHEMISSET-MÄAZIZ : </span>{Ligne_60_K} <br> " +
            "<span style='color: blue;font-weight: bold'>Equipe : </span>{equipe}  <br> <span style='color: blue;font-weight: bold'> Site :</span> {Site} <br> <span style='color: blue;font-weight: bold'> ImmobilisationAInventorier : </span>  {Immobilisa} <br> " +
            " <span style='color: blue;font-weight: bold'> DateMiseEnServLocal :</span> {DateMiseEn} <br> <span style='color: blue;font-weight: bold'> ArticlePere : </span> {ArticlePer} <br> <span style='color: blue;font-weight: bold'> FamilleArticle : </span> {FamilleArt} <br> " +
            "<span style='color: blue;font-weight: bold'> DateCollect : </span> {DateCollec} <br> <span style='color: blue;font-weight: bold'> NumFiesArticle : </span> {NumFiesArt}  <br> <span style='color: blue;font-weight: bold'> DateMiseEnServiceArticle : </span> {DateMise_1} <br> " +
            " <span style='color: blue;font-weight: bold'> DateOperation : </span> {DateOperat}</p>"
        });
        var poptypeligne = new PopupTemplate ({
          title: "<b> Ligne de type :{Type_de_Po} </br>",
          content: "<p > <span style='color: blue;font-weight: bold'>Site : </span>{Site} <br> " +
          "<span style='color: blue;font-weight: bold'> Zone d'affectation : </span>{Zone_Affec}  <br> <span style='color: blue;font-weight: bold'> Numero Fies Local:</span> {NumeroFies} <br> <span style='color: blue;font-weight: bold'> DateMiseEnServLocal : </span>  {DateMiseEn} <br> " +
          " <span style='color: blue;font-weight: bold'> FamilleArt</span> {FamilleArt} <br> <span style='color: blue;font-weight: bold'> NumFiesArt: </span> {NumFiesArt} <br> <span style='color: blue;font-weight: bold'> DateMise_1 : </span> {DateMise_1} <br> " +
          "<span style='color: blue;font-weight: bold'> caracteristique: </span> {caracteris} <br> </p>"
     
        })
const Maroc = new FeatureLayer({
    url: "https://services7.arcgis.com/x4jL1wQ6vvYmFfuN/arcgis/rest/services/maroc1/FeatureServer/0"
  });

  const supportligne = new FeatureLayer({
    url: "https://services7.arcgis.com/x4jL1wQ6vvYmFfuN/arcgis/rest/services/supportligne/FeatureServer/0"
    ,outFiealds: ["Ligne_60_K","equipe","Site","Immobilisa","DateMiseEn","ArticlePer","FamilleArt","DateCollec","NumFiesArt","DateMise_1","PhotoArtic","DateOperat","Observatio"],
    popupTemplate: popsupportligne, 
    
     renderer:popRenderer,
        
  });
 
   
const typeposte = new FeatureLayer({
    url: "https://services7.arcgis.com/x4jL1wQ6vvYmFfuN/arcgis/rest/services/type_post1/FeatureServer/0"
    ,outFiealds: ["Type_de_Po","Site","Zone_Affec","NumeroFies","DateMiseEn","FamilleArt","NumFiesArt","DateMise_1","caracteris"]
    ,popupTemplate: poptypeligne, 
    renderer:typeRenderer,
  });


  

 
map.add(Maroc);
map.add(supportligne);
var savedLayers = JSON.parse(localStorage.getItem('savedLayers')) || [];
  savedLayers.forEach(function(layerUrl) {
    if (layerUrl) {
      var layer = new FeatureLayer({
        url: layerUrl
      });
      map.add(layer);
    } });
    const searchWidget = new Search({
      view: view, // La vue de la carte où ajouter le widget
       allPlaceholder: "Rechercher des entités...",
       sources: [
        
         {
           layer: supportligne, // Remplacez 'votreCouche1' par votre couche réelle
           searchFields: ["Ligne_60_K","equipe","Site","Immobilisa","DateMiseEn","ArticlePer","FamilleArt","DateCollec","NumFiesArt","DateMise_1","PhotoArtic","DateOperat","Observatio"], // Champs à rechercher dans cette couche
           displayField: "DateMiseEn", // Champs à afficher dans les résultats de recherche
           exactMatch: false,
           outFields: ["*"], // Renvoyer tous les attributs de l'entité
           name: "Support ligne", // Nom affiché dans le menu de recherche
           placeholder: "Rechercher dans la couche 1" // Placeholder dans la boîte de recherche
         },
         {
          layer: typeposte, // Remplacez 'votreCouche1' par votre couche réelle
          searchFields: ["Type_de_Po","Site","Zone_Affec","NumeroFies","DateMiseEn","FamilleArt","NumFiesArt","DateMise_1","caracteris"], // Champs à rechercher dans cette couche
          displayField: "Type_de_Po", // Champs à afficher dans les résultats de recherche
          exactMatch: false,
          outFields: ["*"], // Renvoyer tous les attributs de l'entité
          name: "Type du ligne", // Nom affiché dans le menu de recherche
          placeholder: "Type du ligne" // Placeholder dans la boîte de recherche
        },
         // Vous pouvez ajouter plus de sources pour d'autres couches si nécessaire
       ]
     });

// Ajoutez le widget de recherche à la vue de la carte
view.ui.add(searchWidget, {
  position: "top-right"
});

        
        
        view.ui.add(searchWidget, {
          position: "top-right"
        });
        view.ui.add("topbar", "top-right");
        let zoom = new Zoom({
          view: view
        });
        view.ui.add(zoom,"top-right");



//======================================================================================//
const parcelLayerSQL1 = [
  "-- Critère de recherche --",
  "Zone_Affec='Télécoms'",
  "CATÉGORIE='Bâtiment 11 kv'",
  "CATÉGORIE='MOYENS COMMUNS'",
];

let whereClause1 = parcelLayerSQL1[0];
const select1 = document.getElementById("hotelSelect");

select1.addEventListener("change", (event) => {
  whereClause1 = event.target.value;
  queryFeatureLayer1(view.extent);
});

function queryFeatureLayer1(extent) {
  const parcelQuery1 = {
    where: whereClause1, // Set by select element
    geometry: extent, // Restricted to visible extent of the map
    outFields: ["Type_de_Po","Site","Zone_Affec","NumeroFies","DateMiseEn","FamilleArt","NumFiesArt","DateMise_1","caracteris"],
    returnGeometry: true,
  };
  typeposte.queryFeatures(parcelQuery1)
    .then((results) => {
      console.log("Feature count: " + results.features.length);
      displayResults1(results);
    })
    .catch((error) => {
      console.log(error.error);
    });}
   
     function displayResults1(results) {
       // Create a blue polygon
       const symbol2 = {
         type: "picture-marker", // Utiliser un picture-marker pour afficher une icône
         url: "image/ligne.png", // Spécifier le chemin vers l'icône d'hôtel
         width: "25px", // Ajuster la largeur de l'icône si nécessaire
         height: "25px", // Ajuster la hauteur de l'icône si nécessaire
         xoffset: 0, // Décalage horizontal de l'icône par rapport à la géométrie
         yoffset: 0,
       };
       
   
       results.features.map((feature) => {
         feature.symbol = symbol2;
         feature.popupTemplate = poptypeligne;
         return feature;
       });
   
       view.popup.close();
       view.graphics.removeAll();
       view.graphics.addMany(results.features);
     }
//=========================================================================================================
const renderer = {
  type: "unique-value",
  field: "NOM_REG",
  uniqueValueInfos: [
    {
      value: "LAAYOUNE-BOUJDOUR-SAKIA EL HAMRA",
      symbol: {
        type: "simple-fill",
        color: [0, 92, 230, 0.7], // Bleu foncé
      },
    },
    {
      value: "GUELMIM-ES-SEMARA",
      symbol: {
        type: "simple-fill",
        color: [92, 184, 0, 0.7], // Vert foncé
      },
    },
    {
      value: "OUED ED-DAHAB-LAGOUIRA",
      symbol: {
        type: "simple-fill",
        color: [230, 0, 92, 0.7], // Rose foncé
      },
    },
    {
      value: "SOUSS-MASSA-DRAA",
      symbol: {
        type: "simple-fill",
        color: [255, 165, 0, 0.7], // Orange
      },
    },
    {
      value: "TANGER-TETOUAN",
      symbol: {
        type: "simple-fill",
        color: [255, 128, 0, 0.7], // Orange foncé
      },
    },
    {
      value: "DOUKALA-ABDA",
      symbol: {
        type: "simple-fill",
        color: [153, 102, 51, 0.7], // Brun
      },
    },
    {
      value: "MARRAKECH-TENSIFT-AL-HAOUZ",
      symbol: {
        type: "simple-fill",
        color: [204, 51, 0, 0.7], // Rouge foncé
      },
    },
    {
      value: "TADLA-AZILAL",
      symbol: {
        type: "simple-fill",
        color: [204, 0, 204, 0.7], // Violet
      },
    },
    {
      value: "ORIENTAL",
      symbol: {
        type: "simple-fill",
        color: [0, 204, 204, 0.7], // Cyan
      },
    },
    {
      value: "RABAT-SALE-ZEMMOUR-ZAER",
      symbol: {
        type: "simple-fill",
        color: [51, 51, 204, 0.7], // Bleu
      },
    },
    // Vous pouvez ajouter d'autres valeurs et symboles de rendu ici...
  ],
};
const rendprovinces = {
  type: "unique-value",
  field: "Nom",
  uniqueValueInfos: [ 
    {
      value: "Guelmim",
      symbol: {
        type: "simple-fill",
        color: [0, 92, 230, 0.7], // Bleu foncé
      },
    },
    {
      value: "Es-Semara",
      symbol: {
        type: "simple-fill",
        color: [92, 184, 0, 0.7], // Vert foncé
      },
    },
    {
      value: "Tata",
      symbol: {
        type: "simple-fill",
        color: [230, 0, 92, 0.7], // Rose foncé
      },
    },
    {
      value: "Tan-Tan",
      symbol: {
        type: "simple-fill",
        color: [255, 165, 0, 0.7], // Orange
      },
    },
    {
      value: "Tarfaya",
      symbol: {
        type: "simple-fill",
        color: [255, 128, 0, 0.7], // Orange foncé
      },
    },
    {
      value: "Assa-Zag",
      symbol: {
        type: "simple-fill",
        color: [153, 102, 51, 0.7], // Brun
      },
    },
    {
      value: "Rabat",
      symbol: {
        type: "simple-fill",
        color: [204, 51, 0, 0.7], // Rouge foncé
      },
    },
    {
      value: "Nador",
      symbol: {
        type: "simple-fill",
        color: [204, 0, 204, 0.7], // Violet
      },
    },
    {
      value: "Azilal",
      symbol: {
        type: "simple-fill",
        color: [0, 204, 204, 0.7], // Cyan
      },
    },
    {
      value: "Essaouira",
      symbol: {
        type: "simple-fill",
        color: [51, 51, 204, 0.7], // Bleu
      },
    },
    {
      value: "Beni Mellal",
      symbol: {
        type: "simple-fill",
        color: [255, 0, 0, 0.7], // Rouge
      },
    },
    {
      value: "El Jadida",
      symbol: {
        type: "simple-fill",
        color: [0, 255, 0, 0.7], // Vert
      },
    },
    {
      value: "Berrchid",
      symbol: {
        type: "simple-fill",
        color: [255, 255, 0, 0.7], // Jaune
      },
    },
    {
      value: "Al Hoceima",
      symbol: {
        type: "simple-fill",
        color: [204, 0, 204, 0.7], // Violet
      },
    },
    {
      value: "Midelt",
      symbol: {
        type: "simple-fill",
        color: [0, 204, 204, 0.7], // Cyan
      },
    },
    {
      value: "Sidi Bennour",
      symbol: {
        type: "simple-fill",
        color: [51, 51, 204, 0.7], // Bleu
      },
    },
    {
      value: "El Kelaa des Sraghna",
      symbol: {
        type: "simple-fill",
        color: [153, 102, 51, 0.7], // Brun
      },
    },
    {
      value: "Al Haouz",
      symbol: {
        type: "simple-fill",
        color: [204, 51, 0, 0.7], // Rouge foncé
      },
    },
    {
      value: "Ouazzane",
      symbol: {
        type: "simple-fill",
        color: [0, 204, 0, 0.7], // Vert foncé
      },
    },
    {
      value: "Benslimane",
      symbol: {
        type: "simple-fill",
        color: [0, 128, 0, 0.7], // Vert foncé
      },
    },
    {
      value: "Sidi Kacem",
      symbol: {
        type: "simple-fill",
        color: [128, 0, 0, 0.7], // Rouge foncé
      },
    },
    {
      value: "Larache",
      symbol: {
        type: "simple-fill",
        color: [255, 165, 0, 0.7], // Orange
      },
    },
    {
      value: "Taza",
      symbol: {
        type: "simple-fill",
        color: [0, 255, 255, 0.7], // Cyan
      },
    },
    {
      value: "Taounate",
      symbol: {
        type: "simple-fill",
        color: [255, 0, 255, 0.7], // Magenta
      },
    },
    {
      value: "Meknes",
      symbol: {
        type: "simple-fill",
        color: [128, 0, 128, 0.7], // Violet foncé
      },
    },
    {
      value: "M'Diq-Fnidq",
      symbol: {
        type: "simple-fill",
        color: [255, 0, 0, 0.7], // Rouge
      },
    },
    {
      value: "Casablanca",
      symbol: {
        type: "simple-fill",
        color: [0, 128, 128, 0.7], // Bleu-vert
      },
    },
    {
      value: "Khemisset",
      symbol: {
        type: "simple-fill",
        color: [255, 69, 0, 0.7], // Rouge orangé
      },
    },
    {
      value: "Jerada",
      symbol: {
        type: "simple-fill",
        color: [128, 0, 0, 0.7], // Rouge foncé
      },
    },
    {
      value: "Khenifra",
      symbol: {
        type: "simple-fill",
        color: [128, 0, 128, 0.7], // Violet foncé
      },
    },
    {
      value: "Settat",
      symbol: {
        type: "simple-fill",
        color: [0, 255, 0, 0.7], // Vert
      },},
      {
        value: "Sidi Slimane",
        symbol: {
          type: "simple-fill",
          color: [153, 204, 255, 0.7], // Cyan foncé
        },
      },
      {
        value: "Tinghir",
        symbol: {
          type: "simple-fill",
          color: [255, 153, 102, 0.7], // Rouge orangé
        },
      },
      {
        value: "Sefrou",
        symbol: {
          type: "simple-fill",
          color: [102, 255, 102, 0.7], // Cyan
        },
      },
      {
        value: "Tetouan",
        symbol: {
          type: "simple-fill",
          color: [204, 102, 255, 0.7], // Magenta
        },
      },
      {
        value: "Chefchaouen",
        symbol: {
          type: "simple-fill",
          color: [255, 204, 102, 0.7], // Violet foncé
        },
      },
      {
        value: "Marrakech",
        symbol: {
          type: "simple-fill",
          color: [102, 255, 204, 0.7], // Vert foncé
        },
      },
      {
        value: "Chtouka Ait Baha",
        symbol: {
          type: "simple-fill",
          color: [255, 102, 204, 0.7], // Rouge foncé
        },
      },
      {
        value: "Guercif",
        symbol: {
          type: "simple-fill",
          color: [204, 153, 0, 0.7], 
        },
      },
      {
        value: "Deriouch",
        symbol: {
          type: "simple-fill",
          color: [204, 0, 204, 0.7], // Violet
        },
      },
      {
        value: "Zagora",
        symbol: {
          type: "simple-fill",
          color: [255, 128, 0, 0.7], // Orange foncé
        },
      },
      {
        value: "Sidi Ifni",
        symbol: {
          type: "simple-fill",
          color: [0, 204, 0, 0.7], // Vert foncé
        },
      },
      {
        value: "Boulemane",
        symbol: {
          type: "simple-fill",
          color: [204, 51, 0, 0.7], // Rouge foncé
        },
      },
      {
        value: "Kenitra",
        symbol: {
          type: "simple-fill",
          color: [255, 0, 0, 0.7], // Rouge
        },
      },
      {
        value: "Chichaoua",
        symbol: {
          type: "simple-fill",
          color: [0, 92, 230, 0.7], // Bleu foncé
        },
      },
      {
        value: "Safi",
        symbol: {
          type: "simple-fill",
          color: [92, 184, 0, 0.7], // Vert foncé
        },
      },
      {
        value: "Oujda-Angad",
        symbol: {
          type: "simple-fill",
          color: [230, 0, 92, 0.7], // Rose foncé
        },
      },
      {
        value: "Taroudannt",
        symbol: {
          type: "simple-fill",
          color: [255, 165, 0, 0.7], // Orange
        },
      },
      {
        value: "Nouaceur",
        symbol: {
          type: "simple-fill",
          color: [255, 128, 0, 0.7], // Orange foncé
        },
      },
      {
        value: "Rhamna",
        symbol: {
          type: "simple-fill",
          color: [153, 102, 51, 0.7], // Brun
        },
      },
      {
        value: "Ouarzazate",
        symbol: {
          type: "simple-fill",
          color: [204, 51, 0, 0.7], // Rouge foncé
        },
      },
      {
        value: "Ifrane",
        symbol: {
          type: "simple-fill",
          color: [204, 0, 204, 0.7], // Violet
        },
      },
      {
        value: "Errachidia",
        symbol: {
          type: "simple-fill",
          color: [0, 204, 204, 0.7], // Cyan
        },
      },
      {
        value: "Khouribga",
        symbol: {
          type: "simple-fill",
          color: [51, 51, 204, 0.7], // Bleu
        },
      },
      {
        value: "Tiznit",
        symbol: {
          type: "simple-fill",
          color: [0, 92, 230, 0.7], // Bleu foncé
        },
      },
      {
        value: "Fkih Ben Saleh",
        symbol: {
          type: "simple-fill",
          color: [92, 184, 0, 0.7], // Vert foncé
        },
      },
      {
        value: "Tourirt",
        symbol: {
          type: "simple-fill",
          color: [230, 0, 92, 0.7], // Rose foncé
        },
      },
      {
        value: "Skhirate-Temara",
        symbol: {
          type: "simple-fill",
          color: [255, 165, 0, 0.7], // Orange
        },
      },
      {
        value: "Sale",
        symbol: {
          type: "simple-fill",
          color: [255, 128, 0, 0.7], // Orange foncé
        },
      },
      {
        value: "Mediouna",
        symbol: {
          type: "simple-fill",
          color: [153, 102, 51, 0.7], // Brun
        },
      },
      {
        value: "Youssoufia",
        symbol: {
          type: "simple-fill",
          color: [204, 51, 0, 0.7], // Rouge foncé
        },
      },
      {
        value: "El Hajeb",
        symbol: {
          type: "simple-fill",
          color: [204, 0, 204, 0.7], // Violet
        },
      },
      {
        value: "Inezgane-Ait Melloul",
        symbol: {
          type: "simple-fill",
          color: [0, 204, 204, 0.7], // Cyan
        },
      },
      {
        value: "Figuiq",
        symbol: {
          type: "simple-fill",
          color: [0, 255, 0, 0.7], // Vert
        },
      },
      {
        value: "Berkane",
        symbol: {
          type: "simple-fill",
          color: [255, 0, 255, 0.7], // Magenta
        },
      },
      {
        value: "Mohammedia",
        symbol: {
          type: "simple-fill",
          color: [128, 0, 0, 0.7], // Rouge foncé
        },
      },
      {
        value: "Fahs-Anjra",
        symbol: {
          type: "simple-fill",
          color: [0, 128, 0, 0.7], // Vert foncé
        },
      },
      {
        value: "Figuig",
        symbol: {
          type: "simple-fill",
          color: [0, 128, 4, 0.7], // Vert foncé
        },
      },
      {
        value: "Boujdour",
        symbol: {
          type: "simple-fill",
          color: [128, 0, 128, 0.7], // Violet foncé
        },
      },
      {
        value: "Oued-Ed-Dahab",
        symbol: {
          type: "simple-fill",
          color: [255, 69, 0, 0.7], // Rouge orangé
        },
      },
      {
        value: "Aousserd",
        symbol: {
          type: "simple-fill",
          color: [0, 255, 255, 0.7], // Cyan
        },
      },
  ],
};


const provinces = new FeatureLayer({
  url: "https://services7.arcgis.com/x4jL1wQ6vvYmFfuN/arcgis/rest/services/provinces/FeatureServer/0"
  ,outFiealds : ["Nom"],
  renderer :rendprovinces,
});
const region = new FeatureLayer({
  url: "https://services7.arcgis.com/x4jL1wQ6vvYmFfuN/arcgis/rest/services/regions/FeatureServer/0"
  ,outFiealds : ["NOM_REG"],
  popupTemplate: popregion, 
  renderer : renderer,

});

document.getElementById("communeSelect").addEventListener("change", function(event) {
      var selectedMraroc = event.target.value;
    
      

     
   
      // Mettre à jour le rendu de la couche en fonction de l'option sélectionnée
      switch (selectedMraroc) {
        case "provinces":
          
          map.add( provinces);
          break;
        case "region":
          
          map.add(region);
          break;
       
        default: 
  
          break;
      }
    });
    //==============================
    var toggleButton = document.getElementById("toggleButton");
    var contentDiv = document.createElement("div");
    
    
    
    // Attribuer un ID à l'élément div
    contentDiv.id = "basemapGalleryDiv";
    
    const basemapGallery = new BasemapGallery({
      view: view,
      container: contentDiv,
    
      source: {
        query: {
          title: '"World Basemaps for Developers" AND owner:esri'
        }
      }
    });
    view.ui.add(toggleButton, "bottom-right");
    toggleButton.addEventListener("click", function() {
      if (contentDiv.style.display === "none") {
          view.ui.add(contentDiv, "bottom-right");
        contentDiv.style.display = "block";
      } else {
    
        contentDiv.style.display = "none";
      }
    });
    
   
    
    const legend = new Expand({
      content: new Legend({
        view: view,
        style: "card" // other styles include 'classic'
      }),
      view: view,
      expanded: true
    });
    view.ui.add(legend, "bottom-right");
    
    //============================================================================================
   // Votre code JavaScript
 // Gérer l'événement du chargement de la première couche
 function saveLayerUrlToLocalstorage(layerUrl) {
  if (layerUrl) {
    var savedLayers = JSON.parse(localStorage.getItem('savedLayers')) || [];
    savedLayers.push(layerUrl);
    localStorage.setItem('savedLayers', JSON.stringify(savedLayers));
  }
}
 document.getElementById("loadButtonLayer1").addEventListener("click", function() {
  var layer1Url = document.getElementById("layer1Url").value;
  if (layer1Url) {
    var layer1 = new FeatureLayer({
      url: layer1Url,
      outFiealds: ["Ligne_60_K","equipe","Site","Immobilisa","DateMiseEn","ArticlePer","FamilleArt","DateCollec","NumFiesArt","DateMise_1","PhotoArtic","DateOperat","Observatio"],
      popupTemplate: popsupportligne, 
      
    });
    map.add(layer1);
    saveLayerUrlToLocalstorage(layer1Url);
  }
});

document.getElementById("loadButtonLayer2").addEventListener("click", function() {
  var layer2Url = document.getElementById("layer2Url").value;
  if (layer2Url) {
    var layer2 = new FeatureLayer({
      url: layer2Url,
      outFiealds: ["Type_de_Po","Site","Zone_Affec","NumeroFies","DateMiseEn","FamilleArt","NumFiesArt","DateMise_1","caracteris"]
    ,popupTemplate: poptypeligne,
    });
    map.add(layer2);
    saveLayerUrlToLocalstorage(layer2Url);
  }
});

document.getElementById("loadButtonAutreLayer").addEventListener("click", function() {
  var autreLayerUrl = document.getElementById("autreLayerUrl").value;
  if (autreLayerUrl) {
    var autreLayer = new FeatureLayer({
      url: autreLayerUrl
    });
    map.add(autreLayer);
    saveLayerUrlToLocalstorage(autreLayerUrl);
  }
});








  
  
//==========================================================  

// Supposons que vous avez déjà initialisé votre carte et chargé votre couche de points (typeligne) dans la variable 'map'.
map.add(typeposte);




// Créez un widget de coordonnées
const coordinatesWidget = document.createElement("div");
coordinatesWidget.id = "coordinatesWidget";

// Ajoutez le widget de coordonnées à la vue
view.ui.add(coordinatesWidget, "bottom-left");

// Mettez à jour les coordonnées dans le widget lors du déplacement de la souris sur la carte
view.on("pointer-move", (event) => {
  const coords = view.toMap({ x: event.x, y: event.y });
  const longitude = coords.longitude.toFixed(6);
  const latitude = coords.latitude.toFixed(6);

  coordinatesWidget.textContent = `Longitude: ${longitude}, Latitude: ${latitude}`;
});

//===========================================

var printTemplate = new PrintTemplate({
  format: "pdf", // Vous pouvez également utiliser "png32" pour une image PNG
  layout: "a4-portrait", // Vous pouvez changer la mise en page ici
  layoutOptions: {
      titleText: "Impression de la Carte",
      authorText: "Mon Nom",
      copyrightText: "Copyright © 2023"
  }
});

var printWidget = new Print({
  view: view,
  printServiceUrl: "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task", // Remplacez cette URL par l'URL de votre service d'impression ArcGIS
  printTemplates: [printTemplate]
});

const imprimer = document.getElementById("affihceimprimer");
var printWidgetAdded = false;

imprimer.addEventListener("click", function() {
    if (!printWidgetAdded) {
        view.ui.add(printWidget, "top-right");
        printWidgetAdded = true;
    } else {
        view.ui.remove(printWidget);
        printWidgetAdded = false;
    }
});
const layerList = new LayerList({
  view: view,
});

const layer = document.getElementById("layerListIcon");
var layeraffiche= false;

layer.addEventListener("click", function() {
    if (!layeraffiche) {
        view.ui.add(layerList, "top-right" );
        layeraffiche= true;
    } else {
        view.ui.remove(layerList);
        layeraffiche= false;
    }
});


});