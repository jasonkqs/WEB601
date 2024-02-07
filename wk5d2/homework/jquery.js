
    $(document).ready(function() {
        $("#btn").click(function(event){

            $("table").empty();
            
            $.getJSON('data.json', function(data){
                $("table").append('<caption>' + data.title + '</caption>');
                
                var headingRow = '<tr id="showheading">' +
                                    '<th>' + data.heading + '</th>' +
                                    '<th>' + data.head1 + '</th>' +
                                    '<th>' + data.head2 + '</th>' +
                                    '<th>' + data.head3 + '</th>' +
                                    '<th>' + data.head4 + '</th>' +
                                '</tr>';
                $("table").append('<thead>' + headingRow + '</thead>');

                var caloriesRow = '<tr id="showcalories">' +
                                    '<td>' + data.subheadcal + '</td>' +
                                    '<td>' + data.cal1 + '</td>' +
                                    '<td>' + data.cal2 + '</td>' +
                                    '<td>' + data.cal3 + '</td>' +
                                    '<td>' + data.cal4 + '</td>' +
                                '</tr>';
                var fatRow = '<tr id="showfat">' +
                                '<td>' + data.subheadfat + '</td>' +
                                '<td>' + data.fat1 + '</td>' +
                                '<td>' + data.fat2 + '</td>' +
                                '<td>' + data.fat3 + '</td>' +
                                '<td>' + data.fat4 + '</td>' +
                            '</tr>';
                $("table").append('<tbody>' + caloriesRow + fatRow + '</tbody>');

                var vendorRow = '<tr id="showven">' +
                                '<td>' + data.subheadven + '</td>' +
                                '<td>' + data.ven1 + '</td>' +
                                '<td>' + data.ven2 + '</td>' +
                                '<td>' + data.ven3 + '</td>' +
                                '<td>' + data.ven4 + '</td>' +
                                '</tr>';
                $("table").append('<tfoot>' + vendorRow + '</tfoot>');
            })
        });
    });
