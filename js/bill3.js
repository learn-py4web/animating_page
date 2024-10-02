var entree_el = $('input[name="entree"]');
var dessert_el = $('input[name="dessert"]');
var total_el = $('#total');

function updateTotal() {
    var entree = parseFloat(entree_el.val());
    var dessert = parseFloat(dessert_el.val());
    var total = entree + dessert;
    total_el.text(total);
    }

// These listen for change events. 
entree_el.change(updateTotal);
dessert_el.change(updateTotal);


