var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_camadas_COHABblocos_cohab_1 = new ol.format.GeoJSON();
var features_camadas_COHABblocos_cohab_1 = format_camadas_COHABblocos_cohab_1.readFeatures(json_camadas_COHABblocos_cohab_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_camadas_COHABblocos_cohab_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_camadas_COHABblocos_cohab_1.addFeatures(features_camadas_COHABblocos_cohab_1);
var lyr_camadas_COHABblocos_cohab_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_camadas_COHABblocos_cohab_1, 
                style: style_camadas_COHABblocos_cohab_1,
                popuplayertitle: 'camadas_COHAB — blocos_cohab',
                interactive: true,
                title: '<img src="styles/legend/camadas_COHABblocos_cohab_1.png" /> camadas_COHAB — blocos_cohab'
            });
var format_camadas_COHABlotes_local_2 = new ol.format.GeoJSON();
var features_camadas_COHABlotes_local_2 = format_camadas_COHABlotes_local_2.readFeatures(json_camadas_COHABlotes_local_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_camadas_COHABlotes_local_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_camadas_COHABlotes_local_2.addFeatures(features_camadas_COHABlotes_local_2);
var lyr_camadas_COHABlotes_local_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_camadas_COHABlotes_local_2, 
                style: style_camadas_COHABlotes_local_2,
                popuplayertitle: 'camadas_COHAB — lotes_local',
                interactive: false,
                title: '<img src="styles/legend/camadas_COHABlotes_local_2.png" /> camadas_COHAB — lotes_local'
            });
var format_camadas_COHABLOTES_PLANILHA_IDENTIFICADOSsegundo_join__lotes_local_3 = new ol.format.GeoJSON();
var features_camadas_COHABLOTES_PLANILHA_IDENTIFICADOSsegundo_join__lotes_local_3 = format_camadas_COHABLOTES_PLANILHA_IDENTIFICADOSsegundo_join__lotes_local_3.readFeatures(json_camadas_COHABLOTES_PLANILHA_IDENTIFICADOSsegundo_join__lotes_local_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_camadas_COHABLOTES_PLANILHA_IDENTIFICADOSsegundo_join__lotes_local_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_camadas_COHABLOTES_PLANILHA_IDENTIFICADOSsegundo_join__lotes_local_3.addFeatures(features_camadas_COHABLOTES_PLANILHA_IDENTIFICADOSsegundo_join__lotes_local_3);
var lyr_camadas_COHABLOTES_PLANILHA_IDENTIFICADOSsegundo_join__lotes_local_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_camadas_COHABLOTES_PLANILHA_IDENTIFICADOSsegundo_join__lotes_local_3, 
                style: style_camadas_COHABLOTES_PLANILHA_IDENTIFICADOSsegundo_join__lotes_local_3,
                popuplayertitle: 'camadas_COHAB — LOTES_PLANILHA_IDENTIFICADOS — segundo_join__lotes_local',
                interactive: false,
                title: '<img src="styles/legend/camadas_COHABLOTES_PLANILHA_IDENTIFICADOSsegundo_join__lotes_local_3.png" /> camadas_COHAB — LOTES_PLANILHA_IDENTIFICADOS — segundo_join__lotes_local'
            });
var format_camadas_COHABquadras_4 = new ol.format.GeoJSON();
var features_camadas_COHABquadras_4 = format_camadas_COHABquadras_4.readFeatures(json_camadas_COHABquadras_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_camadas_COHABquadras_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_camadas_COHABquadras_4.addFeatures(features_camadas_COHABquadras_4);
var lyr_camadas_COHABquadras_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_camadas_COHABquadras_4, 
                style: style_camadas_COHABquadras_4,
                popuplayertitle: 'camadas_COHAB — quadras',
                interactive: true,
                title: 'camadas_COHAB — quadras'
            });
var format_camadas_COHABLOGRADOUROS_logradouros_5 = new ol.format.GeoJSON();
var features_camadas_COHABLOGRADOUROS_logradouros_5 = format_camadas_COHABLOGRADOUROS_logradouros_5.readFeatures(json_camadas_COHABLOGRADOUROS_logradouros_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_camadas_COHABLOGRADOUROS_logradouros_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_camadas_COHABLOGRADOUROS_logradouros_5.addFeatures(features_camadas_COHABLOGRADOUROS_logradouros_5);
var lyr_camadas_COHABLOGRADOUROS_logradouros_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_camadas_COHABLOGRADOUROS_logradouros_5, 
                style: style_camadas_COHABLOGRADOUROS_logradouros_5,
                popuplayertitle: 'camadas_COHAB — LOGRADOUROS_ — logradouros',
                interactive: true,
                title: '<img src="styles/legend/camadas_COHABLOGRADOUROS_logradouros_5.png" /> camadas_COHAB — LOGRADOUROS_ — logradouros'
            });
var format_camadas_COHABbusca_enderecos_6 = new ol.format.GeoJSON();
var features_camadas_COHABbusca_enderecos_6 = format_camadas_COHABbusca_enderecos_6.readFeatures(json_camadas_COHABbusca_enderecos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_camadas_COHABbusca_enderecos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_camadas_COHABbusca_enderecos_6.addFeatures(features_camadas_COHABbusca_enderecos_6);
var lyr_camadas_COHABbusca_enderecos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_camadas_COHABbusca_enderecos_6, 
                style: style_camadas_COHABbusca_enderecos_6,
                popuplayertitle: 'camadas_COHAB — busca_enderecos',
                interactive: false,
                title: 'camadas_COHAB — busca_enderecos'
            });
var format_camadas_COHABcadastros_cohabpontos_7 = new ol.format.GeoJSON();
var features_camadas_COHABcadastros_cohabpontos_7 = format_camadas_COHABcadastros_cohabpontos_7.readFeatures(json_camadas_COHABcadastros_cohabpontos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_camadas_COHABcadastros_cohabpontos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_camadas_COHABcadastros_cohabpontos_7.addFeatures(features_camadas_COHABcadastros_cohabpontos_7);
var lyr_camadas_COHABcadastros_cohabpontos_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_camadas_COHABcadastros_cohabpontos_7, 
                style: style_camadas_COHABcadastros_cohabpontos_7,
                popuplayertitle: 'camadas_COHAB — cadastros_cohab — pontos',
                interactive: false,
                title: '<img src="styles/legend/camadas_COHABcadastros_cohabpontos_7.png" /> camadas_COHAB — cadastros_cohab — pontos'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_camadas_COHABblocos_cohab_1.setVisible(true);lyr_camadas_COHABlotes_local_2.setVisible(true);lyr_camadas_COHABLOTES_PLANILHA_IDENTIFICADOSsegundo_join__lotes_local_3.setVisible(true);lyr_camadas_COHABquadras_4.setVisible(true);lyr_camadas_COHABLOGRADOUROS_logradouros_5.setVisible(true);lyr_camadas_COHABbusca_enderecos_6.setVisible(true);lyr_camadas_COHABcadastros_cohabpontos_7.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_camadas_COHABblocos_cohab_1,lyr_camadas_COHABlotes_local_2,lyr_camadas_COHABLOTES_PLANILHA_IDENTIFICADOSsegundo_join__lotes_local_3,lyr_camadas_COHABquadras_4,lyr_camadas_COHABLOGRADOUROS_logradouros_5,lyr_camadas_COHABbusca_enderecos_6,lyr_camadas_COHABcadastros_cohabpontos_7];
lyr_camadas_COHABblocos_cohab_1.set('fieldAliases', {'fid': 'fid', 'bloco': 'bloco', 'cep': 'cep', 'logradouro': 'logradouro', });
lyr_camadas_COHABlotes_local_2.set('fieldAliases', {'fid': 'fid', 'quadrari': 'quadrari', 'loteri': 'loteri', 'DOCUMENTO_IMOV': 'DOCUMENTO_IMOV', 'ART': 'ART', 'SETOR_COHAB': 'SETOR_COHAB', 'ENDERECO_IMOVEL': 'ENDERECO_IMOVEL', 'nucleo': 'nucleo', 'chave': 'chave', });
lyr_camadas_COHABLOTES_PLANILHA_IDENTIFICADOSsegundo_join__lotes_local_3.set('fieldAliases', {'fid': 'fid', 'quadrari': 'quadrari', 'loteri': 'loteri', 'DOCUMENTO_IMOV': 'DOCUMENTO_IMOV', 'ART': 'ART', 'SETOR_COHAB': 'SETOR_COHAB', 'ENDERECO_IMOVEL': 'ENDERECO_IMOVEL', 'nucleo': 'nucleo', 'chave': 'chave', 'correspondencias_score_95_chave_cohab': 'correspondencias_score_95_chave_cohab', 'correspondencias_score_95_CONTRATO': 'correspondencias_score_95_CONTRATO', 'correspondencias_score_95_Nome do Principal': 'correspondencias_score_95_Nome do Principal', 'correspondencias_score_95_CPF do Principal': 'correspondencias_score_95_CPF do Principal', 'correspondencias_score_95_N�CLEO HABITACIONAL': 'correspondencias_score_95_N�CLEO HABITACIONAL', 'correspondencias_score_95_Similaridade': 'correspondencias_score_95_Similaridade', });
lyr_camadas_COHABquadras_4.set('fieldAliases', {'fid': 'fid', 'quadrari': 'quadrari', });
lyr_camadas_COHABLOGRADOUROS_logradouros_5.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'quadras': 'quadras', 'objectid': 'objectid', 'logradouro': 'logradouro', 'codlog1': 'codlog1', 'largura': 'largura', 'recuo_eixo': 'recuo_eixo', 'passeio': 'passeio', 'pista': 'pista', 'canteiro': 'canteiro', 'recuo_viar': 'recuo_viar', 'regular': 'regular', 'aux': 'aux', 'cep_par': 'cep_par', 'cep_impar': 'cep_impar', 'matricula': 'matricula', 'area': 'area', 'tipo': 'tipo', 'velocidade': 'velocidade', 'REORDENAMENTO NUMERICO': 'REORDENAMENTO NUMERICO', 'n_inic': 'n_inic', 'n_final': 'n_final', 'CEP': 'CEP', 'pistas': 'pistas', });
lyr_camadas_COHABbusca_enderecos_6.set('fieldAliases', {'fid': 'fid', 'ENDERECO_IMOVEL': 'ENDERECO_IMOVEL', });
lyr_camadas_COHABcadastros_cohabpontos_7.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'objectid': 'objectid', 'cadastro': 'cadastro', 'cadastro_1': 'cadastro_1', 'setor': 'setor', 'quadra': 'quadra', 'lote': 'lote', 'coduni': 'coduni', 'codlog': 'codlog', 'tipo': 'tipo', 'logradouro': 'logradouro', 'numero': 'numero', 'complement': 'complement', 'cep': 'cep', 'preftestad': 'preftestad', 'logradou_1': 'logradou_1', 'compleme_1': 'compleme_1', 'profundida': 'profundida', 'quadrari': 'quadrari', 'loteri': 'loteri', 'ENDERECO_IMOVEL': 'ENDERECO_IMOVEL', });
lyr_camadas_COHABblocos_cohab_1.set('fieldImages', {'fid': 'TextEdit', 'bloco': 'TextEdit', 'cep': 'TextEdit', 'logradouro': 'TextEdit', });
lyr_camadas_COHABlotes_local_2.set('fieldImages', {'fid': 'TextEdit', 'quadrari': 'TextEdit', 'loteri': 'TextEdit', 'DOCUMENTO_IMOV': 'TextEdit', 'ART': 'TextEdit', 'SETOR_COHAB': 'TextEdit', 'ENDERECO_IMOVEL': 'TextEdit', 'nucleo': 'TextEdit', 'chave': 'TextEdit', });
lyr_camadas_COHABLOTES_PLANILHA_IDENTIFICADOSsegundo_join__lotes_local_3.set('fieldImages', {'fid': 'TextEdit', 'quadrari': 'TextEdit', 'loteri': 'TextEdit', 'DOCUMENTO_IMOV': 'TextEdit', 'ART': 'TextEdit', 'SETOR_COHAB': 'TextEdit', 'ENDERECO_IMOVEL': 'TextEdit', 'nucleo': 'TextEdit', 'chave': 'TextEdit', 'correspondencias_score_95_chave_cohab': 'TextEdit', 'correspondencias_score_95_CONTRATO': 'TextEdit', 'correspondencias_score_95_Nome do Principal': 'TextEdit', 'correspondencias_score_95_CPF do Principal': 'TextEdit', 'correspondencias_score_95_N�CLEO HABITACIONAL': 'TextEdit', 'correspondencias_score_95_Similaridade': 'TextEdit', });
lyr_camadas_COHABquadras_4.set('fieldImages', {'fid': 'TextEdit', 'quadrari': 'TextEdit', });
lyr_camadas_COHABLOGRADOUROS_logradouros_5.set('fieldImages', {'fid': '', 'gid': 'TextEdit', 'quadras': 'TextEdit', 'objectid': 'TextEdit', 'logradouro': 'TextEdit', 'codlog1': 'TextEdit', 'largura': 'TextEdit', 'recuo_eixo': 'TextEdit', 'passeio': 'TextEdit', 'pista': 'TextEdit', 'canteiro': 'TextEdit', 'recuo_viar': 'TextEdit', 'regular': 'TextEdit', 'aux': 'TextEdit', 'cep_par': 'TextEdit', 'cep_impar': 'TextEdit', 'matricula': 'TextEdit', 'area': 'TextEdit', 'tipo': 'TextEdit', 'velocidade': 'TextEdit', 'REORDENAMENTO NUMERICO': '', 'n_inic': '', 'n_final': '', 'CEP': '', 'pistas': '', });
lyr_camadas_COHABbusca_enderecos_6.set('fieldImages', {'fid': 'TextEdit', 'ENDERECO_IMOVEL': 'TextEdit', });
lyr_camadas_COHABcadastros_cohabpontos_7.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'objectid': 'TextEdit', 'cadastro': 'TextEdit', 'cadastro_1': 'TextEdit', 'setor': 'TextEdit', 'quadra': 'TextEdit', 'lote': 'TextEdit', 'coduni': 'TextEdit', 'codlog': 'TextEdit', 'tipo': 'TextEdit', 'logradouro': 'TextEdit', 'numero': 'TextEdit', 'complement': 'TextEdit', 'cep': 'TextEdit', 'preftestad': 'TextEdit', 'logradou_1': 'TextEdit', 'compleme_1': 'TextEdit', 'profundida': 'TextEdit', 'quadrari': 'TextEdit', 'loteri': 'TextEdit', 'ENDERECO_IMOVEL': '', });
lyr_camadas_COHABblocos_cohab_1.set('fieldLabels', {'fid': 'no label', 'bloco': 'header label - always visible', 'cep': 'no label', 'logradouro': 'no label', });
lyr_camadas_COHABlotes_local_2.set('fieldLabels', {'fid': 'hidden field', 'quadrari': 'hidden field', 'loteri': 'header label - always visible', 'DOCUMENTO_IMOV': 'hidden field', 'ART': 'hidden field', 'SETOR_COHAB': 'header label - always visible', 'ENDERECO_IMOVEL': 'no label', 'nucleo': 'no label', 'chave': 'no label', });
lyr_camadas_COHABLOTES_PLANILHA_IDENTIFICADOSsegundo_join__lotes_local_3.set('fieldLabels', {'fid': 'no label', 'quadrari': 'no label', 'loteri': 'no label', 'DOCUMENTO_IMOV': 'no label', 'ART': 'no label', 'SETOR_COHAB': 'no label', 'ENDERECO_IMOVEL': 'no label', 'nucleo': 'no label', 'chave': 'no label', 'correspondencias_score_95_chave_cohab': 'no label', 'correspondencias_score_95_CONTRATO': 'no label', 'correspondencias_score_95_Nome do Principal': 'no label', 'correspondencias_score_95_CPF do Principal': 'no label', 'correspondencias_score_95_N�CLEO HABITACIONAL': 'no label', 'correspondencias_score_95_Similaridade': 'no label', });
lyr_camadas_COHABquadras_4.set('fieldLabels', {'fid': 'no label', 'quadrari': 'header label - always visible', });
lyr_camadas_COHABLOGRADOUROS_logradouros_5.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'quadras': 'hidden field', 'objectid': 'hidden field', 'logradouro': 'header label - always visible', 'codlog1': 'hidden field', 'largura': 'hidden field', 'recuo_eixo': 'hidden field', 'passeio': 'hidden field', 'pista': 'hidden field', 'canteiro': 'hidden field', 'recuo_viar': 'hidden field', 'regular': 'hidden field', 'aux': 'hidden field', 'cep_par': 'hidden field', 'cep_impar': 'hidden field', 'matricula': 'hidden field', 'area': 'hidden field', 'tipo': 'hidden field', 'velocidade': 'hidden field', 'REORDENAMENTO NUMERICO': 'hidden field', 'n_inic': 'hidden field', 'n_final': 'hidden field', 'CEP': 'hidden field', 'pistas': 'hidden field', });
lyr_camadas_COHABbusca_enderecos_6.set('fieldLabels', {'fid': 'no label', 'ENDERECO_IMOVEL': 'no label', });
lyr_camadas_COHABcadastros_cohabpontos_7.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'objectid': 'no label', 'cadastro': 'no label', 'cadastro_1': 'no label', 'setor': 'no label', 'quadra': 'no label', 'lote': 'no label', 'coduni': 'no label', 'codlog': 'no label', 'tipo': 'no label', 'logradouro': 'no label', 'numero': 'no label', 'complement': 'no label', 'cep': 'no label', 'preftestad': 'no label', 'logradou_1': 'no label', 'compleme_1': 'no label', 'profundida': 'no label', 'quadrari': 'no label', 'loteri': 'no label', 'ENDERECO_IMOVEL': 'no label', });
lyr_camadas_COHABcadastros_cohabpontos_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});