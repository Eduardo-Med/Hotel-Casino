const path = require("path");
const moment = require('moment')

const obtenerConsumos =(consumos)=>{
  const rows = consumos.map((consumo) =>{
    return(
            `
    <tr style='mso-yfti-irow:13;height:24.0pt'>
      <td width=129 valign=top style='width:96.9pt;border:solid black 1.0pt;
      border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
      height:24.0pt'>
      <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
      margin-left:5.95pt;margin-bottom:.0001pt;line-height:normal'><span
      style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
      color:black;mso-fareast-language:ES-MX'>${consumo.nombreServicio}&nbsp;</span><span
      style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
      "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
      </td>
      <td width=254 colspan=3 valign=top style='width:190.6pt;border-top:none;
      border-left:none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
      mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
      padding:5.0pt 5.0pt 5.0pt 5.0pt;height:24.0pt'>
      <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
      margin-left:5.95pt;margin-bottom:.0001pt;line-height:normal'><span
      style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
      color:black;mso-fareast-language:ES-MX'>${consumo.detalles}. La fecha del ${consumo.fecha.substr(0,10)}&nbsp;</span><span
      style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
      "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
      </td>
      <td width=132 valign=top style='width:99.0pt;border-top:none;border-left:
      none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
      mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
      padding:5.0pt 5.0pt 5.0pt 5.0pt;height:24.0pt'>
      <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
      margin-left:5.95pt;margin-bottom:.0001pt;line-height:normal'><span
      style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
      color:black;mso-fareast-language:ES-MX'>$ ${consumo.precio}&nbsp;</span><span
      style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
      "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
      </td>
      <td width=127 valign=top style='width:94.95pt;border-top:none;border-left:
      none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
      mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
      padding:5.0pt 5.0pt 5.0pt 5.0pt;height:24.0pt'>
      <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
      margin-left:5.95pt;margin-bottom:.0001pt;line-height:normal'><span
      style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
      color:black;mso-fareast-language:ES-MX'>$ ${consumo.precio}</span><span style='font-size:
      12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:"Times New Roman";
      mso-fareast-language:ES-MX'><o:p></o:p></span></p>
      </td>
    </tr>`
    )
  })
  gastos = rows.toString()
  return gastos.replace(/,/g, "")
}



const content = (consumos, informacion,monto,noTarjetas,habitacionNumero) => {
    const now = new moment().format("DD-MM-YYYY")
    const max = 754234 
    const min = 113400
    const {noReservacion,nombre,telefono} = informacion
  return `
  <html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1252">
<style>
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 5px;
    }
    table{
      width: 20% !important;
      height: 20%!important;
    }
<!--
 /* Font Definitions */
 @font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;
	mso-font-charset:0;
	mso-generic-font-family:roman;
	mso-font-pitch:variable;
	mso-font-signature:3 0 0 0 1 0;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;
	mso-font-charset:0;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-469750017 -1073732485 9 0 511 0;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-parent:"";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:107%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:Calibri;
	mso-fareast-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
p
	{mso-style-noshow:yes;
	mso-style-priority:99;
	mso-margin-top-alt:auto;
	margin-right:0in;
	mso-margin-bottom-alt:auto;
	margin-left:0in;
	mso-pagination:widow-orphan;
	font-size:12.0pt;
	font-family:"Times New Roman",serif;
	mso-fareast-font-family:"Times New Roman";}
span.SpellE
	{mso-style-name:"";
	mso-spl-e:yes;}
.MsoChpDefault
	{mso-style-type:export-only;
	mso-default-props:yes;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:Calibri;
	mso-fareast-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
.MsoPapDefault
	{mso-style-type:export-only;
	margin-bottom:8.0pt;
	line-height:107%;}
@page WordSection1
	{size:8.5in 11.0in;
	margin:70.85pt 85.05pt 70.85pt 85.05pt;
	mso-header-margin:35.4pt;
	mso-footer-margin:35.4pt;
	mso-paper-source:0;}
div.WordSection1
	{page:WordSection1;}
-->
</style>
<!--[if gte mso 10]>
<style>
 /* Style Definitions */
 table.MsoNormalTable
	{mso-style-name:"Table Normal";
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-noshow:yes;
	mso-style-priority:99;
	mso-style-parent:"";
	mso-padding-alt:0in 5.4pt 0in 5.4pt;
	mso-para-margin-top:0in;
	mso-para-margin-right:0in;
	mso-para-margin-bottom:8.0pt;
	mso-para-margin-left:0in;
	line-height:107%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-fareast-language:EN-US;}
</style>
<![endif]-->
</head>

<body lang=ES-MX style='tab-interval:35.4pt'>

<div class=WordSection1>

<p class=MsoNormal style='margin-bottom:12.0pt;line-height:normal'><span
style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
"Times New Roman";mso-fareast-language:ES-MX'><o:p>&nbsp;</o:p></span></p>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=642
 style='width:481.45pt;border-collapse:collapse;mso-yfti-tbllook:1184'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:24.0pt'>
  <td width=197 colspan=2 rowspan=3 valign=top style='width:148.0pt;border:
  solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;height:24.0pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><span style='font-family:"Arial",sans-serif;mso-fareast-font-family:
  "Times New Roman";color:black;mso-fareast-language:ES-MX'><o:p>&nbsp;</o:p></span></p>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:6.05pt;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX;mso-no-proof:yes'><![if !vml]><img width=164 height=124
  src="https://i.ibb.co/mBnFvtQ/Whats-App-Image-2020-11-26-at-11-04-21-AM.jpg" v:shapes="Imagen_x0020_1"><![endif]></span><span
  style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
  "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
  <td width=144 valign=top style='width:1.5in;border:solid black 1.0pt;
  border-left:none;mso-border-left-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
  height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:6.05pt;margin-bottom:.0001pt;line-height:normal'><b><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>Fecha:&nbsp;</span></b><span
  style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
  "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
  <td width=301 colspan=3 valign=top style='width:225.45pt;border:solid black 1.0pt;
  border-left:none;mso-border-left-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
  height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:5.95pt;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>${now}</span><span style='font-size:
  12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:"Times New Roman";
  mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;height:24.0pt'>
  <td width=144 valign=top style='width:1.5in;border-top:none;border-left:none;
  border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;mso-border-top-alt:
  solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
  height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:6.05pt;margin-bottom:.0001pt;line-height:normal'><b><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>No. Factura:&nbsp;</span></b><span
  style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
  "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
  <td width=301 colspan=3 valign=top style='width:225.45pt;border-top:none;
  border-left:none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt;height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:5.95pt;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>${Math.floor(Math.random() * (max - min) + min)}</span><span style='font-size:
  12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:"Times New Roman";
  mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;height:23.25pt'>
  <td width=144 valign=top style='width:1.5in;border-top:none;border-left:none;
  border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;mso-border-top-alt:
  solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
  height:23.25pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:6.05pt;margin-bottom:.0001pt;line-height:normal'><b><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>No. <span class=SpellE>reservacion</span>:&nbsp;</span></b><span
  style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
  "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
  <td width=301 colspan=3 valign=top style='width:225.45pt;border-top:none;
  border-left:none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt;height:23.25pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:5.95pt;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>${noReservacion}</span><span style='font-size:
  12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:"Times New Roman";
  mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;height:24.0pt'>
  <td width=197 colspan=2 valign=top style='width:148.0pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
  height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:6.1pt;margin-bottom:.0001pt;line-height:normal'><strong>Sello de pagado:</strong><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'></span><span
  style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
  "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
  <td width=445 colspan=4 rowspan=4 valign=top style='width:333.45pt;
  border-top:none;border-left:none;border-bottom:solid black 1.0pt;border-right:
  solid black 1.0pt;mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:
  solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;height:24.0pt'></td>
 </tr>
 <tr style='mso-yfti-irow:4;height:24.0pt'>
  <td width=197 colspan=2 valign=top style='width:148.0pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
  height:24.0pt'></td>
 </tr>
 <tr style='mso-yfti-irow:5;height:24.0pt'>
  <td width=197 colspan=2 valign=top style='width:148.0pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
  height:24.0pt'></td>
 </tr>
 <tr style='mso-yfti-irow:6;height:24.0pt'>
  <td width=197 colspan=2 valign=top style='width:148.0pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
  height:24.0pt'></td>
 </tr>
 <tr style='mso-yfti-irow:7;height:24.0pt'>
  <td width=197 colspan=2 valign=top style='width:148.0pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
  height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:6.05pt;margin-bottom:.0001pt;line-height:normal'><b><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>Nombre:&nbsp;</span></b><span
  style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
  "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
  <td width=445 colspan=4 valign=top style='width:333.45pt;border-top:none;
  border-left:none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt;height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:5.95pt;margin-bottom:.0001pt;line-height:normal'><span
  style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
  "Times New Roman";mso-fareast-language:ES-MX'><span class=SpellE>${nombre}</span><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:8;height:23.25pt'>
  <td width=197 colspan=2 valign=top style='width:148.0pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
  height:23.25pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:6.05pt;margin-bottom:.0001pt;line-height:normal'><b><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>Dirección:&nbsp;</span></b><span
  style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
  "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
  <td width=445 colspan=4 valign=top style='width:333.45pt;border-top:none;
  border-left:none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt;height:23.25pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:5.95pt;margin-bottom:.0001pt;line-height:normal'><span
  style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
  "Times New Roman";mso-fareast-language:ES-MX'><span class=SpellE>Calz. de los Ángeles 14, Montebello, 83249 Hermosillo, Son.</span><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:9;height:24.0pt'>
  <td width=197 colspan=2 valign=top style='width:148.0pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
  height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:5.75pt;margin-bottom:.0001pt;line-height:normal'><b><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>Ciudad de provincia:&nbsp;</span></b><span
  style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
  "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
  <td width=445 colspan=4 valign=top style='width:333.45pt;border-top:none;
  border-left:none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt;height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:5.95pt;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>Hermosillo Sonora</span><span style='font-size:
  12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:"Times New Roman";
  mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:10;height:24.0pt'>
  <td width=197 colspan=2 valign=top style='width:148.0pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
  height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:5.5pt;margin-bottom:.0001pt;line-height:normal'><b><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>Telefono:&nbsp;</span></b><span
  style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
  "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
  <td width=445 colspan=4 valign=top style='width:333.45pt;border-top:none;
  border-left:none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt;height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:5.95pt;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>${telefono}</span><span style='font-size:
  12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:"Times New Roman";
  mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:11;height:24.0pt'>
  <td width=197 colspan=2 valign=top style='width:148.0pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
  height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:5.5pt;margin-bottom:.0001pt;line-height:normal'><b><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>Numero Tarjeta<o:p></o:p></span></b></p>
  </td>
  <td width=445 colspan=4 valign=top style='width:333.45pt;border-top:none;
  border-left:none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt;height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:5.95pt;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>${noTarjetas}<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:11;height:24.0pt'>
  <td width=197 colspan=2 valign=top style='width:148.0pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
  height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:5.5pt;margin-bottom:.0001pt;line-height:normal'><b><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>No. Habitacion<o:p></o:p></span></b></p>
  </td>
  <td width=445 colspan=4 valign=top style='width:333.45pt;border-top:none;
  border-left:none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt;height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:5.95pt;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>${habitacionNumero}<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:12;height:24.0pt'>
  <td width=129 valign=top style='width:96.9pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
  height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:5.75pt;margin-bottom:.0001pt;line-height:normal'><b><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>Consumo</span></b><span
  style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
  "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
  <td width=254 colspan=3 valign=top style='width:190.6pt;border-top:none;
  border-left:none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt;height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:6.05pt;margin-bottom:.0001pt;line-height:normal'><b><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>Descripción&nbsp;</span></b><span
  style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
  "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
  <td width=132 valign=top style='width:99.0pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt;height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:6.05pt;margin-bottom:.0001pt;line-height:normal'><b><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>Precio&nbsp;</span></b><span
  style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
  "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
  <td width=127 valign=top style='width:94.95pt;border-top:none;border-left:
  none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt;height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:6.0pt;margin-bottom:.0001pt;line-height:normal'><b><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>Importe</span></b><span
  style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
  "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
 </tr>
 ${obtenerConsumos(consumos)}
 <tr style='mso-yfti-irow:16;mso-yfti-lastrow:yes;height:24.0pt'>
  <td width=383 colspan=4 valign=top style='width:287.5pt;border:solid black 1.0pt;
  border-top:none;mso-border-top-alt:solid black 1.0pt;padding:5.0pt 5.0pt 5.0pt 5.0pt;
  height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:5.5pt;margin-bottom:.0001pt;line-height:normal'><b><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>Total:&nbsp;</span></b><span
  style='font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:
  "Times New Roman";mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
  <td width=259 colspan=2 valign=top style='width:193.95pt;border-top:none;
  border-left:none;border-bottom:solid black 1.0pt;border-right:solid black 1.0pt;
  mso-border-top-alt:solid black 1.0pt;mso-border-left-alt:solid black 1.0pt;
  padding:5.0pt 5.0pt 5.0pt 5.0pt;height:24.0pt'>
  <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
  margin-left:5.95pt;margin-bottom:.0001pt;line-height:normal'><span
  style='font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
  color:black;mso-fareast-language:ES-MX'>$ ${monto}</span><span style='font-size:
  12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:"Times New Roman";
  mso-fareast-language:ES-MX'><o:p></o:p></span></p>
  </td>
 </tr>
 <![if !supportMisalignedColumns]>
 <tr height=0>
  <td width=129 style='border:none'></td>
  <td width=68 style='border:none'></td>
  <td width=144 style='border:none'></td>
  <td width=42 style='border:none'></td>
  <td width=132 style='border:none'></td>
  <td width=127 style='border:none'></td>
 </tr>
 <![endif]>
</table>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

</div>

</body>

</html>

  ` 
  
};

module.exports = content;