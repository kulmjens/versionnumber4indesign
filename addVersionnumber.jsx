#targetengine "session"
app.addEventListener('beforeSave', function(theEvent) {
  var doc = app.activeDocument;
  var vn = doc.textVariables.item('Versionnumber');
  if(vn.isValid) {
    var v = vn.variableOptions.contents;
    v = parseInt(v);
    v++;
    vn.variableOptions.contents = String(v);
  }
});
