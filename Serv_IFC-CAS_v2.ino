#include <SPI.h>
#include <Ethernet.h>
#include <DHT.h>
#include <SD.h>
#include <Adafruit_Sensor.h>

byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};
String view="";
float vet[61];

IPAddress ip(10, 0, 200, 219);
IPAddress gateway(10, 0, 0, 1);
IPAddress subnet(255, 255, 0, 0);
DHT dht(A1, DHT11);
EthernetServer server(80);

void setup()
{
  pinMode(7, OUTPUT);
  Ethernet.begin(mac, ip, gateway, subnet);
  Serial.begin(9600);
  dht.begin();
  server.begin();
  CartaoSD();

  for (int i = 0; i < 61; i++)
  {
    vet[i] = 0;
  }
}

void loop()
{
  Serial.println("GoGoGo");
  File pagWeb;
  float t = dht.readTemperature();
  float h = dht.readHumidity();
  
  View("document.write('Temperatura: ", "ºC ", t, vet[0]);
  float h0=View(" Umidade: ", "%", h, h0);
  view=view+"');";
  Serial.println(view);
  Vetor(t);
  Dados(pagWeb);

  if (t > 25)
  {
    sirene(1);
  }
  else
  {
    sirene(0);
  }

  EthernetClient client = server.available();
  if (client)
  {
    Serial.println("new client");
    boolean currentLineIsBlank = true;
    while (client.connected())
    {
      if (client.available())
      {
        char c = client.read();
        Serial.write(c);
        if (c == 'n' && currentLineIsBlank)
        {
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close");
          client.println("Refresh: 15");
          client.println();
          JavaSript(pagWeb);
          pagWeb = SD.open("Index.htm");
          pagWeb.close();
          break;
        }
        if (c == 'n')
        {
          currentLineIsBlank = true;
        }
        else if (c != 'r')
        {
          currentLineIsBlank = false;
        }
      }
    }
    delay(50);
    client.stop();
  }
  Serial.println("Saiu do loop");
}

float View(String sensor, String y, float x, float x0)
{
  Serial.println("Entrou View");
  view=sensor;
  view=view+x;
  view=view+y;
  if (x > x0)
  {
    view=view+"&#9650;<br>";
  }
  if (x < x0)
  {
    view=view+"&#9660;<br>";
  }
  if (x == x0)
  {
    view=view+" &#9654;</br>";
  }
  return x;
}

void JavaSript(File myFile)
{
  Serial.println("Entrou no JS");
  SD.remove("js.js");
  myFile = SD.open("js.js", FILE_WRITE);
  if (myFile)
  {
    myFile.println(view);
  }
  myFile.close();
}

void sirene(int x)
{
  float seno;
  int frequencia;

  if (x == 1)
  {
    for (int x = 0; x < 180; x++)
    {
      seno = (sin(x * 3.1416 / 180));
      frequencia = 2000 + (int(seno * 1000));
      tone(7, frequencia);
      delay(5);
    }
  }
  else
  {
    noTone(7);
  }
}

void Vetor(float x)
{
  Serial.println("Entrou no vetor");
  for (int i = 60; i > 0; i--)
  {
    vet[i] = vet[i - 1];
  }
  vet[0] = x;
}

void CartaoSD()
{
  Serial.println("Entrou no SD");
  if (!SD.begin(4))
  {
    Serial.println("ERROR-SD Card!");
  }
  else
  {
    Serial.println("SUCCESS-SD.");
    if (!SD.exists("Index.htm"))
    {
      Serial.println("ERROR- Index.htm");
    }
    else
    {
      Serial.println("SUCCESS");
    }
  }
}

void Dados(File myFile)
{
  SD.remove("dados.txt");
  myFile = SD.open("dados.txt", FILE_WRITE);
  
  String str;
  str="dat1=[";
  for(int i=0; i<60; i++)
  {
    str= str + vet[i];
    str= str + ", ";
  }
  str= str + vet[60];
  str= str + "];";
  
  if (myFile)
  {
    myFile.println(str);
  }
  myFile.close();
}
