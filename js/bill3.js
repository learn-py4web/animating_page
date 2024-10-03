var entree_el = $('input[name="entree"]'); // This is actually the list of nodes that are selected.
var dessert_el = $('input[name="dessert"]');
var total_el = $('#total');
var tip_amount = 0.15;

function updateTotal() {
    var entree = parseFloat(entree_el.val());
    var dessert = parseFloat(dessert_el.val());
    var total = entree + dessert;
    total = total + (total * tip_amount);
    total_el.text("$" + total.toFixed(2));
    }

// These listen for change events. 
entree_el.change(updateTotal);
dessert_el.change(updateTotal);

// Buttons. 
$('#tip-15').click(function() {
    tip_amount = 0.15;
    updateTotal();
    });
$('#tip-20').click(function() {
    tip_amount = 0.20;
    updateTotal();
    });
$('#tip-25').click(function() {
    tip_amount = 0.25;
    updateTotal();
    });
        



