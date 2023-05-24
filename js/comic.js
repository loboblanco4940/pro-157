AFRAME.registerComponent("comic", {
  init: function () {
    this.placesContainer = this.el;   
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "anime",
        title: "Anime",
        url: "./assets/anime.jpg",
      },
      {
        id: "rengoku",
        title: "Rengoku",
        url: "./assets/rengoku.jpg",
      },

      {
        id: "spider-man",
        title: "Spider-man",
        url: "./assets/spider-man.jpg",
      },
      {
        id: "x-men",
        title: "X-men",
        url: "./assets/x-men.jpg",
      },
    ];
    
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Elemento de borde
      const borderEl = this.createBorder(position, item.id);

      // Elemento de miniatura
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

      // Elemento del texto del título
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#0077CC",
      opacity: 1,
    });

    return entityEl;
  },
  createPoster: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width:20,
      height:28
    });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  },
});
