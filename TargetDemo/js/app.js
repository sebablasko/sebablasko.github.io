(function () {
  var P = window.PRODUCTS, CATS = window.CATS;
  var q = new URLSearchParams(location.search);
  var page = document.body.getAttribute('data-page');

  function card(p) {
    return '<a class="card" href="product.html?id=' + p.id + '">' +
      '<img src="' + p.img + '" alt="' + p.name + '">' +
      '<h3>' + p.name + '</h3>' +
      '<div class="meta">' + p.catName + '</div>' +
      '<div class="price">$' + p.price + '</div></a>';
  }
  function fill(id, list) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = list.map(card).join('');
  }

  if (page === 'index') {
    fill('grid', P.filter(function (p, i) { return i % 3 === 0 || i === 1; }).slice(0, 6));
    // Contenido por defecto de la zona de recomendaciones (Target lo reemplaza)
    fill('recs-home', [P[3], P[5], P[8], P[10]]);
  }

  if (page === 'category') {
    var cat = q.get('cat') || 'running';
    var name = CATS[cat] || 'Running';
    document.title = name + ' | Sendero';
    document.getElementById('cat-title').textContent = name;
    fill('grid', P.filter(function (p) { return p.cat === cat; }));
  }

  if (page === 'product') {
    var prod = P.filter(function (x) { return x.id === q.get('id'); })[0] || P[0];
    document.title = prod.name + ' | Sendero';
    document.getElementById('p-img').src = prod.img;
    document.getElementById('p-img').alt = prod.name;
    document.getElementById('p-name').textContent = prod.name;
    document.getElementById('p-cat').textContent = prod.catName;
    document.getElementById('p-price').textContent = '$' + prod.price;
    document.getElementById('p-msg').textContent = prod.msg;
    document.getElementById('buy-btn').href =
      'confirmation.html?id=' + prod.id + '&order=SD' + Date.now().toString().slice(-6);
    // Contenido por defecto de recomendaciones (Target lo reemplaza)
    fill('recs-product', P.filter(function (x) { return x.id !== prod.id; }).slice(0, 4));
  }

  if (page === 'confirmation') {
    var item = P.filter(function (x) { return x.id === q.get('id'); })[0];
    var order = q.get('order') || 'SD000000';
    if (item) document.getElementById('c-item').textContent = item.name + ' ($' + item.price + ')';
    document.getElementById('c-order').textContent = order;
    // Conversión con ingresos: mbox estándar de Target
    var tries = 0;
    (function send() {
      if (window.adobe && adobe.target && adobe.target.trackEvent) {
        adobe.target.trackEvent({
          mbox: 'orderConfirmPage',
          params: { orderId: order, orderTotal: item ? item.price : 0, productPurchasedId: item ? item.id : '' }
        });
      } else if (tries++ < 20) { setTimeout(send, 300); }
    })();
  }

  // Panel de depuración para la demo: muestra lo que se envía a Target
  var btn = document.getElementById('dbg-toggle'), box = document.getElementById('dbg');
  if (btn && box) {
    btn.addEventListener('click', function () {
      var show = box.style.display !== 'block';
      box.style.display = show ? 'block' : 'none';
      box.textContent = JSON.stringify(window.targetPageParams ? window.targetPageParams() : {}, null, 2);
      btn.setAttribute('aria-expanded', show);
    });
  }
})();
