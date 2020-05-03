import requests
from django.shortcuts import render
from .models import City
from .forms import CityForm

def index(request):
    url = 'http://api.openweathermap.org/data/2.5/weather?q={}&units=metric&appid=271d1234d3f497eed5b1d80a07b3fcd1'
    url1='http://api.openweathermap.org/data/2.5/forecast?q={}&units=metric&appid=271d1234d3f497eed5b1d80a07b3fcd1'
    error_msg=''
    new_city=''
    if request.method == 'POST':
        form=CityForm(request.POST)
        if form.is_valid():
            new_city=form.cleaned_data['name']
            existing_count=City.objects.filter(name=new_city).count()
            if existing_count>=0:
                r = requests.get(url.format(new_city)).json()
                #print(r)
                if r['cod']==200:
                   form.save()
                else:
                    error_msg='City doesnot  exist'
            else:
                error_msg='City already exists please check'

    form = CityForm()

    cities = City.objects.all()
    weather_data = []
    weekly_data=[]
    obj = City.objects.filter().latest('id')
    p = requests.get(url1.format(obj)).json()
    i = 0
    print(obj)
    while i < 40:
        #print(p['list'][i]['main']['temp'])
        #print(p['list'][i]['dt_txt'])
        week_weather = {
            'temperature': p['list'][i]['main']['temp'],
            'date':p['list'][i]['dt_txt'][0:10],
            'icon':p['list'][i]['weather'][0]['icon'],
        }
        i = i + 8
        weekly_data.append(week_weather)

    #for city in cities:
    city=obj
    r = requests.get(url.format(city)).json()
    print(r['weather'][0]['id'])
    city_weather = {
        'city': city.name,
        'temperature': r['main']['temp'],
        'description': r['weather'][0]['description'],
        'humidity': r['main']['humidity'],
        'temp_min': r['main']['temp_min'],
        'temp_max': r['main']['temp_max'],
        'icon': r['weather'][0]['icon'],
        'lon': r['coord']['lon'],
        'lat': r['coord']['lat'],
        'id': r['weather'][0]['id'],
    }

    weather_data.append(city_weather)
    context = {'weather_data' : weather_data, 'weekly_data':weekly_data,'form' : form}
    return render(request, 'weather/list_weather.html', context)