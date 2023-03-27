function jsonToHtmlTable(json){

    let arrayParsedFromJson = JSON.parse(json);

    let outputArr = [];
    outputArr.push('<table>');

    outputArr.push(makeKeyRow(arrayParsedFromJson));
    arrayParsedFromJson.forEach( obj => outputArr.push(makeValueRow(obj)) );

    outputArr.push('</table>');

    return outputArr.join('\n');


    function makeKeyRow(arrayParsedFromJson){

        let stringKeyRow = '<tr>';

        for (const curObject of arrayParsedFromJson) {
            
            for (const key in curObject) {
                stringKeyRow += `<th>${escapeHTML(key)}</th>`;
            }
            break;
        }
      
       stringKeyRow += '</tr>'

       return stringKeyRow;
       

    }
    function makeValueRow(obj){

        let stringValueRow = '<tr>';
        for (const key in obj) {
          
            stringValueRow += `<td>${escapeHTML(obj[key])}</td>`;
        }

        stringValueRow += '</tr>'
        return stringValueRow;

    }

    function escapeHTML(value) {
        return value
          .toString()
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      }


}

jsonToHtmlTable(
`[{"Name":"Stamat", "Score":5.5},
{"Name":"Rumen", "Score":6}]`
);