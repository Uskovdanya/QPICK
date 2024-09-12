export async function getShoppingItems() {
  const headphones = [
    {
      id: 1,
      img: "../img/headphones/Apple_BYZ_S852l.png",
      title: "Apple BYZ S852I",
      price: 2927,
      oldPrice: 3527,
      rate: 4.7,
      liked: false,
      wireless: false,
    },
    {
      id: 2,
      img: "../img/headphones/Apple_EarPods.png",
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
      liked: false,
      wireless: false,
    },
    {
      id: 3,
      img: "../img/headphones/Apple_EarPods_New.png",
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
      liked: false,
      wireless: false,
    },
    {
      id: 4,
      img: "../img/headphones/Apple_BYZ_S852l.png",
      title: "Apple BYZ S852I",
      price: 2927,
      rate: 4.7,
      liked: false,
      wireless: false,
    },
    {
      id: 5,
      img: "../img/headphones/Apple_EarPods.png",
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
      liked: false,
      wireless: false,
    },
    {
      id: 6,
      img: "../img/headphones/Apple_EarPods_New.png",
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
      liked: false,
      wireless: false,
    },
    {
      id: 7,
      img: "../img/headphones/Apple_AirPods.png",
      title: "Apple EarPods",
      price: 9527,
      rate: 4.7,
      liked: false,
      wireless: true,
    },
    {
      id: 8,
      img: "../img/headphones/Gerlax_GH-04.png",
      title: "Apple EarPods",
      price: 6527,
      rate: 4.7,
      liked: false,
      wireless: true,
    },
    {
      id: 9,
      img: "../img/headphones/Borofone_BO4.png",
      title: "Apple EarPods",
      price: 6527,
      rate: 4.7,
      liked: false,
      wireless: true,
    },
  ];
  return headphones;
}

export async function shopLoader() {
  const shop = await getShoppingItems();
  return shop;
}
