// basic find change.
// relies heavyliy on find change queries
// Copyright (C) 2011 Fabian "fabiantheblind" Morón Zirfas
// http://www.the-moron.net
// info [at] the - moron . net

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/.

var data = new Object();
data.DEBUG = false;
data.fileNames = ["JM_NEU_SAVE_0_d_blank_zoll",
"JM_NEU_SAVE_0a_Anfuehrungen_I_hin",
"JM_NEU_SAVE_0b_Anfuehrungen_II_hin",
"JM_NEU_SAVE_0c_ABFUEHRUNGEN",
"JM_NEU_SAVE_0d_AN_AB_ersetzen",
"JM_NEU_SAVE_0e_ABFUEHRUNGEN",
"JM_NEU_SAVE_0f_AN_AB_ersetzen",
"JM_NEU_SAVE_0g_AN_AB_ersetzen",
"JM_NEU_SAVE_0h_Anab_in_Anab",
"JM_NEU_SAVE_1e_Zoll",
"JM_NEU_SAVE_2_aufzaehlungen",
"JM_NEU_SAVE_2b_ellipse",
"JM_NEU_SAVE_3a_blank_ellipse",
"JM_NEU_SAVE_3b_ellipse_blank",
"JM_NEU_SAVE_4a_blank_mm",
"JM_NEU_SAVE_4b_blank_cm",
"JM_NEU_SAVE_4d_blank_interpunktion",
"JM_NEU_SAVE_4e_komma_blank",
"JM_NEU_SAVE_4f_punkt_blank",
"JM_NEU_SAVE_4g_blank_ausrufezeichen",
"JM_NEU_SAVE_4h_blank_doppelpunkt",
"JM_NEU_SAVE_4i_blank_semikolon",
"JM_NEU_SAVE_4j_klammern_blank",
"JM_NEU_SAVE_4k_klammern_punct",
"JM_NEU_SAVE_4l_klammern_umbruch",
"JM_NEU_SAVE_4m_slash_blanks",
"JM_NEU_SAVE_5a_zoll_blank",
"JM_NEU_SAVE_5b_malzeichen_I_nach_zoll",
"JM_NEU_SAVE_5c_malzeichen_breite_hoehe_tiefe",
"JM_NEU_SAVE_5c1_malzeichen_breite_hoehe_tiefe_in_zahlen",
"JM_NEU_SAVE_5d_malzeichen_dxddzoll",
"JM_NEU_SAVE_5e_malzeichen_sdx",
"JM_NEU_SAVE_5f_malzeichen_sdx",
"JM_NEU_SAVE_6_Gedankenstrich",
"JM_NEU_SAVE_7_kHz",
"JM_NEU_SAVE_8a_X_teilig",
"JM_NEU_SAVE_8b_X_fach",
"JM_NEU_SAVE_9a_z_B",
"JM_NEU_SAVE_9b_aaO",
"JM_NEU_SAVE_9c_dh",
"JM_NEU_SAVE_9d_mE",
"JM_NEU_SAVE_9e_oae",
"JM_NEU_SAVE_9f_so",
"JM_NEU_SAVE_9g_su",
"JM_NEU_SAVE_9h_ua",
"JM_NEU_SAVE_9i_uU",
"JM_NEU_SAVE_9j_va",
"JM_NEU_SAVE_9k_zH",
"JM_NEU_SAVE_9l_zT",
"JM_NEU_SAVE_10a_seitenzahl",
"JM_NEU_SAVE_10b_seitenzahl_1_24stel",
"JM_NEU_SAVE_13_Apostroph",
"JM_NEU_SAVE_14c_Preisstrich",
"JM_NEU_SAVE_15a_Plugin",
"JM_NEU_SAVE_15b_Midi",
"JM_NEU_SAVE_15c_specs",
"JM_NEU_SAVE_15d_Features",
"JM_NEU_SAVE_16_Bisstrich_Ziffern",
"JM_NEU_SAVE_17a_Beschreibung_Marke",
"JM_NEU_SAVE_17b_aufzaehlung_ranziehen",
"JM_NEU_SAVE_17c_textflussende_ranziehen",
"JM_NEU_SAVE_18_doubleblanks",
"JM_NEU_SAVE_19a_Euro_hin",
"JM_NEU_SAVE_19b_Euro_zurueck",
"JM_NEU_SAVE_20a_gfL",
"JM_NEU_SAVE_20b_gfL"];


main();
//--------------


function main() {
	
	var doc;

		try {
		var doc = app.activeDocument;

		} catch(e){
		alert("No no no, you have no document.\nMaybe you should drink some coffee");
		return;
		}	
	
	var myDate = new Date();
	var logfilebool = true;
	try{
	var myLogFile = myGetFileName();
	var myFileContent = myLogFile.read();
	var myErrorLog = myFileContent +"\n"+"Starting Log file at "+myDate +"\n";
	}catch(e){
		
		var myFileContent = "";
		var myErrorLog = myFileContent +"\n"+"Starting Log file at "+myDate +"\n";
		logfilebool = false;
		
	}

for(var i  = 0; i < data.fileNames.length; i++){
	
	//this is debugging
	if(data.DEBUG) alert("DEBUG:\nloop --> "+i + "\nFN --> "+data.fileNames[i]);
	try {
		app.loadFindChangeQuery (data.fileNames[i], SearchModes.grepSearch); 
	myErrorLog = myErrorLog +  doc.findGrep().toString() +"\n";
	app.activeDocument.changeGrep(); 
	if(data.DEBUG) alert("DEBUG:\n " + "\n found this FN --> " + data.fileNames[i]+ ".xml");
	

	} catch (e) {
		if(data.DEBUG) alert("DEBUG:\n " + "\n could not find this FN --> " + data.fileNames[i]+ ".xml");

		myErrorLog = myErrorLog + e.toString() + data.fileNames[i]+".xml could not be processed  \n";


	}	// end of catch
	
	
} // end of for loop

		if(logfilebool == true){
		var myFile = myLogFile;   
		var myData = myErrorLog;
		writeData (myFile, myData );
		}
		
		alert("Done");
}


function myGetFileName()  
{   

	var myFolder = app.activeDocument.filePath;

      var myFile =  new File( myFolder+'/findChangeLog.txt' )  
//      if ( myFile == null ){exit()};  
   return myFile;   
} 

function writeData (myFile , aData )  
{ 
	var myResult;
   if( myFile!='' )  
   {   
      //Open the file for writing.   
      myResult = myFile.open( 'e', undefined, undefined );   
   }  
   if( myResult != false )  
   {     
	   myFile.seek(0);
      myFile.writeln( aData );         
      myFile.close();   
//      myFile.execute();  
   }
}

