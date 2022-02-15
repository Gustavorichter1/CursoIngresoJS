/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 //Gustavo Richter Div E 
 //TP4
 
function CalcularPrecio () 
{
    var cantidadLamparas;
    var marca;
    var descuento;
    var resultado;
    var precioLampara = 35;
    var precioTotal;

//Obtengo los datos
cantidadLamparas = document.getElementById("txtIdCantidad").value;
marca = document.getElementById("Marca").value;
cantidadLamparas = parseInt(cantidadLamparas);
descuento=0;
resultado = cantidadLamparas*precioLampara;
//Resuelvo discriminando por cantidad de lamparas

if (cantidadLamparas>=6)
{ 
    descuento = resultado - (resultado*50)/100
}
    else if (cantidadLamparas==5 && marca=="ArgentinaLuz")
    {
    descuento = resultado - (resultado*40)/100
    }
        else if (cantidadLamparas==5 && marca!="ArgentinaLuz") 
        {
        descuento = resultado - (resultado*30)/100
        } 
                else if (cantidadLamparas==4 && (marca=="ArgentinaLuz" || marca=="FelipeLamparas"))
                 {
                     descuento = resultado - (resultado*25)/100
                 }
                 else if ((cantidadLamparas==4 && (marca=="ArgentinaLuz" || marca!="FelipeLamparas")))   
                { 
                  descuento = resultado - (resultado*20)/100
                }

                  else if (cantidadLamparas==3 && marca=="ArgentinaLuz") 
                { 
                    descuento = resultado - (resultado*15)/100
                }
                     else if (cantidadLamparas==3 && marca=="FelipeLamparas")
                      {
                        descuento = resultado - (resultado*10)/100
                      }
                        else if (cantidadLamparas == 3 && (marca !="ArgentinaLuz" || marca!="FelipeLamparas") )
                        {
                            descuento = resultado - (resultado*5)/100
                        }
                         else 
                         {
                            document.getElementById("txtIdprecioDescuento").value=resultado;
                         }
                         if (resultado>=120) 
                         {
                            resultadoBruto = resultado + (resultado*10)/100;

                            alert("IIBB Usted pagó $" + resultadoBruto)
                         }
            
            {
                descuento = resultado
               document.getElementById("txtIdprecioDescuento").value=resultado
            }
                       
                document.getElementById("txtIdprecioDescuento").value = descuento;
 }