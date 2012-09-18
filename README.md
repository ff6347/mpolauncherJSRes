#Druckausgabe Workflow  
Hallo Freunde,  
damit wir eine schnelle Abwicklung und dezentrale Ausspielung der PDF Daten für den Druck und den Blätterkatalog hinkriegen, müssen ein paar Dinge beachtet werden. Wir müssen einerseits:  

- CMYK (ISOcoated_v2_300_eci.icc) Daten ausspielen für den Druck  
- RGB (sRGB IEC61966-2.1.icc) Daten mit Hyperlinks ausspielen für den Blätterkatalog  

Deshalb würde ich folgenden Workflow vorschlagen.  

---------------
  
##Workflow  

Wenn ihr die unten genannten Schritte "Steb-By-Step" ausführt dürfte eigentlich ncihts schiefgehen. Bei etwaigen Fragen oder Problemen stehe ich euch natürlich zur Verfügung.  

###Einmalig für euren Computer  
Vorab eine kleine Info. Wenn euer Computer das Betriebssytem Mac OSX 10.7 oder höher hat ist der "Library" Ordner unsichtbar. Um ihn sehen zu können müsst ihr: Das Finder Menü “Gehe zu” anwählen und dabei  die alt-Taste gedrückt halten. Dann wird der Library Ordner im Menü angezeigt und hier könnt darauf klicken um ihn zu öffnen.  

-----------------

1. **HYPERLINK SCRIPT:** 
Ladet euch das Skript ["buildHyperlinks_FromArtNr.js"](https://raw.github.com/fabiantheblind/mpolauncherJSRes/master/buildHyperlinks_FromArtNr.js) und legt es in euren "Scripts Panel" Ordner **/Applications/Adobe InDesign CS5.5/Scripts/Scripts Panel/[YOUR JM SCRIPTS FOLDER]** 
2. **HYPERLINK SCRIPT FC QUERY:** 
Ladet euch die dazugehörige [Find Change Query "JM_ArtNr_only.xml"](https://raw.github.com/fabiantheblind/mpolauncherJSRes/master/_fcqueries/grep/JM_ArtNr_only.xml) runter und legt das FC Query .XML unter **/Users/[YOUR USER NAME]/Library/Preferences/Adobe InDesign/Version 7.5/de_DE/Find-Change Queries/GREP/** ab. **WICHTIG** Die .xml Datei **MUSS** JM_ArtNr_only.xml heissen und das Skript **MUSS** buildHyperlinks_FromArtNr.js heissen. Achtet darauf das hier sie unter diesen Namen aus dem Browser speichert. Wichtig ist dabei das ihr die Datien als Quelltext speichert und nicht als Webarchiv.
3. **INDESIGN JOBOPTIONS:** 
Ladet euch die Joboptions für den Druckkatalog und den Blätterkatalog [hier runter](https://github.com/downloads/fabiantheblind/mpolauncherJSRes/jm_2013_joboptions.zip)    
4. Ladet die [Joboptions in euer InDesign](http://helpx.adobe.com/de/indesign/using/exporting-publishing-pdf.html#load_adobe_pdf_presets) **oder** legt sie in den PDF Vorgaben Ordner
Mac OS: User/[Benutzername]/Library/Application Support/Adobe/Adobe PDF
Windows XP: Dokumente und Einstellungen\[Benutzername\Anwendungsdaten\Adobe\Adobe PDF
Windows Vista und Windows 7: Benutzer\[Benutzername\AppData\Roaming\Adobe\Adobe PDF
Sie *sollten* nun in eurem InDesign unter dem PDF export verfügbar sein.  
5. **CMYK PROFILE:** 
Ladet euch die [CMYK profile hier runter](http://www.eci.org/_media/downloads/icc_profiles_from_eci/eci_offset_2009.zip?id=de%3Adownloads&cache=cache) und installiert alle Dateien (oder zumindest die ISOcoated_v2_200_eci.icc) unter diesem Pfad **/Users/[YOUR USER NAME]/Library/ColorSync/Profiles**. Das RGB Profil ist bereits auf eurem Comouter installiert.  
6. **WICHTIG** Startet euren Rechner einmal neu, damit das Farbprofil verfügbar ist.
7. **ADOBE COLOR SETTINGS:** 
Ladet euch unser Adobe Color Settings "JM2013_Adobe_Colorsettings.csf" [hier runter](https://github.com/downloads/fabiantheblind/mpolauncherJSRes/jm_2013_color_settings.zip) und legt sie unter **/Users/[YOUR USER NAME]/Library/Application Support/Adobe/Color/Settings** ab.  
8. Öffnet Adobe Bridge und aktiviert die Farbsynchronisierung unter ["Bearbeiten/Creative Suite Farbeinstellungen…"](http://help.adobe.com/de_DE/acrobat/standard/using/WS7dd5c1363434bb705ef7070413076c37057-7ff7.html) und wählt unsere Color Settings aus.  
9. Guckt zur Sicherheit noch einmal in InDesign unter "Bearbeiten/Farbeinstellungen…" ob unsere Profile auch aktiviert wurden.  
10. **PHOTOSHOP AKTIONEN:** 
Ladet euch die Photoshop Konvertierungs [Aktionen hier runter](https://github.com/downloads/fabiantheblind/mpolauncherJSRes/jm_2013_psd_actions.zip) und ladet sie euch in euer Photoshop wie [hier beschrieben](http://help.adobe.com/de_DE/photoshop/cs/using/WSfd1234e1c4b69f30ea53e41001031ab64-7451a.html#WS605F6F30-F4AD-4357-8B66-BDFF57DC1558)

------------------------

###Für jedes Dokument  
  
1. **DATEIEN SAMMELN:** 
Wenn eure Dokumente fertig gesetzt sind und für die Ausspielung bereit sind [sammelt ihr alle Daten mit InDesign](http://help.adobe.com/de_DE/indesign/cs/using/WSa285fff53dea4f8617383751001ea8cb3f-7060a.html#WSa285fff53dea4f8617383751001ea8cb3f-7058a). Dadurch sind alle Daten in einem Ordner und sind für die Konvertierung besser zu handhaben.  
2. **DATEIEN KONVERTIEREN:**
Macht eine Kopie von dem "Links" Ordner der dabei erzeugt wurde. Nennt eine "RGB_Links" und die andere "CMYK_Links".  
3. Konvertiert mit Photoshop / Bridge alle CMYK Bilder in das richtige Farbprofil mit der oben geannten und installierten Photoshop Aktion  
4. Konvertiert mit Photoshop / Bridge alle RGB Bilder in das richtige Fabprofil mit der oben geannten und installierten Photoshop Aktion  
5. Dafür müsst ihr [die Stapelverabeitung benutzen](http://help.adobe.com/de_DE/photoshop/cs/using/WSfd1234e1c4b69f30ea53e41001031ab64-7427a.html#WSfd1234e1c4b69f30ea53e41001031ab64-7425a)  
**ACHTUNG** die Aktionen haben keinen Speichern Befehl. Den müsst ihr im Stapelverarbietungs Bedienfeld selber aktivieren unter "Ziel -> Speichern und Schliessen"  
5. **HYPERLINKS ERZEUGEN:** 
**WICHTIG WICHTIG** Führt das Skript "buildHyperlinks_FromArtNr.js" aus und exportiert ein PDF mit Hyperlinks um zu sehen ob diese funktionieren. Ihr solltet auf eine Artikelnummer klicken können im PDF und dann sollte sich ein Browserfenster öffnen mit einer justmusic.de Seite zu dem entsprechendem Produkt.  
6. **PDF EXPORT BLÄTTERKATALOG:** 
**WICHTIG WICHTIG** Achtet darauf das euer Dokument mit den Bildern im Ordner "RGB_Links" verbunden ist Für den Blätterkatalog Export.  
7. Exportiert das Blätterkatalog PDF mit den oben genannten "Blätterkatalog vorgaben"  
8. **PDF EXPORT DRUCKKATALOG:** 
**WICHTIG WICHTIG** Achtet darauf das euer Dokument mit den Bildern im Ordner "CMYK_Links" verbunden ist für den Druckkatalog Export.
9. Exportiert das Druckkatalog PDF mit den oben genannten "Druckkatalog vorgaben"  
10. Benennt alle PDF Dateien mit ihrem Seitenbereich. Es sollten nie mehr als 8 Seiten in einem PDF Dokument sein

###Dokumente mit RGB/CMYK verbinden    

Um einen Ordner zu entkoppeln/verbinden vom Dokument.  

1. Schliesst das Dokument  
2. Benennt den aktuell verbundenen Ordner um. Ein "\_" im Namen sollte reichen.  
3. Öffnet das Dokument wieder  
4. Geht in die "Verknüpfungen" Palette und verbindet eine Datein neu. InDesign sollte alle anderen Dateien dann auch finden.
