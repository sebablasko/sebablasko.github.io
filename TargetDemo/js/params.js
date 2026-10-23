/* Define los parámetros que se envían a Target en cada carga de página.
   DEBE cargarse ANTES de at.js. */
(function () {
  var q = new URLSearchParams(location.search);
  var file = location.pathname.split('/').pop() || 'index.html';
  var page = file.replace('.html', '') || 'index';
  var p = { pageType: page };

  if (page === 'category') {
    var cat = q.get('cat') || 'running';
    p.pageCategory = cat;              // lo usan los profile scripts
    p['entity.categoryId'] = cat;      // lo usa Recommendations (afinidad por categoría)
  }

  if (page === 'product') {
    var prod = window.PRODUCTS.filter(function (x) { return x.id === q.get('id'); })[0];
    if (prod) {
      var base = location.href.replace(/[^\/]*(\?.*)?$/, '');
      p.pageCategory = prod.cat;
      p['entity.id'] = prod.id;
      p['entity.name'] = prod.name;
      p['entity.categoryId'] = prod.cat;
      p['entity.message'] = prod.msg;
      p['entity.value'] = prod.price;
      p['entity.inventory'] = 25;
      p['entity.brand'] = 'Sendero';
      p['entity.thumbnailUrl'] = base + prod.img;
      p['entity.pageUrl'] = base + 'product.html?id=' + prod.id;
    }
  }

  window.targetPageParams = function () { return p; };
})();
