// this is a place for quick scribbles.
// just write in some code and run it
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

//alert($.fileName);
var txt = "this is fabiantheblind Keeper of the Sacred Chao Adept of Canhoto son of H.Z. and Dr.D member of the moron net who travells the hello worlds and does stuff that involves things\n";
// written by fabiantheblind
// http://www.the-moron.net
var doc  = app.documents.add()
with(doc.documentPreferences){
    pageWidth  = 160;
    pageHeight = 160;
    };

var p = doc.pages[0];


var ovs = new Array();

for(var i = 0; i < 20 ; i++){
	
	var val =  Math.sin((i/10))*11 ;
	
    txt = txt + txt;
	var tm = app.transformationMatrices.add({counterclockwiseRotationAngle:i*5});

    ovs[i] = p.ovals.add({geometricBounds:[val + 10+i*3,val + 10+i*3,val + 150-i*3,val + 150-i*3]});
    ovs[i].strokeWeight = 0;
    ovs[i].textPaths.add();
    if(i > 0){
        ovs[i].textPaths[0].previousTextFrame = ovs[i-1].textPaths[0];
        }

		ovs[i].transform(CoordinateSpaces.pasteboardCoordinates, AnchorPoint.centerAnchor, tm);
		
    }




 
ovs[0].textPaths[0].contents =  TextFrameContents.placeholderText; //
