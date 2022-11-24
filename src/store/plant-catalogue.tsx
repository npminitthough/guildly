const SMALL_TREES = {
  name: "small trees",
  plants: [
    {
      name: "pear tree",
      widthInMetres: 3,
      heightInMetres: 3,
      rootStock: "quince C",
      insectAttractor: true,
    },
    {
      name: "plum",
      widthInMetres: 3,
      heightInMetres: 2.3,
      rootStock: "VVA-1",
      insectAttractor: true,
    },
    {
      name: "peach",
      widthInMetres: 3,
      heightInMetres: 2.3,
      rootStock: "VVA-1",
      insectAttractor: true,
    },
    {
      name: "apricot",
      widthInMetres: 3,
      heightInMetres: 2.3,
      rootStock: "VVA-1",
      insectAttractor: true,
    },
    {
      name: "apple",
      widthInMetres: 1.5,
      heightInMetres: 1.8,
      rootStock: "M27",
      insectAttractor: true,
    },
    {
      name: "cherry",
      widthInMetres: 1.5,
      heightInMetres: 1.5,
      rootStock: "gisela 5",
      insectAttractor: true,
    },
  ],
};

const SHRUBS = {
  name: "shrubs",
  plants: [
    {
      name: "autumn olive",
      widthInMetres: 4,
      heightInMetres: 4.5,
      nitrogenFixer: true,
      imageUrl: "https://northernwoodlands.org/images/made/images/articles/olive_750_515_65.jpg"
    },
    {
      name: "siberian pea tree",
      widthInMetres: 4,
      heightInMetres: 6,
      nitrogenFixer: true,
      insectAttractor: true,
      imageUrl: "https://i.shgcdn.com/c8002b83-e00a-40d6-95a8-4edff15538c3/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
    },
    {
      name: "gooseberry",
      widthInMetres: 1,
      heightInMetres: 1.2,
      insectAttractor: true,
      imageUrl: "https://www.ashridgetrees.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/o/goose-new.jpg"
    },
    {
      name: "blackcurrant",
      widthInMetres: 1,
      heightInMetres: 1.8,
      insectAttractor: true,
      imageUrl: "https://plantura.garden/uk/wp-content/uploads/sites/2/2021/09/black-currant-1024x684.jpg?x96810"
    },
    {
      name: "redcurrant",
      widthInMetres: 1,
      heightInMetres: 1.8,
      insectAttractor: true,
    },
    {
      name: "fuschia",
      widthInMetres: 2,
      heightInMetres: 3,
      insectAttractor: true,
    },
    {
      name: "chokeberry",
      widthInMetres: 3,
      heightInMetres: 2.5,
      insectAttractor: true,
    },
    {
      name: "california lilac",
      widthInMetres: 2,
      heightInMetres: 3,
      insectAttractor: true,
    },
  ],
};

const PERENNIAL_VEGETABLES = {
  name: "perennial vegetables",
  plants: [
    {
      name: "salad burnett",
      widthInMetres: 0.3,
      heightInMetres: 0.5,
    },
    {
      name: "lambs lettuce",
      widthInMetres: 0.1,
      heightInMetres: 0.2,
    },
    {
      name: "chicory",
      widthInMetres: 0.2,
      heightInMetres: 0.4,
    },
    {
      name: "bladder campion",
      widthInMetres: 0.5,
      heightInMetres: 0.5,
    },
    {
      name: "chinese broccoli",
      widthInMetres: 0.7,
      heightInMetres: 1.2,
    },
    {
      name: "mallows",
      widthInMetres: 0.4,
      heightInMetres: 0.5,
    },
    {
      name: "sorrel",
      widthInMetres: 0.3,
      heightInMetres: 0.6,
    },
    {
      name: "rhubarb",
      widthInMetres: 1.2,
      heightInMetres: 1.4,
    },
    {
      name: "hostas",
      widthInMetres: 0.4,
      heightInMetres: 0.2,
    },
    {
      name: "garlic cress",
      widthInMetres: 0.4,
      heightInMetres: 0.6,
    },
    {
      name: "good king henry",
      widthInMetres: 0.3,
      heightInMetres: 0.3,
    },
    {
      name: "chard",
      widthInMetres: 0.4,
      heightInMetres: 0.5,
    },
  ],
};

const ORNAMENTAL_PERENNIALS = {
  name: "ornamental perennials",
  plants: [
    {
      name: "bergamot",
      widthInMetres: 0.5,
      heightInMetres: 0.5,
    },
    {
      name: "persicaria",
      widthInMetres: 0.2,
      heightInMetres: 1,
    },
    {
      name: "red valarian",
      widthInMetres: 0.5,
      heightInMetres: 1,
    },
    {
      name: "aster",
      widthInMetres: 0.7,
      heightInMetres: 1.2,
    },
    {
      name: "poppy",
      widthInMetres: 0.5,
      heightInMetres: 1,
    },
    {
      name: "catmint",
      widthInMetres: 0.4,
      heightInMetres: 0.6,
    },
    {
      name: "sedum",
      widthInMetres: 0.7,
      heightInMetres: 0.7,
    },
    {
      name: "oxeye daisy",
      widthInMetres: 0.4,
      heightInMetres: 0.6,
    },
    {
      name: "comfrey",
      widthInMetres: 0.8,
      heightInMetres: 1.2,
    },
  ],
};

const COMMON_HERBS = {
  name: "common herbs",
  plants: [
    {
      name: "thyme",
      widthInMetres: 0.3,
      heightInMetres: 0.2,
    },
    {
      name: "sage",
      widthInMetres: 0.6,
      heightInMetres: 0.6,
    },
    {
      name: "mint",
      widthInMetres: 1,
      heightInMetres: 0.5,
    },
    {
      name: "hyssop",
      widthInMetres: 0.6,
      heightInMetres: 0.6,
    },
    {
      name: "feverfew",
      widthInMetres: 0.3,
      heightInMetres: 0.6,
    },
    {
      name: "chives",
      widthInMetres: 0.3,
      heightInMetres: 0.3,
    },
    {
      name: "lemon balm",
      widthInMetres: 0.4,
      heightInMetres: 0.7,
    },
    {
      name: "lovage",
      widthInMetres: 1,
      heightInMetres: 1.8,
    },
    {
      name: "chamomile",
      widthInMetres: 0.3,
      heightInMetres: 0.5,
    },
    {
      name: "sweet cicely",
      widthInMetres: 1,
      heightInMetres: 1,
    },
    {
      name: "fennel",
      widthInMetres: 1,
      heightInMetres: 1.5,
    },
  ],
};

const BULBS = {
  name: "bulbs",
  plants: [
    {
      name: "crocus",
      widthInMetres: 0.1,
      heightInMetres: 0.2,
    },
    {
      name: "grape hycinth",
      widthInMetres: 0.1,
      heightInMetres: 0.3,
    },
    {
      name: "quamash",
      widthInMetres: 0.2,
      heightInMetres: 0.3,
    },
  ],
};

const GROUND_COVER = {
  name: "ground cover",
  plants: [
    {
      name: "strawberry",
      widthInMetres: 0.2,
      heightInMetres: 0.2,
    },
    {
      name: "sweet violet",
      widthInMetres: 0.2,
      heightInMetres: 0.2,
    },
    {
      name: "sweet woodruff",
      widthInMetres: 0.5,
      heightInMetres: 0.2,
    },
    {
      name: "birdsfoot trefoil",
      widthInMetres: 0.5,
      heightInMetres: 0.3,
    },
    {
      name: "clover",
      widthInMetres: 0.5,
      heightInMetres: 0.5,
    },
    {
      name: "wood sorrel",
      widthInMetres: 0.3,
      heightInMetres: 0.1,
    },
    {
      name: "ostrirch fern",
      widthInMetres: 0.5,
      heightInMetres: 1,
    },
    {
      name: "alyssum",
      widthInMetres: 0.5,
      heightInMetres: 0.5,
    },
    {
      name: "creeping thyme",
      widthInMetres: 0.2,
      heightInMetres: 0.2,
    },
    {
      name: "daisy",
      widthInMetres: 0.3,
      heightInMetres: 0.3,
    },
    {
      name: "wild garlic",
      widthInMetres: 0.3,
      heightInMetres: 0.3,
    },
  ],
};

const ROOT_CROPS = {
  name: "root crops",
  plants: [
    {
      name: "babington's leek",
      widthInMetres: 0.1,
      heightInMetres: 1.8,
    },
    {
      name: "egyptian onion",
      widthInMetres: 0.2,
      heightInMetres: 1.2,
    },
    {
      name: "garlic",
      widthInMetres: 0.2,
      heightInMetres: 0.6,
    },
    {
      name: "mashua",
      widthInMetres: 0.4,
      heightInMetres: 0.2,
    },
    {
      name: "carrot",
      widthInMetres: 0.3,
      heightInMetres: 1.2,
    },
    {
      name: "potato",
      widthInMetres: 0.4,
      heightInMetres: 0.6,
    },
  ],
};

const GREEN_MANURES = {
  name: "green manures",
  plants: [
    {
      name: "lupins",
      widthInMetres: 0.2,
    },
    {
      name: "mustard",
      widthInMetres: 0.2,
    },
    {
      name: "red clover",
      widthInMetres: 0.2,
    },
    {
      name: "white clover",
      widthInMetres: 0.2,
    },
    {
      name: "field beans",
      widthInMetres: 0.2,
    },
    {
      name: "fodder raddish",
      widthInMetres: 0.2,
    },
    {
      name: "tares",
      widthInMetres: 0.2,
    },
    {
      name: "rye grass",
      widthInMetres: 0.2,
    },
    {
      name: "fenugreek",
      widthInMetres: 0.2,
    },
  ],
};

const CLIMBERS = {
  name: "climbers",
  plants: [
    {
      name: "loganberry",
      widthInMetres: 2.5,
      heightInMetres: 2.5,
    },
    {
      name: "blackberry",
      widthInMetres: 3,
      heightInMetres: 3,
    },
    {
      name: "hops",
      widthInMetres: 6,
      heightInMetres: 6,
    },
    {
      name: "passionflower",
      widthInMetres: 6,
      heightInMetres: 6,
    },
    {
      name: "perennial pea",
      widthInMetres: 2,
      heightInMetres: 2,
    },
    {
      name: "japanese wineberry",
      widthInMetres: 9,
      heightInMetres: 1.5,
    },
  ],
};

const PLANT_CATALOGUE = [
  SMALL_TREES,
  SHRUBS,
  PERENNIAL_VEGETABLES,
  ORNAMENTAL_PERENNIALS,
  COMMON_HERBS,
  BULBS,
  GROUND_COVER,
  ROOT_CROPS,
  GREEN_MANURES,
  CLIMBERS,
];

export default PLANT_CATALOGUE;
