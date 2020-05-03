var API_KEY = "e72689f19281323eb01051d541492e13";
var celsius = True;
var weatherData;

var weatherImage = "";
  var imagePhoto = {
	thunder: "https://s-media-cache-ak0.pinimg.com/originals/2e/43/73/2e4373184057ab029b5ca15aca484b09.jpg",
	rainyNight: "https://s3.envato.com/files/32036621/rainy-night-window-pr.jpg",
    rainy: "https://c1.staticflickr.com/1/25/44040866_f74b3a3fd3_b.jpg",
	cloudy: "https://static1.squarespace.com/static/57523357c2ea515ccf6c1adb/58dcea75bebafb06e997da9c/58dcece61e5b6cf38585d46b/1490873606398/mostly+cloudy.jpg",
    cloudyNight: "https://hatterkep.kepek-hatterkepek.hu/221/2213461.jpg",
	snow: "https://static.bhphotovideo.com/explora/sites/default/files/Correct.jpg",
	clear: "https://mota.ru/upload/wallpapers/2010/05/14/08/01/22099/mota_ru_0051405-2560x1600.jpg",
  clearNight: "https://dncache-mauganscorp.netdna-ssl.com/thumbseg/1615/1615594-bigthumbnail.jpg",
	drizzle: "https://s-media-cache-ak0.pinimg.com/736x/e4/43/f5/e443f59b4f03dd487d090a279c2f08ab--rain-drops-water-drops.jpg",
    drizzleNight: "https://c1.staticflickr.com/8/7482/15859210528_7fc3e7fcd6_b.jpg",
	haze: "https://ak3.picdn.net/shutterstock/videos/3578564/thumb/1.jpg",
  hazeNight: "https://farm4.static.flickr.com/3023/2801417308_82e8f25367.jpg",
	tornado: "https://i.ytimg.com/vi/5QnsRXUbsK4/maxresdefault.jpg",
	cold: "https://static.pexels.com/photos/374/snow-dawn-sunset-winter.jpg",
	windy: "https://ak9.picdn.net/shutterstock/videos/4337360/thumb/1.jpg",
  windyNight: "https://s-media-cache-ak0.pinimg.com/736x/ea/5c/03/ea5c035613ecb1852fd9189eb61673ee--beach-at-night-on-the-beach.jpg",
	hail: "https://s-media-cache-ak0.pinimg.com/236x/7c/60/3d/7c603d9183ff32c92330780a2ebdcfca--rainy-weather-rainy-days.jpg",
  sunny: "https://i.ytimg.com/vi/rG9fev-m0ag/maxresdefault.jpg"
};


function selectImage (id) {
document.write("i entered");
    if (id >= 200 && id <= 232){
		weatherImage = imagePhoto.thunder;
	}else if (id >= 300 && id <= 321){
		weatherImage = imagePhoto.drizzle;
	}else if (id >= 500 && id <= 531){
		weatherImage = imagePhoto.rainy;
	}else if (id >= 600 && id <= 622){
		weatherImage = imagePhoto.snow;
	}else if (id >= 701 && id <= 721 ){
		weatherImage = imagePhoto.haze;
	} else if (id === 800){
		weatherImage = imagePhoto.clear;
	}else if (id >= 801 && id <= 804){
		weatherImage = imagePhoto.cloudy;
	}else if (id >= 900 && id <= 902){
		weatherImage = imagePhoto.tornado;
	}else if (id === 903){
		weatherImage = imagePhoto.cold;
	}else if (id === 904){
		weatherImage = imagePhoto.sunny;
	}else if (id === 905){
		weatherImage = imagePhoto.windy;
	}else if (id === 906){
		weatherImage = imagePhoto.hail;
	}else{
		weatherImage = imagePhoto.windy;
  }
  $('body').css('background-image', 'url(' + weatherImage + ')'); 
} 
