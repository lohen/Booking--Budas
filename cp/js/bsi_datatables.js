$(document).ready(function() {
// DataTables Config - this reloads dataTables when it is placed in a hidden tab			

	

	$(".tabs").tabs( {

        "select": function(event, ui) {

            oTable.fnAdjustColumnSizing();

            $('.tabs div.dataTables_scroll').css({

                "visibility":"hidden" 

            });

        },

        "show": function(event, ui) {

            var oTable = $('div.dataTables_scrollBody > table', ui.panel).dataTable();

            if ( oTable.length > 0 ) {

                oTable.fnAdjustColumnSizing();

                $(".tabs div.dataTables_scroll").css({

                    "display":"none",

                    "visibility":"visible" 

                }).show();

            }

        }

    } );



// DataTables Config - this reloads dataTables when it is placed in a closed accordion			

	$( ".content_accordion" ).accordion( {

		"change": function(event, ui) {

			var oTable = $('div.dataTables_scrollBody > table', ui.panel).dataTable();

            if ( oTable.length > 0 ) {

                oTable.fnAdjustColumnSizing();

                $(".content_accordion div.dataTables_scroll").css({

                    "display":"none",

                    "visibility":"visible" 

                }).show();

            }

		}

	});

    

	$(window).resize(function(){

        oTable.fnAdjustColumnSizing();

	});

});