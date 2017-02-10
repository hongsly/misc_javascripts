var expand = function(list, output, indent) {
  for (var i = 0; i < list.children.length; ++i) {
    c = list.children[i];
    console.log(c, indent);
    switch (c.tagName) {
      case 'UL':
        expand(c, output, indent+1);
        break;
      case 'LI':
        expand(c, output, indent);
        break;
      default:
        var s = '';
        for (var j = 0; j < indent; ++j) {
          s += '\t';
          console.log('\t');
        }
        s += c.innerText + '\n';
        output.push(s);
        console.log(c.innerText + '\n');
    }
  }
};