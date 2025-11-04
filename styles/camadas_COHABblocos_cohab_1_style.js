var size = 0;
var placement = 'point';

var style_camadas_COHABblocos_cohab_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (exp_label_camadas_COHABblocos_cohab_1_eval_expression(context) !== null) {
        labelText = String(exp_label_camadas_COHABblocos_cohab_1_eval_expression(context));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}),fill: new ol.style.Fill({color: 'rgba(0,251,255,0.3568627450980392)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
