import WrongPlayers from './WrongData';

const playersData = [
  {
    id: 0,
    name: "Lionel Messi",
    image: "https://e0.365dm.com/22/12/2048x1152/skysports-lionel-messi-argentina_6000508.jpg"
  },
  {
    id: 1,
    name: "Neymar",
    image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt574c7d21d24e9af6/64d2018cd25c3888fc731575/Neymar_PSG_2023-24_(2).jpg?auto=webp&format=pjpg&width=3840&quality=60"
  },
  {
    id: 2,
    name: "Harry Maguire",
    image: "https://static.independent.co.uk/2023/08/15/22/5518a1cc1b8458413b5598b1aaaf0dd6Y29udGVudHNlYXJjaGFwaSwxNjkyMjE5OTI0-2.73279235.jpg"
  },
  {
    id: 3,
    name: "Cristiano Ronaldo",
    image: "https://images2.minutemediacdn.com/image/fetch/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F947096288.jpeg"
  },
  {
    id: 4,
    name: "Johan Cruyff",
    image: "https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2016/03/cruyff.jpg?fit=2048%2C1566&ssl=1"
  },
  {
    id: 5,
    name: "Zinedine Zidane",
    image: "https://phantom-marca.unidadeditorial.es/26b627e5a7070f9b9f8dd6bc79c3f29c/resize/828/f/jpg/assets/multimedia/imagenes/2021/10/22/16349147436000.jpg"
  },
  {
    id: 6,
    name: "Luka Modric",
    image: "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/06/1000/562/mod.2.jpg?ve=1&tl=1"
  },
  {
    id: 7,
    name: "Robert Lewandowski",
    image: "https://cdn.vox-cdn.com/thumbor/TVmcviC_1j7HBlpu9_0PxtLSssg=/0x0:4373x2915/1200x800/filters:focal(1838x1109:2536x1807)/cdn.vox-cdn.com/uploads/chorus_image/image/72572907/1630119591.0.jpg"
  },
  {
    id: 8,
    name: "Erling Haaland",
    image: "https://images2.minutemediacdn.com/image/fetch/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1419677238.jpeg"
  },
  {
    id: 9,
    name: "Kevin De Bruyne",
    image: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2015/08/10/1657666-35151230-2560-1440.jpg"
  },
];

const playerOptions = {
  A: "Wrong",
  B: "Correct",
};



const footballPlayers = playersData.map((playerData)=>({
  ...playerData,
  correctAnswer: playerData.name === WrongPlayers[playerData.id].name? "B":"A",
  options: playerOptions,
}))


export default footballPlayers;
